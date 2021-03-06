package com.siwoo.blog.support;

import com.siwoo.blog.domain.*;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.repository.LanguageRepository;
import com.siwoo.blog.repository.TopicRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class FixtureFactory {
    private static final String CATEGORY_ANGULAR = "Angular";
    private static final String CATEGORY_SPRINGBOOT = "Spring Boot";
    private static final String CATEGORY_HIBERNATE = "Hibernate";

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
        spring_boot.setName(CATEGORY_SPRINGBOOT);
        spring_boot.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,26,12,10,10),null));
        spring_boot.setDescription("The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform.");
        spring_boot.setLanguage(languageRepository.findByName("java"));
        spring_boot.setImgName("springboot-img");
        spring_boot.setType(CategoryType.BACKEND);
        categories.add(spring_boot);

        Category angular = new Category();
        angular.setName(CATEGORY_ANGULAR);
        angular.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,26,12,10,10),null));
        angular.setDescription("Angular (commonly referred to as \"Angular 5\" or \"Angular 2\") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.");
        angular.setLanguage(languageRepository.findByName("typescript"));
        angular.setImgName("angular-img");
        angular.setType(CategoryType.FRONTEND);
        categories.add(angular);

        Category hibernate = new Category();
        hibernate.setName(CATEGORY_HIBERNATE);
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

        topic = new Topic();
        topic.setName("Validation");
        topic.setDescription("There are pros and cons for considering validation as business logic, and Spring offers a design for validation (and data binding) that does not exclude either one of them. Specifically validation should not be tied to the web tier, should be easy to localize and it should be possible to plug in any validator available. Considering the above, Spring has come up with a Validator interface that is both basic ands eminently usable in every layer of an application.\n" + "\n" + "Data binding is useful for allowing user input to be dynamically bound to the domain model of an application (or whatever objects you use to process user input). Spring provides the so-called DataBinder to do exactly that. The Validator and the DataBinder make up the validation package, which is primarily used in but not limited to the MVC framework.");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,4,30,9,30,22),null));
        topic.setDifficulty(3);
        topic.setShortDescription("JSR349 와 Hibernate Validation을 지원하는 스프링 검증 메커니즘을 이용하여 어떻게 모델의 유효성을 확인하는지 알아보자.");
        topics.add(topic);

        topics.forEach(_topic ->  _topic.setCategory(categoryRepository.findByName(CATEGORY_SPRINGBOOT)));
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
        topics.forEach(_topic ->  _topic.setCategory(categoryRepository.findByName(CATEGORY_ANGULAR)));
        return topics;
    }

    public static List<Paragraph> paragraphs(TopicRepository topicRepository) {
        List<Paragraph> paragraphs = new ArrayList<>();
        Topic components = topicRepository.findByNameAndCategoryName("components",CATEGORY_ANGULAR);
        combineParagrpahs(paragraphs,angularComponentsParagraphs(components));
        Topic routing = topicRepository.findByNameAndCategoryName("routing",CATEGORY_ANGULAR);
        combineParagrpahs(paragraphs,angularRoutingParagraphs(routing));

        Topic validation = topicRepository.findByNameAndCategoryName("validation",CATEGORY_SPRINGBOOT);
        combineParagrpahs(paragraphs,springValidationParagraphs(validation));
        return paragraphs;
    }



    private static void combineParagrpahs(List<Paragraph> context, List<Paragraph> addition) {
        addition.stream().forEach(paragraph -> context.add(paragraph));
    }

    public static List<Paragraph> springValidationParagraphs(Topic topic) {
        List<Paragraph> paragraphs = new ArrayList<>();

        Paragraph parent = new Paragraph();
        parent.setTitle("Validation");
        parent.setDescription("스프링은 폼 클래스에 대한 입력값 검사를 기본적으로 하지 않는다\n" + "\t@Validated 혹은 @Valid를 지정해야 검증을 실행한다\n");
        parent.setCode("@PostMapping\n" + "Category save(@Validated @RequestBody Category category, BindingResult result) {\n" + "   result.getFieldErrors().stream().map(FieldError::getField).forEach(log::warn);\n" + "   return category;\n" + "}\n");
        parent.setTopic(topic);
        paragraphs.add(parent);

        parent = new Paragraph();
        parent.setTitle("BindingResult");
        parent.setDescription("BindingResult은 폼 클래스(@ModelAttribute, @RequestBody)등의 검증 결과를 가지고 있고 아래의 인터페이스를 지원한다." +
                "\thasErrors()  - 모든 필드의 에러 여부\n" + "\thasGlobalErrors() - 글러벌 필드의 에러 여부\n" + "\thasFieldErrors() - 필드 레벨의 에러 여부\n" + "\thasFieldError(String fieldName) - 해당 필드의 에러 여부\n");
        parent.setCode("\t@PostMapping\n" + "HttpEntity<?> save(@Validated @RequestBody Category category, BindingResult result) {\n" + "   if(result.hasErrors()) {\n" + "       System.out.println(result.getFieldError().getField());\n" + "       throw new WebPostDataException(\"error.category.\"+result.getFieldError().getField());\n" + "   }\n" + "   return new HttpEntity<>(category);\n" + "}\n" + "\n" + "@ExceptionHandler(WebPostDataException.class)\n" + "public String handleException(WebApplicationException e) {\n" + "   return e.getCode();\n" + "}\n");
        parent.setTopic(topic);
        paragraphs.add(parent);

        parent = new Paragraph();
        parent.setTitle("Bean Validation(JSR-349 & Hibernate Validation)");
        parent.setDescription("Bean Validation은 JAVA EE의 표준 검증 API며 어노테이션을 자바빈 프러퍼티에 적용하면 자동으로 검증을 수행해준다. Hibernate의 의존성을 추가하면 추가적인 편리한 기능도 적용할 수 있다." + "\n\n" +"@NotNull null이 아닐것\\n\" + \"\\t@NotBlank* - 문자열이 null이 아니고 trim한 길이가 0보다 크다는 것을 체크\\n\" + \"\\t@NotEmpty - 문자열, 컬렉션, 맵, 배열의 크기가 0 이상인지 확인\\n\" + \"\\t@Length -  문자열 길이를 검사\\n\" + \"\\t@Pattern -  문자 유형을 검사\\n\" + \"@Range -  숫자 범위를 검사한다.\\n\" + \"@Digits - 정수부와 소수부 자리수를 검사한다. (integer - 정수부, fraction - 소수부)\\n\" + \"@Past, @Future - 날짜의 과거, 미래인지를 검사한다\\n\" + \"@AssertTrue - 불린값을 검사한다.\\n");
        parent.setTopic(topic);
        paragraphs.add(parent);

        Paragraph child = new Paragraph();
        child.setTitle("제약 어노테이션의 속성");
        child.setDescription("messages - 제약 위반을 표시되는 오류 메시지를 지정\n" +
                "\tgroups - 유효성 그룹을 지정한다. 기본값은 Default이다\n groups 속성값을 이용하면 입력값 검사 규칙을 교체할 수 있다.");
        child.setCode("\n" + "interface PostForm extends Default {}  \n" + "//Default를 상속하면 그룹을 지정하지 않은 검사 규측을 검사 대상에 포함한다.\n" + "interface UpdateForm extends Default {}\n" + "\n" + "\n" + "@NotNull(messages = ERROR_NOTNULL, groups = PostForm.class)\n" + "@Null(groups = UpdateForm.class)\n" + "@Enumerated(EnumType.STRING)\n" + "private CategoryType type;\n" + "\n" + "@PostMapping\n" + "HttpEntity<?> save(@Validated(UpdateForm.class) @RequestBody Category category, BindingResult result) {\n" + "   log.error(result.hasErrors() + \"\");\n" + "   result.getFieldErrors().stream().map(FieldError::getField).forEach(log::warn);\n" + "   System.out.println(category);\n" + "\n" + "   return new HttpEntity<>(category);\n" + "}\n");
        child.setTopic(topic);
        parent.addChild(child);

        parent = new Paragraph();
        parent.setTitle("StringTrimmerEditor");
        parent.setDescription("StringTrimmerEditor은 스프링이 지원하는 PropertyEditor이며 DataBinder에 등록하면, 파라미터가 공백 문자일 경우 자동으로 null로 변환해준다.");
        parent.setCode("@InitBinder\n" + "public void initBinder(WebDataBinder binder) {\n" + "   binder.registerCustomEditor(String.class, new StringTrimmerEditor(true));\n" + "}\n" + "\n");
        parent.setTopic(topic);
        paragraphs.add(parent);

        parent = new Paragraph();
        parent.setTitle("에러 메시지 재정의");
        parent.setDescription("바인딩 오류에서 표시되는 오류 메시지는 서드 파티에서 제공하는 메세지다.\n" + "\t국제화를 지원하려면 이 메시지를 재정의해야 된다.\n" + "\t아래와 같은 방법으로 재정의 할 수 있다.\n" + "\t1.MessageSource에서 메시지 재정의\n" + "\t2.Bean Validation에서 메시지 재정의\n" + "\t3.제약 어노테이션에서 메시지 속성으로 재정의\n");
        parent.setCode("RootConfig\n" + "@Autowired\n" + "MessageSource messageSource;\n" + "\n" + "@Bean\n" + "LocalValidatorFactoryBean localeValidatorFactoryBean() { //Root에서 하이버네이트 validator 생성\n" + "   LocalValidatorFactoryBean validatorFactoryBean = new LocalValidatorFactoryBean();\n" + "   validatorFactoryBean.setValidationMessageSource(messageSource);\n" + "   return  validatorFactoryBean;\n" + "}\n" + "\n" + "@Bean\n" + "MethodValidationPostProcessor methodValidationPostProcessor() {\n" + "   MethodValidationPostProcessor processor = new MethodValidationPostProcessor();\n" + "   processor.setValidator(localeValidatorFactoryBean());\n" + "   return processor;\n" + "}\n" + "\n" + "  2. WebConfig\n" + "@Autowired\n" + "LocalValidatorFactoryBean localValidatorFactoryBean;\n" + "\n" + "@Bean\n" + "@Override\n" + "public Validator getValidator() {\t\t//WebMvc에서 생성한 hibernatevalidator를 사용하도록 설정\n" + "   return localValidatorFactoryBean;\n" + "}\n" + "\n");
        parent.setTopic(topic);
        paragraphs.add(parent);

        return paragraphs;
    }

    public static List<Paragraph> angularRoutingParagraphs(Topic topic) {
        List<Paragraph> paragraphs = new ArrayList<>();

        Paragraph parent = new Paragraph();
        parent.setTitle("라우팅");
        parent.setDescription("\n" + "    <strong>SPA</strong>의 각 페이지는 특정 뷰가 표시되고 있는 상태를 모아둔 것이라고 볼 수 있는데,\n" + "    한 페이지에 머물고 있으면서 각각의 상태에 맞는 뷰를 표시하는 방식이다.\n" + "    보통 한 페이지는 <em>네비게이션 영역</em>, <em>Footer</em>가 있는데 이러한 영역은 SPA 상태에\n" + "    상관없이 언제나 표시된다.\n" + "    이 부분을 제외한 영역은 동적으로 변하는 부분이며, 사용자의 행동에 따라 컨테츠가 바뀌는 영역이다.\n" + "    이렇게 <strong>동적으로 변하는 영역</strong>을 지정하려면 <code>router-outlet</code> 라는 tag로 지정해야 하고\n" + "    특정한 URL에 다른 뷰를 매칭하도록 라우터를 설정해야 한다. 즉 라우터 영역에는 각 뷰마다 화면에 표시할 컴포넌트를 하나씩 지정해야 한다.\n" + "    <br>\n" + "    SPA가 아닌 <em>고전 웹 사이트</em>는 주소가 바뀔 때마다 새로운 페이지 요청을 서버로 보내고, 요청의 결과로\n" + "    HTML을 받으면 전체 페이지를 다시 렌더링하는 방식이다. 하지만 <code>라우터</code>를 이용하면 필요한 부분만 갱신(MODEL)하면 되므로\n" + "    더욱 효율적이다.\n" + "    그러면 <em>필요한 부분(model)</em>은 어떻게 요청할 수 있을까? 앞으로 배울 <code>HttpClient Module</code>을 이용하여\n" + "    필요한 정보를 비동기적으로 서버에서 가져올 수 있다.\n");
        parent.setTopic(topic);
        paragraphs.add(parent);
        Paragraph child = new Paragraph();
        child.setTitle("라우터 구성 요소");
        child.setDescription(" <strong>라우터는</strong> 다음과 같은 요소로 구성된다. <br>\n" + "    <ol>\n" + "      <li>\n" + "        <code>Router</code>: 라우터를 구현하는 객체다. <strong>navigate</strong> <strong>navigateByUrl</strong> 함수를 사용하거나,\n" + "        path 프러퍼티 값을 변경하면 된다.\n" + "      </li>\n" + "      <li>\n" + "        <code>RouterOutlet</code>: 라우터가 컴포넌트를 렌더링하는 영역을 구현하는 <strong>디렉티브</strong>다.\n" + "      </li>\n" + "      <li>\n" + "        <code>Routes</code>: 특정 URL에 <strong>연결</strong>되는 컴포넌트를 지정하는 배열이다.\n" + "      </li>\n" + "      <li>\n" + "        <code>RouterLink</code>: 앵커 태그의 디렉티브로 이것을 사용하여 라우터에게 렌더링할 컴포넌트를 알려준다. 또한 <code>queryParams</code> 바인딩을\n" + "        이용하여 쿼리스트링을 전달할 수 있다.\n" + "      </li>\n" + "      <li>\n" + "        <code>ActivateRoute</code>: 현재 동작하는 route 인스턴스를 가라키는 객체다.\n" + "      </li>");
        child.setTopic(topic);
        parent.addChild(child);

        return paragraphs;
    }
    public static List<Paragraph> angularComponentsParagraphs(Topic topic) {
        List paragraphs = new ArrayList();
        Paragraph parent = new Paragraph();
        parent.setTitle("Displaying Data");
        parent.setDescription("You can display data by binding controls in an HTML template to properties of an Angular component.\n" + "\n" + "In this page, you'll create a component with a list of heroes. You'll display the list of hero names and conditionally show a messages below the list.\n" + "\n" + "The final UI looks like this");
        parent.setCode("import { Component } from '@angular/core';\n" + "\n" + "@Component({\n" + "  selector: 'app-root',\n" + "  template: `\n" + "    <h1>{{title}}</h1>\n" + "    <h2>My favorite hero is: {{myHero}}</h2>\n" + "    `\n" + "})\n" + "export class AppComponent {\n" + "  title = 'Tour of Heroes';\n" + "  myHero = 'Windstorm';\n" + "}");
        parent.setTopic(topic);
        paragraphs.add(parent);

        Paragraph child = new Paragraph();
        child.setTopic(topic);
        child.setTitle("Showing component properties with interpolation");
        child.setDescription("The easiest way to display a component property is to bind the property name through interpolation. With interpolation, you put the property name in the view template, enclosed in double curly braces: {{myHero}}.\n" + "\n" + "Follow the quickstart instructions for creating a new project named displaying-data.\n" + "\n" + "Delete the app.component.html file. It is not needed for this example.\n" + "\n" + "Then modify the app.component.ts file by changing the template and the body of the component.\n" + "\n" + "When you're done, it should look like this:");
        child.setCode("template: `\n" + "  <h1>{{title}}</h1>\n" + "  <h2>My favorite hero is: {{myHero}}</h2>\n" + "  `");
        parent.addChild(child);

        parent = new Paragraph();
        parent.setTopic(topic);
        parent.setTitle("Template inline or template file?");
        parent.setDescription("You can store your component's template in one of two places. You can define it inline using the template property, or you can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator's templateUrl property.\n" + "\n" + "The choice between inline and separate HTML is a matter of taste, circumstances, and organization policy. Here the app uses inline HTML because the template is small and the demo is simpler without the additional HTML file.\n" + "\n" + "In either style, the template data bindings have the same access to the component's properties.");
        parent.setCode("template: `\n" + "  <h1>{{title}}</h1>\n" + "  <h2>My favorite hero is: {{myHero}}</h2>\n" + "  <p>Heroes:</p>\n" + "  <ul>\n" + "    <li *ngFor=\"let hero of heroes\">\n" + "      {{ hero }}\n" + "    </li>\n" + "  </ul>");

        child = new Paragraph();
        child.setTopic(topic);
        child.setTitle("Showing an array property with *ngFor");
        child.setDescription("To display a list of heroes, begin by adding an array of hero names to the component and redefine myHero to be the first name in the array.");
        child.setCode("template: `\n" + "  <h1>{{title}}</h1>\n" + "  <h2>My favorite hero is: {{myHero}}</h2>\n" + "  <p>Heroes:</p>\n" + "  <ul>\n" + "    <li *ngFor=\"let hero of heroes\">\n" + "      {{ hero }}\n" + "    </li>\n" + "  </ul>\n" + "`");
        parent.addChild(child);
        paragraphs.add(parent);

        return paragraphs;
    }
}























