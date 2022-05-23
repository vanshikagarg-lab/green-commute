package com.greencommute.microservice.location.service;

import com.greencommute.microservice.location.dao.LocationRepository;
import com.greencommute.microservice.location.entity.Location;
import com.greencommute.microservice.location.exception.LocationNotFoundException;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class LocationServiceImpl implements LocationService{

    @Autowired()
    private LocationRepository locationRepository;

    @Override
    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    @Override
    public Location findById(int id) {
        Optional<Location> location = locationRepository.findById(id);
        if(location.isEmpty()) {
            throw new LocationNotFoundException("Location not found with the id: " + id);
        }
        return location.get();
    }
}
