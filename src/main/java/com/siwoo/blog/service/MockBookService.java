package com.siwoo.blog.service;

import com.siwoo.blog.domain.Book;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class MockBookService implements BookService {
    private static Map<Long, Book> bookRepository = new ConcurrentHashMap<>();
    private static long id = 0;

    private long nextId() {
        return ++id;
    }

    @PostConstruct
    public void setup() {
        Book book = Book.builder()
                .id(nextId())
                .author("전원경")
                .title("클림트")
                .isbn("9788950974121(8950974126)")
                .publishedDate(LocalDate.of(2018,4,17))
                .build();
        bookRepository.put(book.getId(), book);
    }

    @Override
    public Book byId(long id) {
        return this.bookRepository.get(id);
    }

    @Override
    public Book save(Book book) {
        book.setId(nextId());
        bookRepository.put(book.getId(), book);
        return book;
    }

    @Override
    public void update(Book book) {
        bookRepository.put(book.getId(), book);
    }
}
