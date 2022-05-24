package com.greencommute.microservice.location.controller;

import com.greencommute.microservice.location.entity.Location;
import com.greencommute.microservice.location.service.LocationService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
@Log4j2
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("")
    public List<Location> getLocation() {
        return locationService.findAll();
    }

    @GetMapping("/{locId}")
    public Location getLocationById(@PathVariable int locId) {
        return locationService.findById(locId);
    }
}
