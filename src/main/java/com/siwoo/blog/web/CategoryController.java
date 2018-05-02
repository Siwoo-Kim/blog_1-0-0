package com.siwoo.blog.web;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.domain.support.CategorySpecification;
import com.siwoo.blog.domain.support.CategoryValidationGroup.*;
import com.siwoo.blog.domain.support.ShortCategory;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.service.CategoryService;
import com.siwoo.blog.web.exception.CategoryNotFoundException;
import com.siwoo.blog.web.support.ErrorMessage;
import com.siwoo.blog.web.support.WebDataBindingException;
import static com.siwoo.blog.domain.support.CategorySpecification.Type.ALL;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Slf4j
@RestController
@RequestMapping("/rest/category")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    CategoryService categoryService;

    @GetMapping("/test")
    public void getHeader(@RequestHeader Map headers) {
        System.out.println(headers);
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(String.class, new StringTrimmerEditor(true));
    }

    @GetMapping
    public List<Category> categories() {
        System.out.println("Handled");
        return categoryRepository.findAll();
    }

    @GetMapping(params = "request=name")
    public List<String> names() {
        return categoryRepository.findAllNames();
    }

    @GetMapping(params = "by=name")
    public Category byName(@RequestParam String value) {
        Category category = categoryRepository.findByName(value);
        if(category == null) {
            throw new CategoryNotFoundException("Category[name:" + value +"] not found","name");
        }
        return category;
    }


    @GetMapping(params = "request=short")
    List<ShortCategory> allShorts() {
        return categoryService.shortAllFetched();
    }

    @GetMapping(params = {"request=short","by=categoryName"})
    ShortCategory allShortsByCategoryName(@RequestParam String value) {
        return categoryService.shortAllByCategoryNameFetched(value);
    }

    @GetMapping(params = {"by=specification","request=all_any"})
    List<Category> searchAny(@RequestParam String value) {
        return categoryRepository.searchAny(new CategorySpecification(value, ALL));
    }

    @Autowired
    MessageSource messageSource;
    @PostMapping
    Object save(@Validated(UpdateForm.class) @RequestBody Category category, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            throw new WebDataBindingException(bindingResult);
        }
        return null;
    }

    @ExceptionHandler(WebDataBindingException.class)
    public ResponseEntity<Object> handleException(WebDataBindingException e) {
        List<ErrorMessage> errorMessages = new ArrayList<>();
        e.getResult().getFieldErrors().stream().forEach(fieldError -> {
            errorMessages.add(new ErrorMessage(fieldError.getField(), fieldError.getDefaultMessage()));
        });
        return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
    }

}
