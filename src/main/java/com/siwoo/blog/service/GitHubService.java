package com.siwoo.blog.service;

import com.siwoo.blog.domain.GitHub;
import org.springframework.validation.annotation.Validated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Validated
public interface GitHubService {

    GitHub getRepos(@NotBlank @NotNull String userName);

}
