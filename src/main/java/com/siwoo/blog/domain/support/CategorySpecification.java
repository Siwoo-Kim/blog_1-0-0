package com.siwoo.blog.domain.support;

import lombok.Getter;
import lombok.ToString;
import org.springframework.util.StringUtils;

import java.util.*;

@Getter @ToString
public class CategorySpecification {

    public enum Type {
        LANGUAGE, CATEGORY_TYPE, DESCRIPTION, NAME, ALL
    }

    private String value;
    public Set<Type> types = new HashSet<>();
    private boolean empty;

    public CategorySpecification(String value, Type... types) {
        Collection collection = Collections.unmodifiableCollection(Arrays.asList(types));
        if(!collection.isEmpty() && StringUtils.hasText(value)) {
            setTypes(Arrays.asList(types));
            this.empty = false;
            this.value = value;
        }else {
            this.empty = true;
        }
    }

    public void setTypes(Collection<Type> types) {
        if(types.contains(Type.ALL)) {
            this.types = new HashSet<>(Arrays.asList(Type.values()));
        } else {
            this.types = new HashSet<>(types);
        }
    }
}
