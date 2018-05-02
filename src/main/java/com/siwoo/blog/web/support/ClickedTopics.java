package com.siwoo.blog.web.support;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import java.util.*;

@Data
@Component
@Scope(scopeName = "session",proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ClickedTopics {

    private final static int maxSize = 5;

    private List<ClickedTopic> topics = new ArrayList<>();

    @Data
    @EqualsAndHashCode(of = {"topicName","categoryName"})
    public static class ClickedTopic {
        String topicName;
        String categoryName;
    }

    public List<ClickedTopic> getTopics() {
        return Collections.unmodifiableList(topics);
    }

    protected void setTopics(List<ClickedTopic> topics) {
        if(topics.size() > maxSize) {
            throw new IllegalStateException();
        }
        this.topics = new ArrayList<>(topics);
    }

    public void addTopic(ClickedTopic clickedTopic) {
        if(!topics.contains(clickedTopic)) {
            topics.add(clickedTopic);
        }
        if(maxSize < topics.size()) {
            topics.remove(0);
        }
    }

    public boolean containsTopic(ClickedTopic clickedTopic) {
        return topics.contains(clickedTopic);
    }
}
