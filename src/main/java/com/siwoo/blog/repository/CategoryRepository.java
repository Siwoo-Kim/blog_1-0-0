package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.domain.support.ShortCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long>, CustomCategoryRepository {

    @Query("select c.name from Category c")
    List<String> findAllNames();

    @Query("select c from Category c where upper(c.name) = upper(:name)")
    Category findByName(@Param("name") String name);

    @Query("select distinct c.imgName from Category c")
    List<String> findAllImgNames();

    @Query("select new com.siwoo.blog.domain.support.ShortCategory(c.id, c.name) from Category c")
    List<ShortCategory> findShortAll();

    @Query("select new com.siwoo.blog.domain.support.ShortCategory(c.id, c.name) from Category c where upper(c.name) = upper(:name)")
    ShortCategory findShortByName(@Param("name") String name);

}
