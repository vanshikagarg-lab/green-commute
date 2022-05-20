package com.greencommute.microservice.jobs.controller;

import com.greencommute.microservice.jobs.dto.DistanceFilter;
import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.dto.SearchDTO;
import com.greencommute.microservice.jobs.entity.Job;
import com.greencommute.microservice.jobs.exceptions.JobNotFoundException;
import com.greencommute.microservice.jobs.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/jobs")
    public List<Job> getJobs(){
        return jobService.getJobs();
    }

    @GetMapping("/jobs/{jobId}")
    public Job getJob(@PathVariable int jobId) {
        Job job = jobService.getJob(jobId);
        if(job == null){
            throw new JobNotFoundException("Job Id Not Found - " + jobId);
        }
        return job;
    }

    @PutMapping("/jobs")
    public Job updateJob(@RequestBody JobDTO theJob){
        return jobService.saveJob(theJob);
    }

    @PostMapping("/search")
    public List<Job> searchJobs(@RequestBody SearchDTO searchDTO) {
        List<Job> jobs = jobService.getJobs();
        if (searchDTO.getLocation() != null && searchDTO.getLocation().length() > 0) {
            jobs = filterJobsByLocation(jobs, searchDTO.getLocation());
        }
        if (searchDTO.getSkill() != null && searchDTO.getSkill().length() > 0) {
            jobs = filterJobsBySkill(jobs, searchDTO.getSkill());
        }
        if (searchDTO.getDistanceFilter() != null) {
            jobs = filterJobsByDistance(jobs, searchDTO.getDistanceFilter());
        }
        return jobs;
    }

    private List<Job> filterJobsByLocation(List<Job> jobs, String location) {
        return jobs.stream().filter(job -> (job.getLocation().getName().equals(location))).collect(Collectors.toList());
    }

    private List<Job> filterJobsBySkill(List<Job> jobs, String skill) {
        return jobs.stream().filter(job -> (job.getSkill().getName().equals(skill))).collect(Collectors.toList());
    }

    private List<Job> filterJobsByDistance(List<Job> jobs, DistanceFilter distanceFilter) {
        List<Job> filteredJobs = new ArrayList<>();
        if (distanceFilter.isDistance0To10()) {
            filteredJobs.addAll(jobs.stream().filter(job -> (job.getDistance() >= 0 && job.getDistance() <= 10)).collect(Collectors.toList()));
        }
        if (distanceFilter.isDistance11To20()) {
            filteredJobs.addAll(jobs.stream().filter(job -> (job.getDistance() >= 11 && job.getDistance() <= 20)).collect(Collectors.toList()));
        }
        if (distanceFilter.isDistance21To30()) {
            filteredJobs.addAll(jobs.stream().filter(job -> (job.getDistance() >= 21 && job.getDistance() <= 30)).collect(Collectors.toList()));
        }
        if (distanceFilter.isDistance31To40()) {
            filteredJobs.addAll(jobs.stream().filter(job -> (job.getDistance() >= 31 && job.getDistance() <= 40)).collect(Collectors.toList()));
        }
        return filteredJobs;
    }


}
