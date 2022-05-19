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
    @Column(name = "job_id")
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

    @ManyToOne
    @JoinColumn(name="location_id")
    private String location;

    @ManyToOne
    @JoinColumn(name="skill_id")
    private String skill;

    @ManyToMany
    @JoinTable(
            name = "job_routes",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "route_id")
    )
    private Set<Route> routes = new HashSet<>();

    public Job(String designation,String companyLogo,String companyName,int distance,boolean saved,String location,String skill,Set<Route> routes){
        this.designation = designation;
        this.companyLogo = companyLogo;
        this.companyName = companyName;
        this.distance = distance;
        this.saved = saved;
        this.location = location;
        this.skill = skill;
        this.routes = routes;
    }

}
