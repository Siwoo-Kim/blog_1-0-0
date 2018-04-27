package com.siwoo.blog.domain.support;

import lombok.Getter;
import lombok.ToString;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Getter @ToString
public class LanguageSpecification {

    public enum Type {
        NAME, DESCRIPTION, LANGUAGE_TYPE, ALL;
    }

    public String value;
    public Set<Type> types;
    public boolean empty;

    public LanguageSpecification(String value, Set<Type> types) {
        if(ObjectUtils.isEmpty(types) || !StringUtils.hasText(value)) {
            empty = true;
            return;
        }
        if(types.contains(Type.ALL)) {
            this.types = new HashSet(Arrays.asList(Type.values()));
        } else {
            this.types = new HashSet<>(types);
        }
        this.value = value;
    }


}
