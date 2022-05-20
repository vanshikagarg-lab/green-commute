package com.greencommute.microservice.jobs.service;

import com.greencommute.microservice.jobs.dao.JobRepository;
import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.entity.Job;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JobRepository jobRepository;

    @Override
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Job getJob(int theId) {
        Optional<Job> job = jobRepository.findById(theId);
        return job.orElse(null);
    }

    @Override
    public Job saveJob(JobDTO theJob) {
        Job job = convertDtoToEntity(theJob);
        jobRepository.save(job);
        return job;
    }

    public JobDTO convertEntityToDto(Job job){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        JobDTO jobDTO;
        jobDTO = modelMapper.map(job, JobDTO.class);
        return jobDTO;
    }

    public Job convertDtoToEntity(JobDTO jobDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        Job job;
        job = modelMapper.map(jobDTO,Job.class);
        return job;
    }

    @Override
    public JobDTO getDTO(Job theJob) {
        return convertEntityToDto(theJob);
    }

    @Override
    public Job getEntity(JobDTO theJob){
        return convertDtoToEntity(theJob);
    }
}
