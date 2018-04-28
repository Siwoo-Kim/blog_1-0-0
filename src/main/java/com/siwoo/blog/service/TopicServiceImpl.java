package com.siwoo.blog.service;

import com.siwoo.blog.domain.Topic;
import com.siwoo.blog.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    TopicRepository topicRepository;

    @Autowired
    CategoryService categoryService;

    @Override
    public void save(Topic topic) {
        Integer index = topicRepository.findLastIndex();
        if(index == null) {
            index = 0;
        }
        topic.setIndex(index + 1);
        topicRepository.save(topic);
    }

    @Override
    public void switchIndex(Topic topic1, Topic topic2) {
        topic1.switchIndex(topic2);
        topicRepository.save(topic1);
        topicRepository.save(topic2);
    }


}
