package com.siwoo.blog.web.tester;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/rest/tester/upload")
public class UserAvatarUploadController {

    @PostMapping("/profile")
    public void profileUpload(@RequestBody MultipartFile file) {
        System.out.println(file.getName());
        System.out.println(file.getOriginalFilename());
        System.out.println(file.getSize());
        System.out.println(file.getContentType());
    }

}
