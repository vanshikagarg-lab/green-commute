package com.greencommute.microservice.jobs.dao;

import com.greencommute.microservice.jobs.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job,Integer> {
}
