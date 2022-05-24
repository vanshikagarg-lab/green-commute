package com.greencommute.microservice.jobs.dto;

import lombok.Data;

@Data
public class DistanceFilter {
    private boolean distance0To10;
    private boolean distance11To20;
    private boolean distance21To30;
    private boolean distance31To40;
}
