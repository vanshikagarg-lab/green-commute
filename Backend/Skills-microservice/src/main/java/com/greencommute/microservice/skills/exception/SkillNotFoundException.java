package com.greencommute.microservice.skills.exception;

public class SkillNotFoundException extends RuntimeException {
    public SkillNotFoundException(String message) {
        super(message);
    }
}
