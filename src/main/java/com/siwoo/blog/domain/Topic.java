package com.siwoo.blog.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter @Setter @ToString
@Entity @Table(name = "tbl_topic")
public class Topic {

    @Id @GeneratedValue
    private Long id;

    private String name;

    @Column(length = 2000)
    private String description;

    @Column(length = 500)
    private String shortDescription;

    private BasicTime basicTime;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    private Integer rating = 0;

    private Integer difficulty = 0;

    @Column(name = "display_index")
    private Integer index;

    public void switchIndex(Topic topic) {
        Integer prevIndex = index;
        this.setIndex(topic.getIndex());
        topic.setIndex(prevIndex);
    }

}
