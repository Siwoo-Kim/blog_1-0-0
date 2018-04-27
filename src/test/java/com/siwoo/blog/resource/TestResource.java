package com.siwoo.blog.resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.UrlResource;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.*;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestResource {

    @Autowired
    ResourceLoader resourceLoader;
    @Value("https://api.github.com/users/Siwoo-Kim/repos")
    String resourceLocation;

    @Test
    public void accessUrlResource() throws Exception {
        Resource resource = resourceLoader.getResource(resourceLocation);
        try(BufferedReader reader = new BufferedReader(new InputStreamReader(resource.getInputStream(),"utf-8"))) {
            String input = "";

            while ((input = reader.readLine()) != null) {
                BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("src/main/resources/META-INF/github.json"));
                bufferedWriter.write(input);
            }
        }
    }
}
