package com.BC32.GreenCommute;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import com.BC32.GreenCommute.GreenCommuteApplication;

@SpringBootTest
class GreenCommuteApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void applicationContextTest() {
		GreenCommuteApplication.main(new String[] {});
	}
}
