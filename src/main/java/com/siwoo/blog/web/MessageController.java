package com.siwoo.blog.web;

import com.siwoo.blog.service.MessageService;
import com.siwoo.blog.web.support.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/rest/message")
public class MessageController {

    @Autowired
    MessageService messageService;

    @GetMapping
    public List<Message> messages(@RequestParam("value") List<String> messages,
                                  Locale locale) {
        return messageService.messageBundle(messages, locale);
    }

}
