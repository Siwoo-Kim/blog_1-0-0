package com.siwoo.blog.web;

import com.siwoo.blog.domain.Book;
import com.siwoo.blog.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/rest/book")
public class BookController {

    @Autowired BookService bookService;

    @CrossOrigin
    @GetMapping("/{id}")
    public Book byId(@PathVariable("id") Long id) {
        System.out.println(id);
        return bookService.byId(id);
    }

    @PostMapping
    public ResponseEntity<Void> save(@Validated @RequestBody Book book, UriComponentsBuilder builder) {
        book = bookService.save(book);
        URI resultUrl = builder.path("/rest/book")
                .pathSegment(book.getId()+"")
                .build()
                .toUri();
        return ResponseEntity.created(resultUrl).build();
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long id, @Validated @RequestBody Book book) {
        if(book.getId() == null) { book.setId(id); }
        bookService.update(book);
    }
}
