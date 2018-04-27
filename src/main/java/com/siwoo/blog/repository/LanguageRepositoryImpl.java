package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Language;
import com.siwoo.blog.domain.LanguageType;
import com.siwoo.blog.domain.support.LanguageSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import static com.siwoo.blog.repository.support.RepositorySupporter.*;
import static com.siwoo.blog.domain.support.LanguageSpecification.Type;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;


@Repository
public class LanguageRepositoryImpl implements CustomLanguageRepository {

    @Autowired
    EntityManager entityManager;
    private static final String COLUMN_NAME = "name";
    private static final String COLUMN_DESCRIPTION = "description";
    private static final String COLUMN_TYPE = "type";

    @Override
    public List<Language> searchAny(LanguageSpecification specification) {
        if(specification.isEmpty()) return new ArrayList<>();

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Language> query = cb.createQuery(Language.class);
        Root<Language> root = query.from(Language.class);

        Predicate criteria = cb.disjunction();
        String value = specification.getValue();

        for(Type type: specification.getTypes()) {
            switch (type) {
                case LANGUAGE_TYPE:
                    LanguageType languageType;
                    if(LanguageType.isMember(value)) {
                        languageType = LanguageType.memberOf(value);
                    }else {
                        break;
                    }
                    criteria = cb.or(criteria,
                            cb.equal(root.get(COLUMN_TYPE), languageType));
                    break;
                case DESCRIPTION:
                    criteria = cb.or(criteria,
                            cb.like(root.get(COLUMN_DESCRIPTION), concatWildCard(value,'%')));
                    break;
                case NAME:
                    criteria = cb.or(criteria,
                            cb.like(root.get(COLUMN_NAME), concatWildCard(value,'%')));
                    break;
            }
        }
        return entityManager.createQuery(query.where(criteria))
                .getResultList();
    }
}