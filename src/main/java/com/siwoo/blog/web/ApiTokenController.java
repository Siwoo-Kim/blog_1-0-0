package com.siwoo.blog.web;

import com.siwoo.blog.web.support.ApiToken;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.net.URL;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/rest/private/token")
public class ApiTokenController {

    @Value("${youtube.api.url}")
    private URL youtubeUrl;

    @Value("${youtube.api.token}")
    private String youtubeToken;

    private static Map<String,ApiToken> tokens = new ConcurrentHashMap();

    @PostConstruct
    public void setup() {
        tokens.put("youtube", new ApiToken(youtubeUrl, youtubeToken));
    }

    @GetMapping("/{apiName}")
    public ApiToken youtubeToken(@PathVariable String apiName) {
        return tokens.get(apiName);
    }

}
