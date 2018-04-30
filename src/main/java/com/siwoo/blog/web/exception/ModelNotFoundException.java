package com.siwoo.blog.web.exception;

import lombok.Getter;

@Getter
public class ModelNotFoundException extends RuntimeException {
    private String model;
    private String byField;

    public ModelNotFoundException(String model, String byField) {
        this.model = model;
        this.byField = byField;
    }

    public ModelNotFoundException(String message, String model, String byField) {
        super(message);
        this.model = model;
        this.byField = byField;
    }

}
