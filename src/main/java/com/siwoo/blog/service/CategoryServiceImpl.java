package com.siwoo.blog.service;

import com.siwoo.blog.domain.support.ShortCategory;
import com.siwoo.blog.domain.support.ShortTopic;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.repository.TopicRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

@Slf4j
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;

    Consumer<ShortCategory> fetchShortTopicByShortCategory =
            shortCategory -> shortCategory.setTopics(topicRepository.findShortTopicByCategoryId(shortCategory.getId()));
    @Override
    public List<ShortCategory> shortAllFetched() {
        List<ShortCategory> shortCategories = categoryRepository.findShortAll();
        shortCategories
                .stream()
                .forEach(fetchShortTopicByShortCategory);
        return shortCategories;
    }

    @Override
    public ShortCategory shortAllByCategoryNameFetched(String categoryName) {
        ShortCategory shortCategory = categoryRepository.findShortByName(categoryName);
        if(shortCategory == null) return null;
        Arrays.asList(shortCategory).stream().forEach(fetchShortTopicByShortCategory);
        return shortCategory;
    }

}
