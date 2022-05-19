package com.greencommute.microservice.jobs.controller;

import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.entity.Job;
import com.greencommute.microservice.jobs.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/jobs")
    public List<Job> getJobs(){
        return jobService.getJobs();
    }

    @GetMapping("/jobs/{jobId}")
    public Job getJob(@PathVariable int jobId) {
        return jobService.getJob(jobId);
    }

    @PutMapping("/jobs")
    public Job updateJob(@RequestBody JobDTO theJob){
        return jobService.saveJob(theJob);
    }
}
