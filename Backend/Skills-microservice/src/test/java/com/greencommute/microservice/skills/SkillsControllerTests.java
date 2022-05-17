package com.greencommute.microservice.skills;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.*;


@SpringBootTest
@AutoConfigureMockMvc
class SkillsControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getAllSkills() throws Exception{
        mockMvc.perform(get("/skills")).andExpect(status().isOk()).andExpect(jsonPath("$",hasSize(2))).andExpect(jsonPath("$[0].name",is("UI/UX Designer")));
    }

    @Test
    void getSkillById() throws Exception{
        mockMvc.perform(get("/skills/1")).andExpect(status().isOk()).andExpect(jsonPath("$.name",is("UI/UX Designer")));
    }

    @Test
    void shouldThrowExceptionWhenSkillNotFound() throws Exception{
        mockMvc.perform(get("/skills/3")).andExpect(status().isNotFound()).andExpect(jsonPath("$.message",is("Skill not found with id: 3")));
    }
}
