package com.greencommute.microservice.skills.controller;


import com.greencommute.microservice.skills.entity.Skill;
import com.greencommute.microservice.skills.service.SkillService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/skills")
@Log4j2
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("")
    public List<Skill> getSkills(){
        return skillService.findAll();
    }

    @GetMapping("/{skillId}")
    public Skill getSkillById(@PathVariable int skillId){
        return skillService.findById(skillId);
    }
}
