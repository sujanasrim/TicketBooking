package JS;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class PrivacyPolicy {

    WebDriver driver;

    @BeforeEach
    void setUp() {
        
        
        driver = new ChromeDriver();
    }

    @AfterEach
    void tearDown() throws Exception {
        if (driver != null) {
            driver.quit();  
        }
    }
      
    private void loadHomePage() {
        
        driver.get("http://localhost:3000/PrivacyPolicy");  
    }

    @Test
    void testTitle() {
        loadHomePage();
        String expectedTitle = "React App";  
        String actualTitle = driver.getTitle();
        assertEquals(expectedTitle, actualTitle, "The page title should match");
    }

    @Test
     void testMainHeading() {
        loadHomePage(); 
        WebElement heading = driver.findElement(By.tagName("h1")); 
        String expectedHeading = "Privacy Policy for JazzShow";  
        String actualHeading = heading.getText();
        assertEquals(expectedHeading, actualHeading, "The Privacy Policy for JazzShow heading should match");
    }
    @Test
     void testfirstParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[2]")); 
        String expectedParagraph = "At JazzShow, we are committed to protecting your privacy and ensuring that your personal information is handled"
                +"in a safe and responsible manner. This Privacy Policy outlines our practices regarding the collection, use, and"
                +"disclosure of information we receive from users of our movie booking website.";       
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The first paragraph content should be match");
    }
    
   

    @Test
     void testsubheading1() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[2]")); 
        String expectedPlatformHeading = "Information We Collect";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The Information We Collect heading should be displayed correctly");
    }
    
    @Test
     void testsecondParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[3]")); 
        String expectedParagraph = "We may collect personal information that you provide to us directly, such as:\n"
        		+ "Name\n"
        		+ "Contact information (email address, phone number, mailing address)\n"
        		+ "Date of birth\n"
        		+ "Payment information (credit card details)\n"
        		+ "Booking history";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The second paragraph content should be match");
    }
    

    
    @Test
    public void testsubheading2() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h3[2]")); 
        String expectedPlatformHeading = "Automatically Collected Information";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The Automatically Collected Information heading should be match");
    }
    @Test
     void testThirdParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/ul[2]")); 
        String expectedParagraph = "When you interact with our website and online services, we may automatically collect certain information about your device and usage, including:\n"
        		+ "Browser type and version\n"
        		+ "Pages visited\n"
        		+ "Time and date of visit\n"
        		+ "IP address";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The third paragraph content should be match");
    }
  
    @Test
     void testSubheading3() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[3]")); 
        String expectedPlatformHeading = "How We Use Your Information";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The How We Use Your Information heading should be match");
    }
    
   
     @Test
    void testfourthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[4]")); 
        String expectedParagraph = "We use the collected information for various purposes, including:\n"
        		+ "Processing and managing your bookings\n"
        		+ "Improving our website and services\n"
        		+ "Communicating with you about your bookings and promotional offers\n"
        		+ "Handling payments securely\n"
        		+ "Providing customer support";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fourth paragraph content should be match");
    }

    
    @Test
    public void testSubheading4() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[4]")); 
        String expectedPlatformHeading = "Data Security";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The Data Security heading should be match");
    }
    @Test
     void testfifthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[6]")); 
        String expectedParagraph = "We implement appropriate technical and organizational measures to protect your"
        		+ "personal information from unauthorized access, disclosure, alteration, and destruction. However,"
        		+ "no method of transmission over the internet or electronic storage is 100% secure, so we cannot"
        		+ "guarantee absolute security.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    

    @Test
    void testTitle_Fail() {
        loadHomePage();
        String expectedTitle = "Sujana"; 
        String actualTitle = driver.getTitle();
        assertEquals(expectedTitle, actualTitle, "the title does not match");
    }

    @Test
     void testHeading_Fail() {
        loadHomePage(); 
        WebElement heading = driver.findElement(By.tagName("h1")); 
        String expectedHeading = "Movie Show";  
        String actualHeading = heading.getText();
        assertEquals(expectedHeading, actualHeading, "the heading does not match");
    }
    @Test
     void testparagraphcontent_Fail() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[5]")); 
        String expectedParagraph = "Hello! how are you?";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The paragraph content does not match");
    }
    

}
