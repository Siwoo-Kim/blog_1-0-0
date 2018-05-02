package com.siwoo.blog.repository.support;

public class RepositorySupporter {

    public static String concatWildCard(String value,char wildCard) {
        return wildCard+value+wildCard;
    }
    public static String concatWildCard(String value,String wildCard) {
        return wildCard+value+wildCard;
    }
}
