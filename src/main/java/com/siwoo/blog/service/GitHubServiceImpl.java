package com.siwoo.blog.service;

import com.siwoo.blog.domain.GitHub;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestOperations;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
public class GitHubServiceImpl implements GitHubService {

    @Autowired
    private RestOperations restOperations;

    private Map<String,GitHub> cache = new ConcurrentHashMap<>();

    @Value("${github.api.url}")
    private URL githubUrl;

    @Override
    public GitHub getRepos(String userName) {
        if( !cached(userName) ) {
            GitHub gitHub = restOperations.getForObject(createUserUri(userName), GitHub.class);
            cache.put(userName, gitHub);
            return gitHub;
        } else {
            return cache.get(userName);
        }
    }

    private boolean cached(String userName) {
        return cache.containsKey(userName);
    }

    private URI createUserUri(String userName) {
        try {
            return UriComponentsBuilder
                    .fromUri(githubUrl.toURI())
                    .path(userName)
                    .build()
                    .toUri();
        } catch (URISyntaxException e) {
            throw new IllegalArgumentException("Malformed for userName : " + userName);
        }
    }
}
