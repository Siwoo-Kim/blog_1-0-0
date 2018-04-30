package com.siwoo.blog.resttemplate;

import com.siwoo.blog.service.GitHubService;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestOperations;


import java.net.URL;

import static org.junit.Assert.assertNotNull;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class TestRestTemplate {

    @Autowired
    RestOperations restOperations;

    private static final String gitUrl = "https://api.github.com/users/Siwoo-Kim";

    @Getter @Setter @ToString
    public static class GitHub {
        private String name;
        private String company;
        private String location;
        private URL url;
        private URL avatar_url;
        private String blog;
        private Integer public_repos;

        public Integer getRepoCount() {
            return public_repos;
        }
    }

    @Test
    public void getGitHub() {
        assertNotNull(restOperations);
        GitHub gitHub = restOperations.getForObject(gitUrl, GitHub.class);
        assertNotNull(gitHub);
        System.out.println(gitHub);
    }

    @Autowired
    GitHubService gitHubService;

    @Test
    public void getRepos() {
        assertNotNull(gitHubService.getRepos("Siwoo-Kim"));
        log.warn(gitHubService.getRepos("Siwoo-Kim") + "");
    }

}
