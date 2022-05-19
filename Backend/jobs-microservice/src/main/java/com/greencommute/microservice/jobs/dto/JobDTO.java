package com.greencommute.microservice.jobs.dto;

import com.greencommute.microservice.jobs.entity.Route;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Data
public class JobDTO {
    private int jobId;
    private String designation;
    private String companyLogo;
    private String companyName;
    private int distance;
    private boolean saved;
    private String location;
    private String skill;
    private Set<Route> routes = new HashSet<>();
}
