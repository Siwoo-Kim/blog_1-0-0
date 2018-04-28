package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Topic;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestTopicRepository {

    @Autowired TopicRepository topicRepository;

    @Test
    public void findMaxDisplayIndex() {
//        Integer index = topicRepository.findLastIndex();
//        assertNull(index);
//
//        Topic topic = new Topic();
//        topic.setIndex(0);
//        topicRepository.save(topic);
//        index = topicRepository.findLastIndex();
//        System.out.println("Last index : "+ index);
//        assertTrue(index == 0);
//
//        topic = new Topic();
//        topic.setIndex(1);
//        topicRepository.save(topic);
//        index = topicRepository.findLastIndex();
//        System.out.println("Last index : "+ index);
//        assertTrue(index == 1);
//
//        topic = new Topic();
//        topic.setIndex(2);
//        topicRepository.save(topic);
//        index = topicRepository.findLastIndex();
//        System.out.println("Last index : "+ index);
//        assertTrue(index == 2);
//
//        topic = new Topic();
//        topic.setIndex(3);
//        topicRepository.save(topic);
//        index = topicRepository.findLastIndex();
//        System.out.println("Last index : "+ index);
//        assertTrue(index == 3);

    }
}
