package com.greencommute.microservice.jobs.service;

import com.greencommute.microservice.jobs.dao.JobRepository;
import com.greencommute.microservice.jobs.dto.DistanceFilter;
import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.dto.SearchDTO;
import com.greencommute.microservice.jobs.entity.Job;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public List<Job> searchJobs(SearchDTO searchDTO){
        List<Job> jobs = this.getJobs();
        if (searchDTO.getLocation() != null && searchDTO.getLocation().length() > 0) {
            jobs = filterJobsByLocation(jobs, searchDTO.getLocation());
        }
        if (searchDTO.getSkill() != null && searchDTO.getSkill().length() > 0) {
            jobs = filterJobsBySkill(jobs, searchDTO.getSkill());
        }
        if (searchDTO.getDistanceFilter() != null) {
            jobs = applyDistanceFilter(jobs, searchDTO.getDistanceFilter());
        }
        return jobs;
    }

    @Override
    public JobDTO getDTO(Job theJob) {
        return convertEntityToDto(theJob);
    }

    @Override
    public Job getEntity(JobDTO theJob){
        return convertDtoToEntity(theJob);
    }

    private List<Job> filterJobsByLocation(List<Job> jobs, String location) {
        return jobs.stream().filter(job -> (job.getLocation().getName().equals(location))).collect(Collectors.toList());
    }

    private List<Job> filterJobsBySkill(List<Job> jobs, String skill) {
        return jobs.stream().filter(job -> (job.getSkill().getName().equals(skill))).collect(Collectors.toList());
    }

    private List<Job> applyDistanceFilter(List<Job> jobs, DistanceFilter distanceFilter) {
        List<Job> filteredJobs = new ArrayList<>();
        if (distanceFilter.isDistance0To10()) {
            filteredJobs.addAll(filterJobsByDistance(jobs,0,10));
        }
        if (distanceFilter.isDistance11To20()) {
            filteredJobs.addAll(filterJobsByDistance(jobs,11,20));
        }
        if (distanceFilter.isDistance21To30()) {
            filteredJobs.addAll(filterJobsByDistance(jobs,21,30));
        }
        if (distanceFilter.isDistance31To40()) {
            filteredJobs.addAll(filterJobsByDistance(jobs,31,40));
        }
        if(!filteredJobs.isEmpty()){
            return filteredJobs;
        }
        return jobs;
    }

    public List<Job> filterJobsByDistance(List<Job> jobs,int min,int max){
        return jobs.stream().filter(job -> (job.getDistance() >= min && job.getDistance() <= max)).collect(Collectors.toList());
    }

}
