package com.siwoo.blog.repository;

import com.siwoo.blog.domain.Category;
import com.siwoo.blog.domain.CategoryType;
import com.siwoo.blog.domain.Language;
import com.siwoo.blog.domain.support.CategorySpecification;
import org.springframework.stereotype.Repository;
import static com.siwoo.blog.domain.support.CategorySpecification.*;
import static com.siwoo.blog.repository.support.RepositorySupporter.*;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CategoryRepositoryImpl implements CustomCategoryRepository {

    @PersistenceContext
    EntityManager entityManager;

    static final String COLUMN_TYPE = "type";
    static final String COLUMN_DESCRIPTION = "description";
    static final String COLUMN_NAME = "name";
    static final String COLUMN_LANGUAGE = "language";

    @Override
    public List<Category> searchAny(CategorySpecification specification) {
        if(specification.isEmpty()) { return new ArrayList<>(); }

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Category> query = cb.createQuery(Category.class);
        Root<Category> categoryRoot = query.from(Category.class);
        Join<Category,Language> join = categoryRoot.join(COLUMN_LANGUAGE, JoinType.INNER);

        Predicate criteria = cb.disjunction();
        String value = specification.getValue();

        for (Type type: specification.getTypes()) {
            switch (type) {
                case LANGUAGE: {
                    criteria = cb.or(
                            criteria,
                            cb.like(cb.upper(join.get(LanguageRepositoryImpl.COLUMN_NAME)),
                                    concatWildCard(value.toUpperCase(),"%")));
                    break;
                }
                case CATEGORY_TYPE: {
                    CategoryType categoryType;
                    if(CategoryType.isMember(value)) {
                        categoryType = CategoryType.memberOf(value);
                    } else {
                        break;
                    }
                    criteria = cb.or(
                            criteria,
                            cb.equal(categoryRoot.get(COLUMN_TYPE), categoryType));
                    break;
                }
                case DESCRIPTION: {
                    criteria = cb.or(
                            criteria,
                            cb.like(cb.upper(categoryRoot.get(COLUMN_DESCRIPTION)),
                                    concatWildCard(value.toUpperCase(),"%")));
                    break;
                }
                case NAME: {
                    criteria = cb.or(
                            criteria,
                            cb.like(cb.upper(categoryRoot.get(COLUMN_NAME)),
                                    concatWildCard(value.toUpperCase(),"%")));
                    break;
                }
            }
        }

        return entityManager.createQuery(query.where(criteria))
                .getResultList();
    }
}
