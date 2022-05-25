package com.greencommute.microservice.routes.controller;

import com.greencommute.microservice.routes.entity.Route;
import com.greencommute.microservice.routes.exceptions.RouteNotFoundException;
import com.greencommute.microservice.routes.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping("/routes")
    public List<Route> getRoutes(){
        return routeService.getRoutes();
    }

    @GetMapping("/routes/{routeId}")
    public Route getRoute(@PathVariable int routeId) {
        Route route = routeService.getRoute(routeId);
        if (route == null) {
            throw new RouteNotFoundException("Route id not found - " + routeId);
        }
        return route;
    }
}
