package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Language;
import com.siwoo.blog.domain.support.LanguageSpecification;

import java.util.List;

public interface CustomLanguageRepository {

    List<Language> searchAny(LanguageSpecification specification);

}
