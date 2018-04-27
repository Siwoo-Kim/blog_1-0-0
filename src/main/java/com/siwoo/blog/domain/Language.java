package com.siwoo.blog.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @ToString(exclude = "categories")
@Entity @Table(name = "tbl_language")
@EqualsAndHashCode(of = {"id","name"})
public class Language {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String svgName;
    @Column(length = 1500)
    private String description;
    @Enumerated(EnumType.STRING)
    @Column(name = "language_type")
    private LanguageType type;

    @OneToMany(mappedBy = "language")
    private List<Category> categories = new ArrayList<>();
}
