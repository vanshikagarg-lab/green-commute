package com.greencommute.microservice.routes.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="route")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int routeId;

    @Column(name="route")
    private String routeName;

    public Route(String routeName){
        this.routeName = routeName;
    }
}
