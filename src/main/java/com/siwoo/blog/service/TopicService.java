package com.siwoo.blog.service;

import com.siwoo.blog.domain.Topic;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface TopicService {

    @Transactional(readOnly = false)
    void save(Topic topic);

    @Transactional(readOnly = false)
    void switchIndex(Topic topic1, Topic topic2);
}
