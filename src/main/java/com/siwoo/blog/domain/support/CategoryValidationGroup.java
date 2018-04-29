package com.siwoo.blog.domain.support;

import javax.validation.groups.Default;
import java.io.Serializable;

public class CategoryValidationGroup implements Serializable {

    public interface PostForm extends Default {}
    public interface UpdateForm extends Default {}

}
