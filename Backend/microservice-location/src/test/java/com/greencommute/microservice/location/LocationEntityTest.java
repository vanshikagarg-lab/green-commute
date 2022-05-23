package com.greencommute.microservice.location;

import com.greencommute.microservice.location.entity.Location;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Field;

class LocationEntityTest {

    @Test
    void shouldSetIdAndLocationAndAqi() throws Exception {
        Location location = new Location();
        location.setId(1);
        location.setName("Hyderabad");
        location.setAqi(894);

        Field idField = location.getClass().getDeclaredField("id");
        Field locationField = location.getClass().getDeclaredField("name");
        Field aqiField = location.getClass().getDeclaredField("aqi");

        idField.setAccessible(true);
        locationField.setAccessible(true);
        aqiField.setAccessible(true);

        Assertions.assertEquals(1, idField.get(location), "id and location value should match");
        Assertions.assertEquals("Hyderabad", locationField.get(location), "location name and location should match");
        Assertions.assertEquals(894, aqiField.get(location), "aqi and location should match");
    }
}
