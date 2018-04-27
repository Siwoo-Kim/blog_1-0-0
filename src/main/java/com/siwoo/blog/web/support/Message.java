package com.siwoo.blog.web.support;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;

import java.util.Locale;

@Getter @Setter @ToString
public class Message {
    private String code;
    private String[] args;
    private String message;
    private boolean resolved;

    public Message(String code, String[] args) {
        this.code = code;
        this.args = args;
    }

    public boolean hasArguments() {
        return args != null && args.length > 0;
    }

    public void resolveMessage(MessageSource messageSource, Locale locale) {
        try {
            if (hasArguments()) {
                this.message = messageSource.getMessage(code, args, locale);
            } else {
                this.message = messageSource.getMessage(code, null, locale);
            }
            resolved = true;
        }catch (NoSuchMessageException e) {
            resolved = false;
        }
    }
}
