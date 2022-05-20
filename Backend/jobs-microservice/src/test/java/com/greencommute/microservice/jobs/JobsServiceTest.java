package com.greencommute.microservice.jobs;

import com.greencommute.microservice.jobs.dao.JobRepository;
import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.entity.Job;
import com.greencommute.microservice.jobs.entity.Location;
import com.greencommute.microservice.jobs.entity.Route;
import com.greencommute.microservice.jobs.entity.Skill;
import com.greencommute.microservice.jobs.service.JobService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class JobsServiceTest {
    @MockBean
    private JobRepository jobRepository;

    @Autowired
    private JobService jobService;

    Location loc1 = new Location(1,"Hyderabad",853);
    Location loc2 = new Location(2,"Mumbai",957);

    Skill skill1 = new Skill(1,"UI/UX Designer");
    Skill skill2 = new Skill(2,"Product Engineer");

    Route route1 = new Route(1,"Bike");
    Route route2 = new Route(2,"Bus");
    Route route3 = new Route(3,"Train");
    Route route4 = new Route(4,"Car");

    Set<Route> routeList = new HashSet<>(Arrays.asList(route1,route2,route3,route4));

    Job job1 = new Job(1,"UI/UX Designer","companylogo","Myntra",35,true,"36 min ago","500072","Hitech city,Hyderabad",loc1,skill1,routeList);
    Job job2 = new Job(2,"UI/UX Designer","companylogo","Hp",40,false,"18 min ago","500072","Hitech city,Hyderabad",loc2,skill1,routeList);
    Job job3 = new Job(3,"Product Engineer","companylogo","Wipro",15,false,"19 min ago","500072","Hitech city,Hyderabad",loc1,skill2,routeList);

    @Test
    void getJobsTest() throws Exception {
        List<Job> jobs = new ArrayList<>(Arrays.asList(job1,job2,job3));
        Mockito.when(jobRepository.findAll()).thenReturn(jobs);
        assertEquals(3,jobService.getJobs().size());
    }

    @Test
    void getJobTest() throws Exception {
        Mockito.when(jobRepository.findById(1)).thenReturn(Optional.of(job1));
        assertEquals(job1,jobService.getJob(1));
        assertEquals("Myntra",jobService.getJob(1).getCompanyName());
    }

    @Test
    void updateJobTest() throws Exception {
        List<Job> jobs = new ArrayList<>(Arrays.asList(job1,job2,job3));
        Job job4 = new Job(3,"Product Engineer","companylogo","Wipro",15,true,"19 min ago","500072","Hitech city,Hyderabad",loc1,skill2,routeList);
        JobDTO job4DTO = jobService.getDTO(job4);
        Mockito.when(jobRepository.findAll()).thenReturn(jobs);
        Mockito.when(jobRepository.save(job4)).thenReturn(job4);
        assertEquals(jobService.getEntity(job4DTO).isSaved(),jobService.saveJob(job4DTO).isSaved());
    }
}


