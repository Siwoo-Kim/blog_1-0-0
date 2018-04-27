package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Language;
import com.siwoo.blog.domain.LanguageType;
import com.siwoo.blog.domain.support.LanguageSpecification;
import com.siwoo.blog.repository.support.RepositorySupporter;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static com.siwoo.blog.domain.support.LanguageSpecification.Type;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestLanguageRepositoryImpl {

    @Autowired
    LanguageRepository languageRepository;

    @Test
    public void searchAny() {
        Language language = new Language();
        String targetName = "tester";
        String targetDescription = "this is just test";
        LanguageType targetType = LanguageType.FUNCTIONAL;
        language.setName(targetName);
        languageRepository.save(language);

        LanguageSpecification languageSpecfication = new LanguageSpecification(targetName,
                new HashSet<>(Arrays.asList(Type.NAME)));
        List<Language> languages = languageRepository.searchAny(languageSpecfication);
        assertTrue(!languages.isEmpty());
        assertTrue(languages.contains(language));

        language.setDescription(targetDescription);
        languageRepository.save(language);
        System.out.println(RepositorySupporter.concatWildCard("test",'%'));
        languageSpecfication = new LanguageSpecification(targetDescription,
                new HashSet<>(Arrays.asList(Type.DESCRIPTION)));
        languages = languageRepository.searchAny(languageSpecfication);
        assertTrue(!languages.isEmpty());
        assertTrue(languages.contains(language));

        language.setType(targetType);
        languageRepository.save(language);
        languageSpecfication = new LanguageSpecification(targetType.toString(),
                new HashSet<>(Arrays.asList(Type.LANGUAGE_TYPE)));
        languages = languageRepository.searchAny(languageSpecfication);
        assertTrue(!languages.isEmpty());
        assertTrue(languages.contains(language));

        language.setName("Should not have");
        languageRepository.save(language);
        languageSpecfication = new LanguageSpecification(targetName,
                new HashSet<>(Arrays.asList(Type.NAME)));
        languages = languageRepository.searchAny(languageSpecfication);
        assertTrue(!languages.contains(language));

        language.setName(null);
        language.setDescription(null);
        language.setType(LanguageType.OBJECT_ORIENTED);
        languageRepository.save(language);
        languageSpecfication = new LanguageSpecification(LanguageType.OBJECT_ORIENTED.toString(),
                new HashSet<>(Arrays.asList(Type.ALL)));
        languages = languageRepository.searchAny(languageSpecfication);
        assertTrue(languages.contains(language));


    }
}
