package com.siwoo.blog.domain;

import org.springframework.lang.Nullable;
import org.springframework.util.StringUtils;

public enum  CategoryType {
    FRONTEND, BACKEND;

    @Nullable
    public static CategoryType memberOf(String value) {
        if(!StringUtils.hasText(value)) {
            return null;
        }
        value = value.toUpperCase();
        switch (value) {
            case "FRONTEND": return FRONTEND;
            case "BACKEND": return BACKEND;
            default: return null;
        }
    }

    public static boolean isMember(String value) {
        return CategoryType.memberOf(value) != null;
    }
}
