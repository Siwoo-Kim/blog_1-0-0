package com.siwoo.blog.learning;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.StdDateFormat;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;
import java.time.LocalDate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestJasckson {

    @Autowired ObjectMapper objectMapper;

    @Test
    public void objectMapperBuilder() throws IOException {
        ObjectMapper objectMapper = Jackson2ObjectMapperBuilder
                .json()
                .indentOutput(true)
                .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                .dateFormat(new StdDateFormat())
                .build();

        LocalDate localDateTime = objectMapper.convertValue("2017-08-03",LocalDate.class);
        String value = objectMapper.writeValueAsString(localDateTime);
        System.out.println(value);
    }
}
