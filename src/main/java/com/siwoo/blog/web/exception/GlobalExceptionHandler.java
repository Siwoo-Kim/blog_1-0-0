package com.siwoo.blog.web.exception;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.web.support.ErrorMessage;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.TypeMismatchException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.util.Locale;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    private static final String RESOURCE_NOT_FOUND_CODE = "error.notfound.model";
    @Autowired MessageSource messageSource;

    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String notFound(NoHandlerFoundException e) {
        System.out.println(e.getMessage());
        return "index.html";
    }

    @ExceptionHandler({
            MethodArgumentTypeMismatchException.class,
            TypeMismatchException.class
    })
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage badParameter(Exception e) {
        System.out.println(e.getMessage());
        ErrorMessage errorMessage = new ErrorMessage("parameter","Query Parameter is not valid");
        return errorMessage;
    }

    @ResponseBody
    @ExceptionHandler(CategoryNotFoundException.class)
    public ErrorMessage notFoundCategory(CategoryNotFoundException e, Locale locale) {
        System.out.println("handeld");
        return new ErrorMessage(e.getByField(), messageSource.getMessage(RESOURCE_NOT_FOUND_CODE, new Object[]{e.getModel(), e.getByField()}, locale));
    }

}
