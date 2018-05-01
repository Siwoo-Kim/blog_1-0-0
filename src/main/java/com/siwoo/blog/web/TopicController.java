package com.siwoo.blog.web;

import com.siwoo.blog.domain.Topic;
import com.siwoo.blog.repository.TopicRepository;
import com.siwoo.blog.service.TopicService;
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

    @GetMapping
    List<Topic> all() {
        return topicRepository.findAll();
    }

    @GetMapping(params = "by=categoryName")
    List<Topic> byCategoryName(@RequestParam("value") String value) {
        return this.topicRepository.findByCategoryName(value);
    }

    @GetMapping("/{categoryName}/{topicName}")
    Topic byCategoryName(@PathVariable String categoryName, @PathVariable String topicName) {
        return this.topicRepository.findByNameAndCategoryName(topicName,categoryName);
    }

}
