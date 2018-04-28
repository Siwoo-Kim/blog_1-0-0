package com.siwoo.blog.domain.support;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter @ToString
public class ShortCategory {

    private Long id;
    private String name;
    private List<ShortTopic> topics;

    public ShortCategory(Long id, String name) {
        this.id = id;
        this.name = name;
    }


}
