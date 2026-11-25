Feature: Login functionality 


Scenario: Verify login with Valid credentials 
  Given User Launch the Application 
  When  User enter username "Admin" and password "admin123"
  And User clicks on login button 
  Then User should be navigated to dashboard page 

  
Scenario: Verify login with Valid Username and Invalid Password 
  Given User Launch the Application 
  When  User enter username "Admin" and password "eiugfnkiergfv"
  And User clicks on login button 
  Then User should get Login error Message 

Scenario: Verify login with InValid Username and valid Password 
  Given User Launch the Application 
  When  User enter username "ghvyerhbfiu" and password "admin123"
  And User clicks on login button 
  Then User should get Login error Message 

Scenario: Verify login with InValid Username and Invalid Password 
  Given User Launch the Application 
  When  User enter username "ghvyerhbfiu" and password "jherbgfj3rwhb"
  And User clicks on login button 
  Then User should get Login error Message 