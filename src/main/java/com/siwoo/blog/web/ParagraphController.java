package com.siwoo.blog.web;

import com.siwoo.blog.domain.Paragraph;
import com.siwoo.blog.repository.ParagraphRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/paragraph")
public class ParagraphController {

    @Autowired
    ParagraphRepository paragraphRepository;

    @GetMapping
    List<Paragraph> all() {
        return paragraphRepository.findAll();
    }

    @GetMapping(params = "by=topicName")
    List<Paragraph> byTopicName(@RequestParam String value) {
        return paragraphRepository.findByTopicName(value);
    }

    @GetMapping("/{categoryName}/{topicName}")
    List<Paragraph> byTopicNameAndCategoryName(@PathVariable String topicName, @PathVariable String categoryName) {
        return paragraphRepository.findByTopicNameAndCategoryName(topicName, categoryName);
    }
}
