package com.siwoo.blog.service;

import com.siwoo.blog.domain.User;
import com.siwoo.blog.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

@Slf4j
@Transactional
@RunWith(SpringRunner.class)
@SpringBootTest
public class TestUserService {

    @Autowired UserService userService;
    @Autowired PasswordEncoder passwordEncoder;
    @Autowired
    UserRepository userRepository;
    User fixture1;
    
    @Before
    public void setup() {
        fixture1 = new User();
        fixture1.setEmail("test@email.com");
        fixture1.setPassword("1234");
    }
    @Test
    public void register() {
        fixture1.setEmail("test@email.com");
        String prevPassword = fixture1.getPassword();
        fixture1 = userService.register(fixture1);
        assertTrue(passwordEncoder.matches(prevPassword, fixture1.getPassword()));
        assertFalse(passwordEncoder.matches("4321", fixture1.getPassword()));
    }
    
    @Test
    public void login() {
        User user = new User();
        user.setEmail(fixture1.getEmail());
        user.setPassword(fixture1.getPassword());
        userService.register(fixture1);
        assertTrue(userService.login(user));
        user.setPassword("4321");
        assertFalse(userService.login(user));
    }
}
