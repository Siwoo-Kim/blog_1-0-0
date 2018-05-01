package com.siwoo.blog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data @ToString(exclude = "paragraphs")
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

    @JsonIgnore
    @OneToMany(mappedBy = "topic",
            orphanRemoval = true,
            cascade = CascadeType.ALL)
    private List<Paragraph> paragraphs = new ArrayList<>();

    private Integer rating = 0;

    private Integer difficulty = 0;

    @Column(name = "display_index")
    private Integer index;

    public void switchIndex(Topic topic) {
        Integer prevIndex = index;
        this.setIndex(topic.getIndex());
        topic.setIndex(prevIndex);
    }

    public void addParagraph(Paragraph paragraph) {
        if(!paragraphs.contains(paragraph)) {
            this.paragraphs.add(paragraph);
        }
        if(paragraph.getTopic() != this) {
            paragraph.setTopic(this);
        }
    }
}
