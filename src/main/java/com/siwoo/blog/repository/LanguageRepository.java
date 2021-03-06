package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LanguageRepository extends JpaRepository<Language, Long>, CustomLanguageRepository {

    @Query("select l from Language l where upper(l.name) = upper(:name) ")
    Language findByName(@Param("name") String name);

    @Query("select distinct l.imgName from Language l")
    List<String> findAllImgNames();

}
