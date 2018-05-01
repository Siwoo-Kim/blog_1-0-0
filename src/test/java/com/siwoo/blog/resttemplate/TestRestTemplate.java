package com.siwoo.blog.resttemplate;

import com.siwoo.blog.service.GitHubService;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpRequest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.AsyncRestTemplate;
import org.springframework.web.client.RequestCallback;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;


import java.io.IOException;
import java.net.URI;
import java.net.URL;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.assertNotNull;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class TestRestTemplate {

    @Autowired
    RestOperations restOperations;
    @Autowired
    RestTemplate restTemplate;

    private static final String myGitUrl = "https://api.github.com/users/Siwoo-Kim";
    private static final String gitUrl = "https://api.github.com";

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

    @Data
    public static class Token {
        private String access_token;
        private String token_type;
        private int expires_in;
    }
    @Test
    public void getGitHub() {
     /*   assertNotNull(restOperations);
        GitHub gitHub = restOperations.getForObject(myGitUrl, GitHub.class);
        assertNotNull(gitHub);
        System.out.println(gitHub);

        URI resourceUri = UriComponentsBuilder
                .fromHttpUrl(gitUrl)
                .path("/users")
                .path("/{name}")
                .buildAndExpand("Siwoo-Kim")
                .toUri();

        ResponseEntity<GitHub> response = restTemplate.getForEntity(resourceUri, GitHub.class);
        System.out.println(response.getStatusCode());
        System.out.println(response.getStatusCodeValue());
        System.out.println(response.getBody());

        resourceUri = UriComponentsBuilder
                .fromHttpUrl("http://localhost:8080/rest/category/test")
                .build()
                .toUri();

        ResponseEntity entity = restTemplate.getForEntity(resourceUri, Object.class);


        RequestEntity requestEntity = RequestEntity
                .get(resourceUri)
                .accept()

                .header("Authorization","Barear mycustomtoken")
                .build();
        restTemplate.exchange(requestEntity,Void.class);
*/

        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
        map.add("grant_type", "client_credentials");

        RequestEntity<Object> request= RequestEntity
                .post(URI.create("https://accounts.spotify.com/api/token"))
                .header("Authorization", Base64.getEncoder().encodeToString("Basic d2d8ca0f05c841069e481cc763ab0d69=5cc0e20365a749bea8491b91fa59bbc3".getBytes()))
                .contentType(
                        MediaType.APPLICATION_FORM_URLENCODED)
                .body(map);

        ResponseEntity<Map> result = restTemplate.exchange(request, Map.class);
        System.out.println(result.getStatusCode());
        System.out.println(result.getHeaders());
        System.out.println(result.getBody());

    }



    @Autowired
    GitHubService gitHubService;

    @Test
    public void getRepos() {
        assertNotNull(gitHubService.getRepos("Siwoo-Kim"));
        log.warn(gitHubService.getRepos("Siwoo-Kim") + "");
    }

}
