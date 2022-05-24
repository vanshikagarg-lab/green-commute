package com.greencommute.microservice.jobs.service;

import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.dto.SearchDTO;
import com.greencommute.microservice.jobs.entity.Job;

import java.util.List;

public interface JobService {
    List<Job> getJobs();

    Job getJob(int theId);

    Job saveJob(JobDTO theJob);

    JobDTO getDTO(Job theJob);

    Job getEntity(JobDTO theJob);

    List<Job> searchJobs(SearchDTO searchDTO);

}
