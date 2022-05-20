package com.greencommute.microservice.jobs.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="location")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="location")
    private String name;

    @Column(name="aqi")
    private int aqi;

}
