package JS;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class Movie2 {

	private WebDriver driver;

	@BeforeEach
    void setUp() {        
        driver = new ChromeDriver();
    }
    
    @AfterEach
    void tearDown() {
        if (driver != null) {
            driver.quit(); 
        }
    }

	@Test
	void testBookButtonNotEnabled() {
		driver.get("http://localhost:3000/movie2");
         WebElement bookButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/button"));
		assertFalse(bookButton.isEnabled(), "Book Tickets button should NOT be enabled.");
	}

	@Test
	void testCorrectRedirectAfterBooking() {
		driver.get("http://localhost:3000/Mainpage");

		WebElement bookButton2 = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/section/a[5]/div/img"));
		bookButton2.click();
		WebElement bookButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/button"));
		bookButton.click();
		
		try {
			Thread.sleep(20);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		assertEquals("http://localhost:3000/Jazzshow", driver.getCurrentUrl(),"User should be redirected to the Jazzshow page.");
		driver.quit();
	}

	@Test
	void testButton() {
		driver.get("http://localhost:3000/movie2");
		WebElement bookButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/button"));
		bookButton.click();

	}

	@Test
	void testHeading() {
		driver.get("http://localhost:3000/movie2");
		WebElement heading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/h2[1]"));
		String expectedHeading = "About the Movie";
		String actualHeading = heading.getText();
		assertEquals(expectedHeading, actualHeading, "The heading should match");
	}

	@Test
	void testParaContent() {
		driver.get("http://localhost:3000/movie2");

		WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/p[1]"));

		String expectedParagraph = "The Japan Football Union hires the football enigma Jinpachi Ego.\n"
				+ "His masterplan to lead Japan to stardom is Blue Lock,\n"
				+ "a training regimen designed to create the world's greatest egotist striker.\n"
				+ "Those who fail Blue Lock will never again be permitted to represent Japan.";

		String actualParagraph = paragraph.getText();
		assertEquals(expectedParagraph, actualParagraph, "The paragraph content should match");
	}

	@Test
	void testHeadingFail() {
		driver.get("http://localhost:3000/movie2");

		WebElement heading = driver.findElement(By.tagName("h2"));
		String expectedHeading = "Sujana";
		String actualHeading = heading.getText();
		assertEquals(expectedHeading, actualHeading, "the heading does not match");
	}

	@Test
	void testparagraphcontentFail() {
		driver.get("http://localhost:3000/movie2");
		WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/h2[1]"));
		String expectedParagraph = "Hello! how are you?";
		String actualParagraph = paragraph.getText();
		assertTrue(actualParagraph.contains(expectedParagraph), "The paragraph content does not match");
	}

	@Test
	void testBookButtonNotPresentFail() {
		driver.get("http://localhost:3000/movie2");
        WebElement bookButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/button"));
        assertFalse(bookButton.isDisplayed(), "The 'Book Tickets' button should not be present.");
	}

	@Test
	void testMoviePosterImageNotDisplayedFail() {
		driver.get("http://localhost:3000/movie2");
        WebElement moviePosterImg = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/img"));
        assertFalse(moviePosterImg.isDisplayed(), "The movie poster image should not be displayed.");
	}

	@Test
	void testNavigationFail() {
		driver.get("http://localhost:3000/movie2");
        WebElement bookButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/button"));
        bookButton.click();
        assertEquals("http://localhost:3000/IncorrectJazzshow", driver.getCurrentUrl(),"The URL after clicking 'Book Tickets' does not match the incorrect expectation.");
	}

	@Test
	void testBookButtonLabelFail() {
		driver.get("http://localhost:3000/movie2");
        WebElement bookButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[1]/button"));
		String expectedLabel = "Reserve Tickets"; 
		String actualLabel = bookButton.getText();
		assertEquals(expectedLabel, actualLabel, "The button label does not match the expected value.");
	}

	    @Test
	    void testAboutMovieSectionDisplayed() {
	    	driver.get("http://localhost:3000/movie2");
	        WebElement movie1Link = driver.findElement(By.xpath("/html/body/div/div/div"));
	        movie1Link.click();

	        WebElement aboutMovieSection = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/h2[1]"));
	        boolean isAboutMovieDisplayed = aboutMovieSection.isDisplayed();
	        assertTrue(isAboutMovieDisplayed, "'About the Movie' section should be displayed after clicking on the movie link.");

	        WebElement movieDescription = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/p[1]"));
	        boolean isDescriptionDisplayed = movieDescription.isDisplayed();
	        assertTrue(isDescriptionDisplayed, "The movie description should be visible after clicking on the movie link.");
	    }


	
}
