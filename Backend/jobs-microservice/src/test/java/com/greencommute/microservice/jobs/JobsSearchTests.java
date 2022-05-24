package com.greencommute.microservice.jobs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.greencommute.microservice.jobs.dto.DistanceFilter;
import com.greencommute.microservice.jobs.dto.SearchDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import static org.hamcrest.Matchers.*;


@SpringBootTest
@AutoConfigureMockMvc
class JobsSearchTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testJobSearch() throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();
        ObjectWriter objectWriter = objectMapper.writer();

        DistanceFilter distanceFilter = new DistanceFilter();
        distanceFilter.setDistance0To10(true);
        distanceFilter.setDistance11To20(true);
        distanceFilter.setDistance21To30(true);
        distanceFilter.setDistance31To40(true);

        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setLocation("Hyderabad");
        searchDTO.setSkill("UI/UX Designer");
        searchDTO.setDistanceFilter(distanceFilter);

        String content = objectWriter.writeValueAsString(searchDTO);

        mockMvc.perform(post("/search").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(jsonPath("$",hasSize(2))).andExpect(jsonPath("$[0].jobId",is(4)));
    }
    @Test
    void getAllTheJobs() throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();
        ObjectWriter objectWriter = objectMapper.writer();

        SearchDTO searchDTO = new SearchDTO();

        String content = objectWriter.writeValueAsString(searchDTO);

        mockMvc.perform(post("/search").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(jsonPath("$",hasSize(8)));
    }

    @Test
    void emptyQueryIsPassed() throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();
        ObjectWriter objectWriter = objectMapper.writer();

        DistanceFilter distanceFilter = new DistanceFilter();
        distanceFilter.setDistance0To10(false);
        distanceFilter.setDistance11To20(false);
        distanceFilter.setDistance21To30(false);
        distanceFilter.setDistance31To40(false);

        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setLocation("");
        searchDTO.setSkill("");
        searchDTO.setDistanceFilter(distanceFilter);

        String content = objectWriter.writeValueAsString(searchDTO);

        mockMvc.perform(post("/search").contentType(MediaType.APPLICATION_JSON).content(content)).andExpect(jsonPath("$",hasSize(8)));
    }

}
