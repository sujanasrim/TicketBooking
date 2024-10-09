package JS;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class CX_INPUT {
	
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
        driver.get("http://localhost:3000/CustomerInput");  
    }

    @Test
    void testMandatoryNameField() {
    	loadHomePage();
        
        WebElement submitButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        submitButton.click();
        
        WebElement nameField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[1]"));
        String validationMessage = nameField.getAttribute("validationMessage");
        
        String expectedMessage = "Please fill out this field."; 
        assertEquals(expectedMessage, validationMessage, "The validation message for the 'Name' field should appear.");
    }

    @Test
    void testMandatoryAgeField() {
        loadHomePage(); 
        
        WebElement submitButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        submitButton.click(); 
        
        WebElement ageField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[2]")); 
        String validationMessage = ageField.getAttribute("validationMessage"); 
        
        String expectedMessage = "Please fill out this field.";
        assertEquals(expectedMessage, validationMessage, "The validation message for the 'Age' field should appear.");
    }
    
    @Test
    void testAgeFieldShouldBeGreaterThan18() {
        loadHomePage();
        
        WebElement ageField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[2]"));
        ageField.clear();
        ageField.sendKeys("17"); 
        
        WebElement submitButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        submitButton.click(); 
        
        String validationMessage = ageField.getAttribute("validationMessage"); 
        
        String expectedMessage = "Value must be greater than or equal to 18.";
        assertEquals(expectedMessage, validationMessage, "The validation message for the 'Age' field should indicate age must be greater than or equal to 18.");
    }

    @Test
    void testMandatoryPhoneNumberField() {
        loadHomePage();  
        
        WebElement submitButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        submitButton.click(); 
        
        WebElement phoneNumberField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[3]"));  
        String validationMessage = phoneNumberField.getAttribute("validationMessage"); 
        
        String expectedMessage = "Please fill out this field.";
        assertEquals(expectedMessage, validationMessage, "The validation message for the 'Phone Number' field should appear.");
    }

    @Test
    void testPhoneNumberMustBe10Digits() {
        loadHomePage();  
        
        WebElement phoneNumberField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[3]"));  
        phoneNumberField.clear();
        
        phoneNumberField.sendKeys("123456");  
        
        WebElement submitButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        submitButton.click();  
        
        String validationMessage = phoneNumberField.getAttribute("validationMessage");  
        
        String expectedMessage = "Please enter a valid phone number.";  
        assertEquals(expectedMessage, validationMessage, "The validation message should indicate the phone number must be 10 digits.");
    }

    @Test
    void testAgeProofAttachmentRequiredForAgeGreaterThan18() {
        loadHomePage(); 
        
        WebElement ageField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[2]")); 
        ageField.clear();
        ageField.sendKeys("18");
        
        WebElement submitButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        submitButton.click();
        
        WebElement fileUploadField = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/input[@type='file']"));
        String validationMessage = fileUploadField.getAttribute("validationMessage");
        
        String expectedMessage = "Please select a file."; 
        assertEquals(expectedMessage, validationMessage, "The validation message for the 'Age Proof' file attachment should appear when age is greater than 18.");
    }

    @Test
    void testDoPaymentButton() {
        loadHomePage();
        
        WebElement doPaymentButton = driver.findElement(By.xpath("/html/body/div/div/div/div[2]/form/button"));
        doPaymentButton.click();
        
        String currentUrl = driver.getCurrentUrl();
        String expectedUrl = "http://localhost:3000/PaymentPage";
        assertEquals(expectedUrl, currentUrl, "The page should redirect to the payment page after clicking 'Do Payment'.");
    }

    
}
