package com.greencommute.microservice.location;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class LocationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getAllLocation() throws Exception{
        mockMvc.perform(get("/location")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(2))).andExpect(jsonPath("$[0].name", is("Hyderabad")));
    }

    @Test
    void getLocationById() throws Exception {
        mockMvc.perform(get("/location/1")).andExpect(status().isOk()).andExpect(jsonPath("$.name", is("Hyderabad")));
    }

    @Test
    void throwsExceptionWhenLocationNotFound() throws Exception {
        mockMvc.perform(get("/location/3")).andExpect(status().isNotFound()).andExpect(jsonPath("$.errorMessage", is("Location not found with the id: 3")));
    }
}
