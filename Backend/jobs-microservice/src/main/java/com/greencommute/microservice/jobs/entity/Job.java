package com.greencommute.microservice.jobs.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="job")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int jobId;

    @Column(name="designation")
    private String designation;

    @Column(name="company_logo")
    private String companyLogo;

    @Column(name="company_name")
    private String companyName;

    @Column(name="distance")
    private int distance;

    @Column(name="saved")
    private boolean saved;

    @Column(name="posted")
    private String posted;

    @Column(name="pincode")
    private String pincode;

    @Column(name="address")
    private String address;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH,CascadeType.PERSIST})
    @JoinColumn(name="location_id")
    private Location location;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH,CascadeType.PERSIST})
    @JoinColumn(name="skill_id")
    private Skill skill;

    @ManyToMany(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH}, fetch = FetchType.EAGER)
    @JoinTable(
            name = "job_route",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "route_id")
    )
    private Set<Route> routes = new HashSet<>();

}
