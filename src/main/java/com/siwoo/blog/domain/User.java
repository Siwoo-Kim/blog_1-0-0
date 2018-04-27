package com.siwoo.blog.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Optional;

@Getter @Setter @ToString
@Entity @Table(name = "tbl_user")
@EqualsAndHashCode(of = {"","email"})
public class User {

    @Id @GeneratedValue
    private Long id;

    private String email;

    private String password;

    public void encodePassword(PasswordEncoder passwordEncoder) {
        password =  passwordEncoder.encode(password);
    }

    public boolean verifyPassword(String rawPassword, PasswordEncoder passwordEncoder) {
        return  passwordEncoder.matches(rawPassword,password);
    }
}
