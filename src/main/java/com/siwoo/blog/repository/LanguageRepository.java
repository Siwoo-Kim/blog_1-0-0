package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LanguageRepository extends JpaRepository<Language, Long>, CustomLanguageRepository {

    @Query("select l from Language l where upper(l.name) = upper(:name) ")
    Language findByName(@Param("name") String name);
}
