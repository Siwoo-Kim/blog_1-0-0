package com.siwoo.blog.repository;

import com.siwoo.blog.domain.support.ShortCategory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestCategoryRepository {

    @Autowired CategoryRepository categoryRepository;

    @Test
    public void findShortAll() {
        List<ShortCategory> shorts = categoryRepository.findShortAll();
        assertTrue(shorts.size() == categoryRepository.count());
        System.out.println(shorts);
    }
}
