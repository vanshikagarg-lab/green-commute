package com.greencommute.microservice.jobs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.greencommute.microservice.jobs.controller.JobController;
import com.greencommute.microservice.jobs.dto.JobDTO;
import com.greencommute.microservice.jobs.entity.Job;
import com.greencommute.microservice.jobs.entity.Location;
import com.greencommute.microservice.jobs.entity.Route;
import com.greencommute.microservice.jobs.entity.Skill;
import com.greencommute.microservice.jobs.service.JobService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class JobsControllerTest {

    private MockMvc mockMvc;

    @Mock
    private JobService jobService;

    @InjectMocks
    private JobController jobController;

    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter objectWriter = objectMapper.writer();

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

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(jobController).build();
    }

    @Test
    void getJobsTest() throws Exception {
        List<Job> jobs = new ArrayList<>(Arrays.asList(job1,job2,job3));
        Mockito.when(jobService.getJobs()).thenReturn(jobs);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/jobs")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(3)))
                .andExpect(jsonPath("$[0].saved",is(true)))
                .andExpect(jsonPath("$[1].saved",is(false)))
                .andExpect(jsonPath("$[2].saved",is(false)));
    }

    @Test
    void getJobTest() throws Exception {
        Mockito.when(jobService.getJob(1)).thenReturn(job1);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/jobs/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",notNullValue()))
                .andExpect(jsonPath("$.companyName",is("Myntra")));
    }

    @Test
    void updateJobTest() throws Exception {
        Job job4 = new Job(3,"Product Engineer","companylogo","Wipro",15,true,"19 min ago","500072","Hitech city,Hyderabad",loc1,skill2,routeList);
        JobDTO job4DTO = jobService.getDTO(job4);
        Mockito.when(jobService.saveJob(job4DTO)).thenReturn(job4);

        String content = objectWriter.writeValueAsString(job4);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.put("/jobs")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk());
    }

    @Test
    void getJobNotFoundTest() throws Exception {
        try {
            mockMvc.perform(MockMvcRequestBuilders
                            .get("/jobs/100")
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNotFound());
        }catch(Exception e){
            boolean isContains = e.getMessage().contains("Job Id Not Found - 100");
            assertTrue(isContains);
        }
    }

    @Test
    void getRouteBadRequestTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/jobs/abc")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

}
