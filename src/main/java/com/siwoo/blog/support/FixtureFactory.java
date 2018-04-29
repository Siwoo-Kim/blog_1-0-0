package com.siwoo.blog.support;

import com.siwoo.blog.domain.*;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.repository.LanguageRepository;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class FixtureFactory {

    public static List<Language> languages() {
        List languages = new ArrayList();
        Language java = new Language();
        java.setName("JAVA");
        java.setImgName("java-img");
        java.setDescription("Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers \"write once, run anywhere\" meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use, particularly for client-server web applications, with a reported 9 million developers.Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.");
        java.setType(LanguageType.OBJECT_ORIENTED);
        languages.add(java);

        Language typescript = new Language();
        typescript.setName("TYPESCRIPT");
        typescript.setImgName("ts-img");
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
        spring_boot.setDescription("The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform.");
        spring_boot.setLanguage(languageRepository.findByName("java"));
        spring_boot.setImgName("springboot-img");
        spring_boot.setType(CategoryType.BACKEND);
        categories.add(spring_boot);

        Category angular = new Category();
        angular.setName("Angular");
        angular.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,26,12,10,10),null));
        angular.setDescription("Angular (commonly referred to as \"Angular 5\" or \"Angular 2\") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.");
        angular.setLanguage(languageRepository.findByName("typescript"));
        angular.setImgName("angular-img");
        angular.setType(CategoryType.FRONTEND);
        categories.add(angular);

        Category hibernate = new Category();
        hibernate.setName("Hibernate");
        hibernate.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,27,10,32,25),null));
        hibernate.setDescription("Hibernate ORM (Hibernate in short) is an object-relational mapping tool for the Java programming language. ");
        hibernate.setLanguage(languageRepository.findByName("java"));
        hibernate.setImgName("hibernate-img");
        hibernate.setType(CategoryType.BACKEND);
        categories.add(hibernate);

        return categories;
    }

    public static List<Topic> springTopics(CategoryRepository categoryRepository) {
        List<Topic> topics = new ArrayList<>();
        Topic topic = new Topic();
        topic.setName("Spring MVC");
        topic.setDescription("The Spring Web model-view-controller (MVC) framework is designed around a DispatcherServlet that dispatches requests to handlers, with configurable handler mappings, view resolution, locale and theme resolution as well as support for uploading files. The default handler is based on the @Controller and @RequestMapping annotations, offering a wide range of flexible handling methods. With the introduction of Spring 3.0, the @Controller mechanism also allows you to create RESTful Web sites and applications, through the @PathVariable annotation and other features. ");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,27,4,30,22),null));
        topic.setDifficulty(3);
        topic.setShortDescription("Component decorator allows you to mark a class as an Angular component and provide additional metadata that determines how the component should be processed, instantiated and used at runtime.");
        topics.add(topic);

        topics.forEach(_topic ->  _topic.setCategory(categoryRepository.findByName("spring boot")));
        return topics;
    }

    public static List<Topic> angularTopics(CategoryRepository categoryRepository) {
        List<Topic> topics = new ArrayList<>();
        Topic topic = new Topic();
        topic.setName("Components");
        topic.setDescription("Introduction to components\n" + "\n" + "You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.\n" + "\n" + "For example, the HeroListComponent has a heroes property that returns an array of heroes that it acquires from a service. HeroListComponent also has a selectHero() method that sets a selectedHero property when the user clicks to choose a hero from that list." + "\n" + "The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata. In the example code below, you can see that HeroListComponent is just a class, with no special Angular notation or syntax at all. It's not a component until mark it as one with the @Component decorator.\n" + "\n" + "The metadata for a component tells Angular where to get the major building blocks it needs to create and present the component and its view. In particular, it associates a template with the component, either directly with inline code, or by reference. Together, the component and its template describe a view.\n" + "\n" + "In addition to containing or pointing to the template, the @Component metadata configures, for example, how the component can be referenced in HTML and what services it requires.");
        topic.setShortDescription("Component decorator allows you to mark a class as an Angular component and provide additional metadata that determines how the component should be processed, instantiated and used at runtime.");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,27,4,30,22),null));
        topic.setDifficulty(3);
        topic.setShortDescription("This part of the documentation covers support for Servlet stack, web applications built on the Servlet API and deployed to Servlet containers..");
        topics.add(topic);

        topic = new Topic();
        topic.setName("Module");
        topic.setDescription("Introduction to modules Module\n" + "Angular apps are modular and Angular has its own modularity system called NgModules. An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. It can contain components, service providers, and other code files whose scope is defined by the containing NgModule. It can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.\n" + "\n" + "Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your app by bootstrapping the root NgModule.\n" + "\n" + "While a small application might have only one NgModule, most apps have many more feature modules. The root NgModule for an app is so named because it can include child NgModules in a hierarchy of any depth.");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,27,4,30,22),null));
        topic.setShortDescription("An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime.");
        topic.setDifficulty(4);
        topics.add(topic);

        topic = new Topic();
        topic.setName("Routing");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,22,10,13,00), null));
        topic.setDescription("  <code>싱글 페이지 어플리케이션<em>(SPA)</em></code> 는 페이지 전체를 다시\n" + "    불러오지 않아도 페이지 내용 일부를 변경할 수 있으며 <code>라우터</code>를 사용해서\n" + "    이를 구현할 수 있다.<code>라우터</code>는 뷰 상태에 반응하는 객체이며 URL을 통하여 <em>딥 링킹</em>을 지원한다.\n" + "   <code>라우터</code>의 기능을 살펴보고 우리가 원하는 대로 URL에 따라 <code>라우터</code>를 설정하는 법을 알아보자.");
        topic.setDifficulty(4);
        topic.setShortDescription("Routing은 앵귤러의 URL을 통한 딥링킹을 지원한다.");
        topics.add(topic);

        topic = new Topic();
        topic.setName("Form");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,29,10,5,30), null));
        topic.setDescription("폼은 웹 어플리케이션에서 가장 중요하고 복잡한 요소이다. 폼은 복잡하기 그지없다. 서버의 데이터를 수정하거나 입력하며, 변경된 내용이 다른 곳에 반영되어야 하며, 입력 내용을 검증해야 되고, 오류를 분명하게 나타내야 하며, 종속된 필드가 있으면 로직이 복잡해진다. 이 복잡한 구조를 앵귤러를 통하여 어떻게 데이터를 어떻게 처리하는지 알아보자.\n" + "\n");
        topic.setDifficulty(4);
        topic.setShortDescription("Angular은 Form을 관리하는 FormControl, Validator, Observable을 지원한다.\n");
        topics.add(topic);
        topics.forEach(_topic ->  _topic.setCategory(categoryRepository.findByName("angular")));
        return topics;
    }
}























