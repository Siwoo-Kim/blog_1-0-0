package com.siwoo.blog.domain;


import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import static com.siwoo.blog.domain.support.CategoryValidationGroup.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

import static com.siwoo.blog.domain.support.ErrorCodes.*;


@Getter @Setter @ToString
@Entity @Table(name = "tbl_category")
@EqualsAndHashCode(of = {"id","name"})
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = ERROR_NOTBLANK)
    @Length(min = 3, max = 20, message = ERROR_LENGTH)
    private String name;

    private String imgName;

    @NotNull(message = ERROR_NOTNULL)
    @Valid
    private BasicTime basicTime;

    @Column(length = 1500)
    @NotBlank(message = ERROR_NOTBLANK)
    @Length(min = 10, max = 1500, message = ERROR_LENGTH)
    private String description;

    @NotNull(message = ERROR_NOTNULL, groups = PostForm.class)
    @Null(groups = UpdateForm.class)
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
