package com.siwoo.blog.service;

import com.siwoo.blog.web.support.Message;

import java.util.List;
import java.util.Locale;

public interface MessageService {

    Message message(Message message, Locale locale);
    List<Message> messageBundle(List<String> codes, Locale locale);

}
