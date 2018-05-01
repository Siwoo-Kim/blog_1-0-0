package com.siwoo.blog.learning;

import com.siwoo.blog.domain.Category;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriBuilderFactory;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.InetAddress;
import java.net.URI;
import java.net.UnknownHostException;
import java.util.List;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LeaningUriComponentsBuilder {

    private static String LOCAL_HOST = "http://localhost:8080/";
    @Autowired RestTemplate restTemplate;

    @Test
    public void build() throws UnknownHostException {
        URI resourceUri = UriComponentsBuilder
                .fromHttpUrl(LOCAL_HOST)
                .path("books")
                .path("/{id}")
                .buildAndExpand("1")
                .toUri();
        System.out.println(resourceUri);

        String byId = "id";
        resourceUri = UriComponentsBuilder
                .fromHttpUrl(LOCAL_HOST)
                .path("books")
                .queryParam("by",byId)
                .build()
                .toUri();
        System.out.println(resourceUri);
        System.out.println(ResponseEntity.ok(resourceUri));

        resourceUri = UriComponentsBuilder
                .fromHttpUrl(LOCAL_HOST)
                .path("/rest")
                .path("/category")
                .build()
                .toUri();

        List categories = restTemplate
                .getForObject(resourceUri, List.class);
        assertNotNull(categories);
        categories.stream().forEach(System.out::println);
    }

}
