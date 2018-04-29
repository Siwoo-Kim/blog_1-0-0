package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Topic;
import com.siwoo.blog.domain.support.ShortTopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Long> {

    @Query("select max(t.index) from Topic t")
    Integer findLastIndex();

    @Query("select new com.siwoo.blog.domain.support.ShortTopic(t.id, t.name) from Topic t where t.category.id = :categoryId")
    List<ShortTopic> findShortTopicByCategoryId(@Param("categoryId") Long categoryId);

    @Query("select t.name from Topic t where upper(t.category.name) = upper(:categoryName) ")
    List<String> findNamesByCategoryName(@Param("categoryName") String categoryName);

    @Query("select t from Topic t where upper(t.category.name) = upper(:categoryName) ")
    List<Topic> findByCategoryName(@Param("categoryName") String categoryName);
}
