package com.greencommute.microservice.skills.service;

import com.greencommute.microservice.skills.entity.Skill;

import java.util.List;

public interface SkillService {
    public List<Skill> findAll();

    public Skill findById(int id);
}
