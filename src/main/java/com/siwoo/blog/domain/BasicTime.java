package com.siwoo.blog.domain;

import lombok.*;
import javax.persistence.Embeddable;
import java.time.LocalDateTime;

@Embeddable
@Getter @ToString
@EqualsAndHashCode(of = {"created","updated"})
public class BasicTime {

    private LocalDateTime created;
    private LocalDateTime updated;

    protected BasicTime(){}

    public BasicTime(LocalDateTime created, LocalDateTime updated) {
        this.created = created;
        this.updated = updated;
    }

}
