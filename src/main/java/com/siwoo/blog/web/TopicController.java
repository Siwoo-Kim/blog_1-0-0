package com.siwoo.blog.web;

import com.siwoo.blog.domain.Topic;
import com.siwoo.blog.repository.TopicRepository;
import com.siwoo.blog.service.TopicService;
import com.siwoo.blog.web.support.ClickedTopics;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/rest/topic")
public class TopicController {

    @Autowired
    TopicRepository topicRepository;
    @Autowired
    TopicService topicService;
    @Autowired
    ClickedTopics clickedTopics;

    @GetMapping
    List<Topic> all() {
        return topicRepository.findAll();
    }

    @GetMapping(params = "by=topicName")
    List<Topic> byName(@RequestParam String value) {
        return topicRepository.findByName(value);
    }

    @GetMapping(params = "by=categoryName")
    List<Topic> byCategoryName(@RequestParam String value) {
        return this.topicRepository.findByCategoryName(value);
    }

    @GetMapping("/{categoryName}/{topicName}")
    Topic byCategoryName(@PathVariable String categoryName, @PathVariable String topicName) {
        return this.topicRepository.findByNameAndCategoryName(topicName,categoryName);
    }

    @GetMapping(value = "clickedTopic")
    public List<ClickedTopics.ClickedTopic> resolveSessionClickedTopics() {
        return clickedTopics.getTopics();
    }

    @PostMapping("clickedTopic")
    public List<ClickedTopics.ClickedTopic> putSessionClickedTopics(
            @RequestBody ClickedTopics.ClickedTopic topic) {
        clickedTopics.addTopic(topic);
        return clickedTopics.getTopics();
    }

}
