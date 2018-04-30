package com.siwoo.blog.web;

import com.siwoo.blog.domain.GitHub;
import com.siwoo.blog.service.GitHubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.validation.DataBinder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/github")
public class GitHubController {

    @InitBinder
    private void initBinder(DataBinder dataBinder) {
        dataBinder.registerCustomEditor(String.class, new StringTrimmerEditor(true));
    }
    @Autowired
    GitHubService gitHubService;

    @GetMapping("/{userName}")
    GitHub byUserName(@PathVariable String userName) {
        return gitHubService.getRepos(userName);
    }

}
