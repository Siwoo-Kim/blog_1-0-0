package com.siwoo.blog.service;

import com.siwoo.blog.web.support.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Slf4j
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    MessageSource messageSource;

    @Override
    public Message message(Message message, Locale locale) {
        message.resolveMessage(messageSource, locale);
        return message;
    }

    @Override
    public List<Message> messageBundle(List<String> codes, Locale locale) {
        if(codes.isEmpty()) { return null; }
        return codes.stream()
                .map(code -> {
                 Message message = new Message(code, null);
                 message.resolveMessage(messageSource,locale);
                 return message;
                })
                .collect(Collectors.toList());
    }
}
