package com.siwoo.blog.domain;

import lombok.*;
import javax.persistence.Embeddable;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Embeddable
@Getter @ToString
@EqualsAndHashCode(of = {"created","updated"})
public class BasicTime {

    @NotNull
    private LocalDateTime created;

    private LocalDateTime updated;

    protected BasicTime(){}

    public BasicTime(LocalDateTime created, LocalDateTime updated) {
        this.created = created;
        this.updated = updated;
    }

}
