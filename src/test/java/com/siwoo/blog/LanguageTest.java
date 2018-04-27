package com.siwoo.blog;

import com.siwoo.blog.domain.Language;
import com.siwoo.blog.domain.LanguageType;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class LanguageTest {

    @Test
    public void languageType() {
        LanguageType languageType = LanguageType.memberOf("object_oriented");
        assertNotNull(languageType);
        assertEquals(languageType,LanguageType.OBJECT_ORIENTED);

        languageType = LanguageType.memberOf("functional");
        assertNotNull(languageType);
        assertEquals(languageType,LanguageType.FUNCTIONAL);

        languageType = LanguageType.memberOf("OBJECT_ORIENTED");
        assertNotNull(languageType);
        assertEquals(languageType,LanguageType.OBJECT_ORIENTED);

        languageType = LanguageType.memberOf("FUNCTIONAL");
        assertNotNull(languageType);
        assertEquals(languageType,LanguageType.FUNCTIONAL);
    }

}
