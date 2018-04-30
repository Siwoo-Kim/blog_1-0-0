package com.siwoo.blog.service;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ImageResolver  {

    List<String> allImageNames();
}
