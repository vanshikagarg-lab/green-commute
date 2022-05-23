package com.greencommute.microservice.location;

import com.greencommute.microservice.location.service.LocationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class LocationApplicationTests {

	@Autowired
	private LocationService locationService;

	@Test
	void applicationContextTest() {
		LocationApplication.main(new String[] {});

		Assertions.assertNotNull(locationService);
	}

}
