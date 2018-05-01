package com.siwoo.blog.web.support;


import lombok.*;

import java.net.URL;

@Data
public class ApiToken {
    private URL url;
    private String token;

    public ApiToken(URL url, String token) {
        this.url = url;
        this.token = token;
    }

}
