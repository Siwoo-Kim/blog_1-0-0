package com.siwoo.blog.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.net.URL;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {

    private Long id;
    private String title;
    private String author;
    private String publisher;
    private String isbn;
    private String comment;
    private Integer pages;
    private Integer rating;
    @JsonFormat(pattern = "yyyy MM dd")
    private LocalDate publishedDate;
    private URL link;

}
