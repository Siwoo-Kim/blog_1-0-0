package com.siwoo.blog.web.tester;

import com.siwoo.blog.web.support.RecentTopic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/rest/tester/session")
public class RecentTopicSessionController {

    @Autowired
    RecentTopic recentTopic;

    @GetMapping(value = "/create", params = "request=recentTopic")
    public Map create(@ModelAttribute RecentTopic recentTopic) {
        this.recentTopic.setId(recentTopic.getId());
        this.recentTopic.setTopicName(recentTopic.getTopicName());
        return recentTopic.data();
    }

    @GetMapping(params = "request=recentTopic")
    public Map get() {
        return recentTopic.data();
    }

}
