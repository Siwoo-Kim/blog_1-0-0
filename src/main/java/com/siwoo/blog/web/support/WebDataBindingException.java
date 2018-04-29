package com.siwoo.blog.web.support;

import lombok.Getter;
import org.springframework.validation.BindingResult;

@Getter
public class WebDataBindingException extends WebApplicationException {
    private static final String message = "Posting Date is invalid";
    private BindingResult result;

    public WebDataBindingException(BindingResult bindingResult){
        super(message);
        this.result = bindingResult;
    }

    public WebDataBindingException(String message, BindingResult bindingResult) {
        super(message);
        this.result = bindingResult;
    }

}
