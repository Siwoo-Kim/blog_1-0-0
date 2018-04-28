package com.siwoo.blog.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class Profiler {

    @Around(Pointcuts.REPOSITORY_POINTCUT)
    public Object start(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = null;
        try {
            result = joinPoint.proceed();
        }finally {
            long end = System.currentTimeMillis();
//            log.warn("Profiling - {}, \nTime to execute : {}",joinPoint.getSignature(), (end - start));
            return result;
        }
    }

}
