package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.domain.support.CategorySpecification;
import com.siwoo.blog.domain.support.ShortCategory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertNotNull;
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

    @Test
    public void searchAny() {
        String value = "java";

        List<Category> categories = categoryRepository
                .searchAny(new CategorySpecification(value, CategorySpecification.Type.ALL));
        assertNotNull(categories);
        categories.stream().forEach(category -> {
            assertTrue(category.getName().toUpperCase().contains(value.toUpperCase())
                    || category.getDescription().toUpperCase().contains(value.toUpperCase())
                    || category.getType().name().equals(value.toUpperCase())
            );
        });

        String value2 = "FRONTEND";
        categories = categoryRepository
                .searchAny(new CategorySpecification(value2, CategorySpecification.Type.ALL));
        assertNotNull(categories);
        categories.stream().forEach(category -> {
            assertTrue(category.getName().toUpperCase().contains(value2.toUpperCase())
                    || category.getDescription().toUpperCase().contains(value2.toUpperCase())
                    || category.getType().name().equals(value2.toUpperCase())
            );
        });

        String value3 = "typescript";
        categories = categoryRepository
                .searchAny(new CategorySpecification(value2, CategorySpecification.Type.ALL));
        assertNotNull(categories);
        categories.stream().forEach(category -> {
            assertTrue(category.getLanguage().getName().toUpperCase().equals(value3.toUpperCase()));
        });


    }
}
