package com.siwoo.blog.service;

import com.siwoo.blog.repository.CategoryRepository;
import com.siwoo.blog.repository.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImageResolverImpl implements ImageResolver {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    LanguageRepository languageRepository;

    @Override
    public List<String> allImageNames() {
        List<String> imageNames = new ArrayList<>();
        categoryRepository.findAllImgNames()
                .stream()
                .distinct()
                .forEach(names -> imageNames.add(names));
        languageRepository.findAllImgNames()
                .stream()
                .distinct()
                .forEach(names -> imageNames.add(names));
        return imageNames;
    }

}
