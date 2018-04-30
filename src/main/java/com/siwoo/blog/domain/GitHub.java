package com.siwoo.blog.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.net.URL;

@Data
public class GitHub {

    private String name;
    private String company;
    private String location;
    private URL url;
    private URL html_url;
    private URL avatar_url;
    private String blog;
    private Integer public_repos;

    @JsonProperty("repoCounts")
    public Integer getRepoCounts() {
        return public_repos;
    }

    @JsonProperty("avatarUrl")
    public URL getAvatarUrl() {
        return avatar_url;
    }

    @JsonProperty("htmlUrl")
    public URL getHtmlUrl() {
        return html_url;
    }
}
