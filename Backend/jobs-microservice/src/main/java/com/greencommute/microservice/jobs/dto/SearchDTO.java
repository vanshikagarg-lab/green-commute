package com.greencommute.microservice.jobs.dto;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class SearchDTO {
    @Autowired
    private DistanceFilter distanceFilter;

    private String location;
    private String skill;
}
