package com.siwoo.blog.service;

import com.siwoo.blog.domain.support.ShortCategory;
import com.siwoo.blog.repository.TopicRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCategoryServiceImpl {

    @Autowired
    CategoryService categoryService;

    @Autowired
    TopicRepository topicRepository;

    @Test
    public void shortAllFetched() {
        List<ShortCategory> shortCategories = categoryService.shortAllFetched();

        assertNotNull(shortCategories);
        assertTrue(!shortCategories.isEmpty());
    }
}
