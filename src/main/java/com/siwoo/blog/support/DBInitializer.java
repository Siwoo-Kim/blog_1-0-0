package com.siwoo.blog.support;

import com.siwoo.blog.domain.User;
import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.repository.LanguageRepository;
import com.siwoo.blog.repository.UserRepository;
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
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Value("${admin.email}")
    String email;

    @Value("${admin.password}")
    String password;


    @Transactional
    @Override
    public void run(String... args) throws Exception {
        languageRepository.saveAll(FixtureFactory.languages());
        categoryRepository.saveAll(FixtureFactory.categories(languageRepository));

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        userService.register(user);

    }

}
