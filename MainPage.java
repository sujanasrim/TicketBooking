package JS;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


class MainPage {
	
	WebDriver driver;
	
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


    private void loadHomePage() {    
        driver.get("http://localhost:3000/Mainpage");  
    }
    
	    @Test
	    void testPageTitleDisplay() {
	        loadHomePage();
	        
	        WebElement pageTitle = driver.findElement(By.xpath("//h1")); 
	        String actualTitle = pageTitle.getText();
	        
	        String expectedTitle = "Recommended Movies"; 
	        assertEquals(expectedTitle, actualTitle, "The page title should display the correct name.");
	    }


    @Test
    void testMovieLinks() {
        loadHomePage(); 
        
        String[][] expectedLinks = {
            {"Kabir Singh", "http://localhost:3000/movie1"}, 
            {"BlueLock", "http://localhost:3000/movie2"},
            {"Laila Majnu", "http://localhost:3000/movie3"},
            {"Deadpool & Wolverine", "http://localhost:3000/movie4"},
            {"Crow", "http://localhost:3000/movie5"},
            {"Sanivaaram", "http://localhost:3000/movie6"},
        };

        for (String[] movie : expectedLinks) {
            String movieName = movie[0];
            String expectedUrl = movie[1];
            
            WebElement movieLink = driver.findElement(By.linkText(movieName)); 
            movieLink.click();
            
            String currentUrl = driver.getCurrentUrl();
            assertEquals(expectedUrl, currentUrl, "The page should redirect to the correct URL for " + movieName + ".");

            driver.navigate().back();
            loadHomePage();
        }
    }
    
    @Test
    void testLogoDisplay() {
        loadHomePage();
        
        WebElement logo = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/h4")); 

        boolean isLogoDisplayed = logo.isDisplayed();
        assertTrue(isLogoDisplayed, "The logo should be displayed on the main page.");
    }

    void testHomeLinkStaysOnMainPage() {
        loadHomePage();

        WebElement homeLink = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/h4[1]")); 

        homeLink.click();

        String currentUrl = driver.getCurrentUrl();
        String expectedUrl = "http://localhost:3000/Mainpage";
        assertEquals(expectedUrl, currentUrl, "Clicking on 'Home' should keep the user on the main page.");
    }
 
    void testLoginOptionsDisplayed() {
        loadHomePage(); 
        
        WebElement loginButton = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/h4[2]"));
        loginButton.click();


        WebElement customerLoginOption = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/ul/li[1]/a"));
        boolean isCustomerLoginDisplayed = customerLoginOption.isDisplayed();
        assertTrue(isCustomerLoginDisplayed, "The 'Login as Customer' option should be displayed after clicking 'Login'.");

        WebElement adminLoginOption = driver.findElement(By.xpath("/html/body/div/div/div/div[1]/div/div/ul/li[2]/a"));
        boolean isAdminLoginDisplayed = adminLoginOption.isDisplayed();
        assertTrue(isAdminLoginDisplayed, "The 'Login as Admin' option should be displayed after clicking 'Login'.");
    }
}
