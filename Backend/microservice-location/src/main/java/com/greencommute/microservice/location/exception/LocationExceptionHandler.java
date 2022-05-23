package com.greencommute.microservice.location.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LocationExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<LocationErrorResponse> locationNotFoundExceptionHandler(LocationNotFoundException locationNotFoundException) {
        LocationErrorResponse errorResponse = new LocationErrorResponse();

        errorResponse.setStatusCode(404);

        errorResponse.setErrorMessage(locationNotFoundException.getMessage());

        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<LocationErrorResponse> allExceptionHandler(Exception e) {
        LocationErrorResponse errorResponse = new LocationErrorResponse();

        errorResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());

        errorResponse.setErrorMessage(e.getMessage());

        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
