package com.siwoo.blog.web;

import com.siwoo.blog.domain.Language;
import com.siwoo.blog.domain.support.LanguageSpecification;
import com.siwoo.blog.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static com.siwoo.blog.domain.support.LanguageSpecification.Type.ALL;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RestController
@RequestMapping("/rest/language")
public class LanguageController {

    @Autowired
    LanguageRepository languageRepository;

    @GetMapping(params = {"by=specification","request=all_any"})
    public List<Language> searchAny(@RequestParam String value) {
        return languageRepository
                .searchAny(new LanguageSpecification(value,new HashSet<>(Arrays.asList(ALL))));
    }
}
