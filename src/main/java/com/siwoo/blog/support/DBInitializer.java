package com.siwoo.blog.support;

import com.siwoo.blog.domain.User;
import com.siwoo.blog.repository.*;
import com.siwoo.blog.service.TopicService;
import com.siwoo.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;


@Component
public class DBInitializer implements CommandLineRunner {


    @Autowired
    LanguageRepository languageRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    TopicService topicService;
    @Autowired
    ParagraphRepository paragraphRepository;

    @Value("${admin.email}")
    String email;

    @Value("${admin.password}")
    String password;


    @Transactional
    @Override
    public void run(String... args) {
        languageRepository.saveAll(FixtureFactory.languages());
        categoryRepository.saveAll(FixtureFactory.categories(languageRepository));

        FixtureFactory
                .angularTopics(categoryRepository)
                .forEach(topic -> topicService.save(topic));
        FixtureFactory
                .springTopics(categoryRepository)
                .forEach(topic -> topicService.save(topic));

        paragraphRepository.saveAll(FixtureFactory.paragraphs(topicRepository));
    }

}
