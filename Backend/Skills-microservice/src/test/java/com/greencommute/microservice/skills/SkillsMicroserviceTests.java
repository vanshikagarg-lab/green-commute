package com.greencommute.microservice.skills;

import com.greencommute.microservice.skills.service.SkillService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Assertions;


@SpringBootTest

class SkillsMicroserviceTests {

    @Autowired
    private SkillService skillService;

    @Test
    void applicationContextTest() {
        SkillsMicroserviceApplication.main(new String[] {});
        Assertions.assertNotNull(skillService);
    }

}
