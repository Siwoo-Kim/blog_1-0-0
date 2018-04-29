package com.siwoo.blog.service;

import com.siwoo.blog.domain.support.ShortCategory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
public interface CategoryService {

    List<ShortCategory> shortAllFetched();

    ShortCategory shortAllByCategoryNameFetched(String categoryName);
}
