package com.siwoo.blog.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.sun.imageio.spi.RAFImageInputStreamSpi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.List;

@Configuration
public class WebConfig extends WebMvcConfigurationSupport {

    @Bean
    public ViewResolver viewResolver() {
        return new InternalResourceViewResolver("/static/","");
    }

    @Override
    protected void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index.html");
        registry.addRedirectViewController("/home","/").setStatusCode(HttpStatus.FOUND);
    }

    @Bean
    public StandardServletMultipartResolver multipartResolver() {
        return new StandardServletMultipartResolver();
    }

    @Override
    protected void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/rest/**");
    }

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**/*.js").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**/*.svg").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**/*.png").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**/*.woff2").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**/*.css").addResourceLocations("classpath:/static/");
    }

    @Bean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
        return new MappingJackson2HttpMessageConverter(
                Jackson2ObjectMapperBuilder
                        .json()
                        .indentOutput(true)
                        .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                        .build());
    }

    @Override
    protected void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(0,mappingJackson2HttpMessageConverter());
    }

    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }
    @Autowired
    MessageSource messageSource;

    @Autowired
    LocalValidatorFactoryBean localValidatorFactoryBean;

    @Bean
    @Override
    public Validator getValidator() {
        return localValidatorFactoryBean;
    }
}
