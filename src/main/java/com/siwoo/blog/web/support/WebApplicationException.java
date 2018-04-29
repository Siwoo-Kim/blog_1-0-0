package com.siwoo.blog.web.support;

import lombok.Getter;

@Getter
public class WebApplicationException extends RuntimeException {

    public WebApplicationException(String message) {
        super(message);
    }

    public WebApplicationException(String message, Throwable cause) {
        super(message, cause);
    }
}
