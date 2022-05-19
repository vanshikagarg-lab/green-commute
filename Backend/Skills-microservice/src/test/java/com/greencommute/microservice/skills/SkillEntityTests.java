package com.greencommute.microservice.skills;

import com.greencommute.microservice.skills.entity.Skill;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


import java.lang.reflect.Field;

class SkillEntityTests {

    @Test
    void shouldSetIdAndSkill() throws Exception {
        Skill skill = new Skill();
        skill.setId(1);
        skill.setName("UI/UX Designer");

        Field idField = skill.getClass().getDeclaredField("id");
        Field skillField = skill.getClass().getDeclaredField("name");
        idField.setAccessible(true);
        skillField.setAccessible(true);

        Assertions.assertEquals(1, idField.get(skill), "id and skill value should match");
        Assertions.assertEquals("UI/UX Designer", skillField.get(skill), "id and skill value should match");
    }
}
