package com.siwoo.blog.web;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/category")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping
    public List<Category> categories() {
        return categoryRepository.findAll();
    }

    @GetMapping(params = "request=name")
    public List<String> names() {
        return categoryRepository.findAllNames();
    }

}
