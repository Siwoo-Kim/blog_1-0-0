package com.siwoo.blog.service;

import com.siwoo.blog.domain.User;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface UserService {

    @Transactional(readOnly = false)
    User register(User user);

    @Transactional(readOnly = true)
    boolean login(User user);
}
