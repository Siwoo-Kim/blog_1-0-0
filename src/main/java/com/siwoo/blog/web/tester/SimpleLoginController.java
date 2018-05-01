package com.siwoo.blog.web.tester;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/rest/simple")
public class SimpleLoginController {

    private static Map<String,User> localStorage = new ConcurrentHashMap<>();

    @Data @AllArgsConstructor
    public static class User {
        private String id;
        private String password;

        public User() {}

        public boolean matchPassword(String trialPassword) {
            return trialPassword != null && password.equals(trialPassword);
        }
    }

    static  {
        User user = new User("user1","1234");
        localStorage.put(user.getId(), user);
        user = new User("user2","4321");
        localStorage.put(user.getId(), user);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User user) {
        User found = localStorage.get(user.getId());
        if(found == null) {
            return new ResponseEntity(user, HttpStatus.UNAUTHORIZED);
        }
        if(found.matchPassword(user.getPassword())) {
            user = found;
            return new ResponseEntity(user, HttpStatus.OK);
        }
        return new ResponseEntity(user, HttpStatus.UNAUTHORIZED);
    }

}
