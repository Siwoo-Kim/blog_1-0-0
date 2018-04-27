package com.siwoo.blog.service;

import com.siwoo.blog.web.support.Message;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.MessageSource;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.Locale;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestMessageService {

    @Autowired MessageService messageService;

    @Autowired
    MessageSource messageSource;
    @Test
    public void getMessage() {
        Message message = new Message("label.sidenav.topics", null);
        message = messageService.message(message,Locale.ENGLISH);
        assertTrue(message.isResolved());
        assertNotNull(message.getMessage());

        message = new Message("label.sidenav.guide", null);
        message = messageService.message(message,Locale.KOREAN);
        assertTrue(message.isResolved());
        assertNotNull(message.getMessage());

        message = new Message("notexist", null);
        message = messageService.message(message,Locale.KOREAN);
        assertFalse(message.isResolved());
        assertNull(message.getMessage());
    }
}
