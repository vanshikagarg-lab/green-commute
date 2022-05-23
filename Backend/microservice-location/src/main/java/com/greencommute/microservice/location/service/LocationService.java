package com.greencommute.microservice.location.service;

import com.greencommute.microservice.location.entity.Location;

import java.util.List;

public interface LocationService {
    public List<Location> findAll();

    public Location findById(int id);
}
