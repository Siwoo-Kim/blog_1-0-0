package com.siwoo.blog.domain;

import org.springframework.lang.Nullable;
import org.springframework.util.StringUtils;

public enum LanguageType {
    OBJECT_ORIENTED, FUNCTIONAL;

    @Nullable
    public static LanguageType memberOf(String value) {
        if(!StringUtils.hasText(value)) {
            return null;
        }
        value = value.toUpperCase();
        switch (value) {
            case "OBJECT_ORIENTED": return OBJECT_ORIENTED;
            case "FUNCTIONAL": return FUNCTIONAL;
            default: return null;
        }
    }

    public static boolean isMember(String value) {
        return LanguageType.memberOf(value) != null;
    }
}
