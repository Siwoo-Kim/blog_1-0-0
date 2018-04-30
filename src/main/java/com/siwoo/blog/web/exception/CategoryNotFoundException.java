package com.siwoo.blog.web.exception;

public class CategoryNotFoundException extends ModelNotFoundException{
    private static final String model = "Category";

    public CategoryNotFoundException(String byField) {
        super(model, byField);
    }

    public CategoryNotFoundException(String message, String byField) {
        super(message, model, byField);
    }

}
