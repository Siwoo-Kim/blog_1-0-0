package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {

    @Query("select p from Paragraph p where upper(p.topic.name) = upper(:topicName) and p.parent is null ")
    List<Paragraph> findByTopicName(@Param("topicName") String topicName);

    @Query("select p from Paragraph p where upper(p.topic.name) = upper(:topicName) " +
            "and upper(p.topic.category.name) = upper(:categoryName)" +
            "and p.parent is null ")
    List<Paragraph> findByTopicNameAndCategoryName(@Param("topicName") String topicName,
                                                   @Param("categoryName") String categoryName);
}
