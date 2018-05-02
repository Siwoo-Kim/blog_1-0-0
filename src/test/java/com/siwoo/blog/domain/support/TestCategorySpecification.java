package com.siwoo.blog.domain.support;

import org.junit.Test;

import static com.siwoo.blog.domain.support.CategorySpecification.Type.ALL;
import static com.siwoo.blog.domain.support.CategorySpecification.Type.CATEGORY_TYPE;
import static com.siwoo.blog.domain.support.CategorySpecification.Type.LANGUAGE;
import static org.junit.Assert.*;

public class TestCategorySpecification {

    @Test
    public void construct() {
        final String value = "hi";

        CategorySpecification categorySpecification = new CategorySpecification(value,ALL);
        assertTrue(!categorySpecification.isEmpty());
        assertTrue(categorySpecification.types.contains(ALL));
        assertTrue(categorySpecification.types.size() == CategorySpecification.Type.values().length);
        assertTrue(categorySpecification.getValue().equals(value));

        CategorySpecification categorySpecification1 = new CategorySpecification(" ",ALL);
        assertTrue(categorySpecification1.isEmpty());
        assertTrue(categorySpecification1.types.isEmpty());
        System.out.println(categorySpecification1.getValue());
        assertTrue(categorySpecification1.getValue() == null);

        categorySpecification1 = new CategorySpecification(value,LANGUAGE,CATEGORY_TYPE);
        assertTrue(!categorySpecification1.isEmpty());
        assertTrue(!categorySpecification1.types.isEmpty());
        assertTrue(categorySpecification1.types.contains(LANGUAGE));
        assertTrue(categorySpecification1.types.contains(CATEGORY_TYPE));
        assertTrue(categorySpecification1.types.size() == 2);
        assertTrue(categorySpecification1.getValue().equals(value));

    }
}
