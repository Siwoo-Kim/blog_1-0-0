package com.siwoo.blog.web.support;

import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Data
@Component
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RecentTopic {

    private Long id;
    private String topicName;

    public RecentTopic() {}

    public RecentTopic(Long id, String topicName) {
        this.id = id;
        this.topicName = topicName;
    }


    public Long getId() {
        return id;
    }

    public String getTopicName() {
        return topicName;
    }

    public Map data() {
        Map<String,String> map = new HashMap<>();
        map.put("id", getId() +"");
        map.put("topicName", getTopicName());
        return map;
    }

}
