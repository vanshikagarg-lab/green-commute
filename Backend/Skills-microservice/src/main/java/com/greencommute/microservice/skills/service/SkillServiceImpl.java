package com.greencommute.microservice.skills.service;

import com.greencommute.microservice.skills.dao.SkillRepository;
import com.greencommute.microservice.skills.entity.Skill;
import com.greencommute.microservice.skills.exception.SkillNotFoundException;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class SkillServiceImpl implements SkillService {

    @Autowired()
    private SkillRepository skillRepository;

    @Override
    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public Skill findById(int id) throws SkillNotFoundException {
        Optional<Skill> foundSkill = skillRepository.findById(id);
        if(foundSkill.isEmpty()){
            throw new SkillNotFoundException("Skill not found with id: "+id);
        }
        return foundSkill.get();
    }
}
