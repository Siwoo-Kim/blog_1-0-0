package com.siwoo.blog.service;

import com.siwoo.blog.domain.GitHub;

public interface GitHubService {

    GitHub getRepos(String userName);

}
