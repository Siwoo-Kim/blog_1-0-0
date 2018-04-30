package com.siwoo.blog.web;

import com.siwoo.blog.service.ImageResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/img")
public class ImageController {

    @Autowired
    ImageResolver imageResolver;

    @GetMapping
    public List<String> names() {
        return imageResolver.allImageNames();
    }

    @GetMapping("/{num}")
    public void ok(@PathVariable("num") Integer num) {

    }
}
