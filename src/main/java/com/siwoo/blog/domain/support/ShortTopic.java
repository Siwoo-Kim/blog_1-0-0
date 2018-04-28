package com.siwoo.blog.domain.support;

import lombok.Getter;
import lombok.ToString;

@Getter @ToString
public class ShortTopic {

    private Long id;
    private String name;

    public ShortTopic(Long id, String name) {
        this.id = id;
        this.name = name;
    }

}
