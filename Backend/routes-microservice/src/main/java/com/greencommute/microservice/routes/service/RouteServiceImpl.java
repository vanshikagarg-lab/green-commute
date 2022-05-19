package com.greencommute.microservice.routes.service;

import com.greencommute.microservice.routes.dao.RouteRepository;
import com.greencommute.microservice.routes.entity.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteServiceImpl implements RouteService{

    @Autowired
    private RouteRepository routeRepository;

    @Override
    public List<Route> getRoutes() {
        return routeRepository.findAll();
    }

    @Override
    public Route getRoute(int theId) {
        Optional<Route> route = routeRepository.findById(theId);
        return route.orElse(null);
    }
}
