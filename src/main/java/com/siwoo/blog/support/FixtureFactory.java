package com.siwoo.blog.support;

import com.siwoo.blog.domain.*;
import com.siwoo.blog.repository.LanguageRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class FixtureFactory {

    public static List<Language> languages() {
        List languages = new ArrayList();
        Language java = new Language();
        java.setName("JAVA");
        java.setSvgName("java-svg");
        java.setDescription("Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers \"write once, run anywhere\" meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use, particularly for client-server web applications, with a reported 9 million developers.Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.");
        java.setType(LanguageType.OBJECT_ORIENTED);
        languages.add(java);

        Language typescript = new Language();
        typescript.setName("TYPESCRIPT");
        typescript.setSvgName("ts-svg");
        typescript.setDescription("TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.\n" + "\n" + "TypeScript is designed for development of large applications and transpile to JavaScript.  As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.");
        typescript.setType(LanguageType.FUNCTIONAL);
        languages.add(typescript);

        return languages;
    }

    public static List<Category> categories(LanguageRepository languageRepository) {
        List categories = new ArrayList();
        Category spring_boot = new Category();
        spring_boot.setName("Spring Boot");
        spring_boot.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,26,12,10,10),null));
        spring_boot.setDescription("The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform. Although the framework does not impose any specific programming model, it has become popular in the Java community as an addition to, or even replacement for the Enterprise JavaBeans (EJB) model. The Spring Framework is open source.");
        spring_boot.setLanguage(languageRepository.findByName("java"));
        spring_boot.setSvgName("springboot-svg");
        spring_boot.setType(CategoryType.BACKEND);
        categories.add(spring_boot);

        Category angular = new Category();
        angular.setName("Angular");
        angular.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,26,12,10,10),null));
        angular.setDescription("Angular (commonly referred to as \"Angular 5\" or \"Angular 2\") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.");
        angular.setLanguage(languageRepository.findByName("typescript"));
        angular.setSvgName("angular-svg");
        angular.setType(CategoryType.FRONTEND);
        categories.add(angular);

        return categories;
    }
}
