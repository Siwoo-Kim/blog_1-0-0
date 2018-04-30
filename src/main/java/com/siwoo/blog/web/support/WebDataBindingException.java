package com.siwoo.blog.web.support;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@ResponseStatus(HttpStatus.BAD_REQUEST)
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
