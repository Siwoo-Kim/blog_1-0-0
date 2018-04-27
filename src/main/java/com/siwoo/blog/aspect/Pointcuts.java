package com.siwoo.blog.aspect;

import org.aspectj.lang.annotation.Pointcut;

public class Pointcuts {

    public static final String REPOSITORY_POINTCUT = "com.siwoo.blog.aspect.Pointcuts.repositoryPointcut()";
    @Pointcut("execution(* com.siwoo.blog.repository.*Repository.*(..))")
    public void repositoryPointcut(){}
}
