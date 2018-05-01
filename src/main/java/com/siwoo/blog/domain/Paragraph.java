package com.siwoo.blog.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data @ToString(exclude = "children")
@Entity @Table(name = "tbl_paragraph")
@EqualsAndHashCode(of = {"id","title"})
public class Paragraph {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 2000)
    private String description;
    @Column(length = 2000)
    private String code;

    @ManyToOne
    @JoinColumn(name = "topic_id")
    private Topic topic;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Paragraph parent;

    @OneToMany(fetch = FetchType.EAGER,
            mappedBy = "parent",
            orphanRemoval = true,
            cascade = CascadeType.ALL)
    private List<Paragraph> children = new ArrayList<>();

    public void setTopic(Topic topic) {
        this.topic = topic;
        if(!topic.getParagraphs().contains(this)) {
            topic.getParagraphs().add(this);
        }
    }

    public void addChild(Paragraph child) {
        if(!children.contains(child)) {
            children.add(child);
        }
        if(child.getParent() != this) {
            child.setParent(this);
        }
    }

    public void setParent(Paragraph parent) {
        this.parent = parent;
        if(!parent.children.contains(this)) {
            parent.addChild(this);
        }
    }
}
