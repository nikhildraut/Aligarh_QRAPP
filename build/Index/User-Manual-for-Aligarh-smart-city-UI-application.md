[User Manual for Aligarh smart city UI application - Overview-1.pdf](/.attachments/User%20Manual%20for%20Aligarh%20smart%20city%20UI%20application%20-%20Overview-1-2ecd2c5d-58b6-4669-bd9e-382d396b871f.pdf)

# User Manual for Aligarh Smart City UI Application

## History


| No |Version  |  Description | Date  |Prepared By  |
|--|--|--|--|--|
| 1 |1.0  | Aligarh user manual | 27/01/2023 |  Ankit Shukla|
|  |  |  |  |  |

##  Contents:-
**1.  Register........................................................01**

**2.  Login Page..................................................01**

**3.   Admin..........................................................02** 
   
- 3.1    Device disjoining.....................................02 
  
-    3.2   Send custom command .......................02

-    3.3 Internet connection ................................02  
 
    
- 3.4  Date time configuration..........................02

    
- 3.5
  Gateway configuration.............................03

##   ****4.** Auto commissioning....................................03**
## **5.Manual commissioning.............................. 04**

## **6.   Test.........................................................05** 
    
- 6.1 Test individual light...................................05
 
-    6.2 Test group controls...................................06

-    6.3 Test system ports........................................07






   ##1. Register
   -    <p>This phase is under development.</p>
   ##       2. Login Page
   - This phase is also under development.
   ##     3. Admin
   -    Administrators support the smooth running of offices by carrying out clerical tasks and projects. As an administrator in the construction industry, you could be organizing project meetings. You'd be typing up documents, responding to business enquiries, drawing up contracts and providing customer service.
   In admin panel, there are 5 functionalities are described-
        
            3.1 Device disjoining 
            3.2 Send custom Command 
            3.3 Internet connection 
            3.4 Date and time configuration 
            3.5 Gateway configuration
   -    ###    3.1 Device disjoining-
   -  ###                       3.2 send custom command-
   -   ###       3.3 Internet connection-                  
          <p>Manage Internet connectivity on the RTU Device. Internet Turn Off feature would impect the cloud connectivity.</P>

### ![e.png](/.attachments/e-8525a033-94a6-4387-9a2d-7709df400b41.png) 
- 3.4 To check RTC: 
                                                           
  <p>                                                           
                                                            
   -    Open local RTU application at localhost: 5000 go to admin and then Date Time Configuration  

![a.png](/.attachments/a-a6920276-a615-4a79-a23f-846873197e83.png)
- After opening this page it should prompt for entering of date and time if you receive error it means RTC is not properly working, 
![b.png](/.attachments/b-e5711de7-9b56-498b-a5b1-1669803732d4.png)

- Note: also remove dongle and then restart RTU after 10 mins to check whether RTC is functioning properly or not.
         
- ###         3.5 Gateway configuration 

   The gateway configuration file that is used for connection to ThingsBoard platform instance and enable/disable connectors. This configuration points to ThingsBoard instance thingsboard.cloud and uses memory file storage configured to store maximum of 100,000 records. There are 4 different connectors active. If you like to use only one of them - just remove all other connectors.
![c.png](/.attachments/c-749ceeef-cf05-4a29-be7f-f103c1556575.png)
## 4. Automatic Commissioning-
##  

-    The primary goal of commissioning is to ensure a building and its systems meet the owner's project requirements. 
- This includes, but is not limited to, the following commissioning goals: To deliver a building or facility that performs according to its design intent and meets the owner's project requirements. 
- This type of commissioning perform automatically.![h.png](/.attachments/h-ac280533-00aa-4eb0-b5ba-495300235043.png)
## **5.** Manual commissioning:
- In the lighting industry, the term “commissioning” is often applied to lighting control system activation, or factory start up, in which a manufacturer representative calibrates installed controls as a service.
- It may also be used to describe functional testing. Here commissioning perform manually. 
![a.png](/.attachments/a-f8728770-244e-48d3-a518-1557eda58ee1.png)
## **6. TEST**
##   6.1 Test individual light-                                  
-  <p> Here we will perform execution (operation) on a particular (single) light.</P>
 

![d.png](/.attachments/d-b11baa8d-4047-4d4a-b881-dc4ffbd30d92.png)
## 6.2 Test group control-
- In group Control, we will divide lights in to different groups. Here, we will perform operations in to group of lights with the help of Single input.

![e.png](/.attachments/e-50769fe3-3ff7-46ea-8080-7e93fd464974.png)
## 6.3  To check System ports:                                  
-   open below page and click on read status it will tell the connectivity 
Status of all the system ports required.
![f.png](/.attachments/f-6e2c4190-a328-49f8-b67d-ee22b68031ba.png)




 



