package com.greencommute.microservice.jobs.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="skill")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="skill")
    private String name;

}
