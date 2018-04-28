package com.siwoo.blog.service;

import com.siwoo.blog.domain.support.ShortCategory;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.repository.TopicRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;

    @Override
    public List<ShortCategory> shortAllFetched() {
        List<ShortCategory> shortCategories = categoryRepository.findShortAll();
        System.out.println("Geted "+ shortCategories);
        shortCategories
                .stream()
                .forEach(shortCategory -> {
                    shortCategory.setTopics(topicRepository.findShortTopicByCategoryId(shortCategory.getId()));
                });
        return shortCategories;
    }
}
