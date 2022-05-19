package com.greencommute.microservice.routes.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RouteErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
}