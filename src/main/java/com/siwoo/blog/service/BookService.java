package com.siwoo.blog.service;

import com.siwoo.blog.domain.Book;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface BookService {

    Book byId(long id);

    Book save(Book book);

    void update(Book book);

}
