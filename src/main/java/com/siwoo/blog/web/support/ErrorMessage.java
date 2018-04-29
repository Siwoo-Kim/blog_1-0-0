package com.siwoo.blog.web.support;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class ErrorMessage {
    private String field;
    private String message;

    public ErrorMessage(String field, String message) {
        this.field = field;
        this.message = message;
    }
}
