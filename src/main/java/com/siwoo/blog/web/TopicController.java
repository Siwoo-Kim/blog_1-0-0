package com.siwoo.blog.web;

import com.siwoo.blog.domain.Topic;
import com.siwoo.blog.repository.TopicRepository;
import com.siwoo.blog.service.TopicService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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
        log.warn(value + "");
        return this.topicRepository.findByCategoryName(value);
    }

}
