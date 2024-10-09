package JS;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class TnC {

    WebDriver driver;

    @BeforeEach
    void setUp() {
        
        
        driver = new ChromeDriver();
    }

    private void loadHomePage() {
        
        driver.get("http://localhost:3000/TermsAndConditions");  
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
        String expectedHeading = "Terms and Conditions for JazzShow";  
        String actualHeading = heading.getText();
        assertEquals(expectedHeading, actualHeading, "The Terms and Conditions for JazzShow heading should match");
    }
 
    @Test
    void testfirstheading() {
       loadHomePage(); 
       WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[1]")); 
       String expectedPlatformHeading = "1. Introduction";  
       String actualPlatformHeading = platformHeading.getText();
       assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 1. Introduction heading should be displayed correctly");
   }
    
    @Test
     void testfirstParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[1]")); 
        String expectedParagraph = "Welcome to JazzShow. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.";       
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The first paragraph content should be match");
    }
    
   

    @Test
     void testsubheading2() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[2]")); 
        String expectedPlatformHeading = "2. Acceptance of Terms";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 2. Acceptance of Terms heading should be displayed correctly");
    }
    
    @Test
     void testsecondParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[2]")); 
        String expectedParagraph = "By using our website or services, you agree to these Terms and Conditions, as well as any other policies or guidelines that may be provided. If you do not agree with these Terms, please do not use our website or services."; 
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The second paragraph content should be match");
    }
    

    
    @Test
    public void testsubheading3() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[3]")); 
        String expectedPlatformHeading = "3. Use of Our Website";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 3. Use of Our Website heading should be match");
    }
    @Test
     void testThirdParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[3]")); 
        String expectedParagraph = "You are responsible for your use of our website and ensuring that your use complies with all applicable laws and regulations. You agree not to:\n"
        		+ "Use the website for any illegal or unauthorized purpose.\n"
        		+ "Engage in any activity that disrupts or interferes with the functionality of the website.\n"
        		+ "Attempt to gain unauthorized access to any part of the website or its systems.\n"
        		+ "Upload or transmit any content that is harmful, offensive, or violates the rights of others.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The third paragraph content should be match");
    }
  
    @Test
     void testSubheading4() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[4]")); 
        String expectedPlatformHeading = "4. Intellectual Property";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 4. Intellectual Property heading should be match");
    }
    
   
     @Test
    void testfourthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[4]")); 
        String expectedParagraph = "All content on our website, including text, graphics, logos, and images, is the property of JazzShow and is protected by intellectual property laws. You may not reproduce, distribute, or otherwise use any content from our website without our express written permission.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fourth paragraph content should be match");
    }

    
    @Test
    public void testSubheading5() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[5]")); 
        String expectedPlatformHeading = "5. User Content";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 5. User Content heading should be match");
    }
    @Test
     void testfifthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[5]")); 
        String expectedParagraph = "By submitting content to our website, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display that content. You are responsible for ensuring that any content you submit does not infringe the rights of others or violate any laws.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    
    @Test
    public void testSubheading6() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[6]")); 
        String expectedPlatformHeading = "6. Privacy Policy";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 6. Privacy Policy heading should be match");
    }
    @Test
     void testsixthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[6]")); 
        String expectedParagraph = "Our Privacy Policy describes how we collect, use, and protect your personal information. By using our website or services, you agree to the terms of our Privacy Policy.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    
    @Test
    public void testSubheading7() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[7]")); 
        String expectedPlatformHeading = "7. Disclaimers";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 7. Disclaimers heading should be match");
    }
    @Test
     void testseventhParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[7]")); 
        String expectedParagraph = "Our website and services are provided \"as is\" and we make no warranties or representations of any kind, express or implied, regarding the accuracy or reliability of the website or its content.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    
    @Test
    public void testSubheading8() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[8]")); 
        String expectedPlatformHeading = "8. Limitation of Liability";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 8. Limitation of Liability heading should be match");
    }
    @Test
     void testeighthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[8]")); 
        String expectedParagraph = "JazzShow will not be liable for any indirect, incidental, or consequential damages arising from your use of the website or services.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    
    @Test
    public void testSubheading9() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[9]")); 
        String expectedPlatformHeading = "9. Changes to Terms";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 9. Changes to Terms heading should be match");
    }
    @Test
     void testninethParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[9]")); 
        String expectedParagraph = "We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review these Terms periodically to stay informed about our terms of use.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    
    @Test
    public void testSubheading10() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[10]")); 
        String expectedPlatformHeading = "10. Termination";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 10. Termination heading should be match");
    }
    @Test
     void testtenthParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[10]")); 
        String expectedParagraph = "We reserve the right to suspend or terminate your access to our website or services if you violate these Terms and Conditions or engage in any prohibited activities.";  
        String actualParagraph = paragraph.getText();
        assertTrue(actualParagraph.contains(expectedParagraph), "The fifth paragraph content should be match");
    }
    
    @Test
    public void testSubheading11() {
        loadHomePage(); 
        WebElement platformHeading = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/h2[11]")); 
        String expectedPlatformHeading = "11. Contact Us";  
        String actualPlatformHeading = platformHeading.getText();
        assertEquals(expectedPlatformHeading, actualPlatformHeading, "The 11. Contact Us heading should be match");
    }
    @Test
     void testeleventhParaContent() {
        loadHomePage(); 
        WebElement paragraph = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/p[11]")); 
        String expectedParagraph = "If you have any questions or concerns about these Terms and Conditions, please contact us at:\n"
        		+ "\n"
        		+ "\n"
        		+ "Email: [support@jazzshow.com]\n"
        		+ "Phone: [123-456-7890]\n"
        		+ "\n"
        		+ "Thank you for using JazzShow. We appreciate your commitment to adhering to our Terms and Conditions.";  
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
    




    @AfterEach
    void tearDown() throws Exception {
        if (driver != null) {
            driver.quit();  
        }
    }
}
