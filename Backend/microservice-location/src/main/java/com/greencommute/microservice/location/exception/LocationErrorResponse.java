package com.greencommute.microservice.location.exception;

public class LocationErrorResponse {

    private int statusCode;

    private String errorMessage;

    private long timeStamp;

    public LocationErrorResponse() {
        /* Empty constructor required by Hibernate */
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }
}
