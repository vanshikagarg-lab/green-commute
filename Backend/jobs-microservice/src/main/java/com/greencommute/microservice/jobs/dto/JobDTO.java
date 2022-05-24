package com.greencommute.microservice.jobs.dto;

import com.greencommute.microservice.jobs.entity.Location;
import com.greencommute.microservice.jobs.entity.Route;
import com.greencommute.microservice.jobs.entity.Skill;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class JobDTO {
    private int jobId;
    private String designation;
    private String companyLogo;
    private String companyName;
    private int distance;
    private boolean saved;
    private String address;
    private String pincode;
    private String posted;
    private Location location;
    private Skill skill;
    private Set<Route> routes = new HashSet<>();
}
