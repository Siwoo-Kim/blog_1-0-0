package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.domain.support.CategorySpecification;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface CustomCategoryRepository  {

    List<Category> searchAny(CategorySpecification specification);

}
