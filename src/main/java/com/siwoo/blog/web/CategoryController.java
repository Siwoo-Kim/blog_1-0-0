package com.siwoo.blog.web;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.domain.support.ShortCategory;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.service.CategoryService;
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
    @Autowired
    CategoryService categoryService;

    @GetMapping
    public List<Category> categories() {
        return categoryRepository.findAll();
    }

    @GetMapping(params = "request=name")
    public List<String> names() {
        return categoryRepository.findAllNames();
    }


    @GetMapping(params = {"request=short"})
    List<ShortCategory> allNamesByCategoryName() {
        return categoryService.shortAllFetched();
    }


}
