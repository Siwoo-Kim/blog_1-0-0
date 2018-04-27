package com.siwoo.blog.service;

import com.siwoo.blog.domain.User;
import com.siwoo.blog.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Optional;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public User register(User user) {
        Assert.notNull(user,"User must not null");
        user.encodePassword(passwordEncoder);
        userRepository.save(user);
        return user;
    }

    @Override
    public boolean login(User user) {
        Assert.notNull(user);
        User found = userRepository.findByEmail(user.getEmail());
        if(found.verifyPassword(user.getPassword(), passwordEncoder)) {
            user.setPassword(found.getPassword());
            return true;
        };
        return false;
    }
}
