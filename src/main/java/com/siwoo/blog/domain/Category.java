package com.siwoo.blog.domain;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter @Setter @ToString
@Entity @Table(name = "tbl_category")
@EqualsAndHashCode(of = {"id","name"})
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String svgName;
    private BasicTime basicTime;
    @Column(length = 1500)
    private String description;
    @Enumerated(EnumType.STRING)
    private CategoryType type;
    @ManyToOne
    @JoinColumn(name = "language_id")
    private Language language;

    public void setLanguage(Language language) {
        this.language = language;
        if(!language.getCategories().contains(this)) {
            language.getCategories().add(this);
        }
    }

}
