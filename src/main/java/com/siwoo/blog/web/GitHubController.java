package com.siwoo.blog.web;

import com.siwoo.blog.domain.GitHub;
import com.siwoo.blog.service.GitHubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/github")
public class GitHubController {

    @Autowired
    GitHubService gitHubService;

    @GetMapping("/{userName}")
    GitHub byUserName(@PathVariable String userName) {
        return gitHubService.getRepos(userName);
    }

}
