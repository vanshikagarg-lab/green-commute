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
        return jobService.searchJobs(searchDTO);
    }


}
