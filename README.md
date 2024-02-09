# Naming Reason

"Lingua" is a Latin word that means "language" or "tongue." It is often used in English to refer to language-related concepts, such as in the term "linguistics," which is the scientific study of language and its structure.

# file introduction
1. node_modules = it contains different types of dependencies.
2. package-lock.json = exact versions of different dependencies
3. postcss.config.js == used for tailwind css framework
4. tailwind.config.js = used for configuration of tailwind css framework
5. vite.config.js = used for configuration of vite
6. index.html = it calls main.jsx
7. firebase folder = firbase.config.js = it contains all authentication information

<!-- -------------------- Technologies ----------------- -->
1. Uses [tanstack-query] or [react-query] 
2.  Used [react-hook-form]

<!-- -----------------------------Existing Features of the Website ------------------------- -->
1. Navbar and Footer on all the pages except on the 404 page. 

2. Footer
Including website logo or name or both, copyright, some contact information, Address etc.

3. Navbar
a navbar with the Website logo or Website name, Home, Instructors, courses, Dashboard and User profile picture, sign out button or join us button. The user profile picture and sign out button or join us button are conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the 'Join Us' button.

4. Error Page
it contains a 404 page. Added interesting image & a back-to-home button on the 404 page.
Not added header & footer in this page.

5. Registration(Sign Up) & Login(Sign In) System:
    Login / Sign In Page:
    When a user clicks on the Dashborad navlink or course Details button, they will be redirected to the login page having the following:
    - Email
    - Password (This field can hide/unhide the password by clicking on an icon)
    - A user cannot submit empty email and password fields.
    - A link that will redirect to the registration page
    - At least one social login (Google)
    Registration / Sign Up Page:
    The Registration page will have the Email/Password form having the following fields:
    - Name
    - Email
    - Password
    - Confirm Password (TODO: Future Features)
    - Photo URL
    - At least one social login (Google Login)
    TODO: Future Features
    - Gender
    - Phone Number
    - Address
    
TODO: Future Feature -- enforce forget password feature and  the email verification method

TODO: Future Features
Error for Registration system:
On the Registration page, display errors when:
The password
- is less than 6 characters
- don't have a capital letter
- don't have a special character


6. Homepage:
    - Top Slider Section  Will have a relevant slider. Use relevant text, information, message, and picture. The design is entirely up to you.
    - Popular Courses Section  Show relevant pictures related to the Courses or activities. Have the top 6 Courses based on the number of students.
    - Popular Instructors Section. Show the top 6 instructors based on the number of students in their course. 
    TODO: Future Features
    Future Features:
    - Extra Section Add one relevant sections. will Make it attractive :heart_eyes:. Try to use animation effects.

7. Instructors Page:
Display all the instructors. Each Instructor will be:
   - Image
   - Name
   - Email
TODO : FUTURE FEATURES
   - Number of Courses taken by the Instructor. 
   - Name of the Courses taken by the Instructor. 
   - `See Courses` button to show Courses by this Instructor. This will take to a new link
   - PAGINATION - will be applied

8. Courses Page:
Show all approved Courses on this page. Each course will have the following:
   - Image
   - Name
   - Instructor name
   - Available seats
   - Price
   - Details Button. If the user is not logged in, then tell the user to log in before selecting the course. 
   - The course card background will be red if the available seats are 0.
   TODO: Future Features
   - This button will be disabled if:
        - Available seats are 0
        - Logged in as admin/instructor
   

9. Student Dashboard:
    It will be private & only a student can access this route.
     - My Selected Courses: The student will see all the Courses they booked after clicking the 'Add to favourite' button. It will display the relevant information on the course, Delete, and Pay buttons. On clicking the Delete button, a student can remove a selected course from the list.
     - My Enrolled Courses:  Show all the Courses a student selected after successful payment.

10. Payment: (Student Dashboard)
    Partial Future Features
    - Pay button Action: Upon clicking the Pay button for a course on the My Selected Courses, the student will be redirected to the payment page to finalize their payment. After a successful payment, the Available seats for the particular course will be reduced by 1. The course information will be shown on the My Enrolled Courses page and removed from the My Selected Courses page.
    TODO: Future Features
    - Create a payment history page for students. It will show the payment made by that student. Make sure to sort the payment history descending. The newest payment will be at the top

11. Instructor Dashboard:
It will be private & only an instructor can access this route.
Add a course: This page will have a form with the following fields:
        - course name
        - course Image
        - Instructor name (read-only) (use the displayName value of logged in user/instructor)
        - Instructor email (read-only) (use the email value of logged in user/instructor)
        - Available seats
        - Price
        - Add button
        - When creating a course on the database, the value of the status field will be pending.

 My Courses:  Show all the Courses an instructor has added after clicking the Add button from the Add a course page. Each course will show relevant information, including pending/ approved/ denied status. 
 Total Enrolled Students: Initially it will be zero. If any student has successfully booked the course, show the total number of students.
 TODO: Future Features
 Feedback & Update button.
  Feedback: 
- There will be no feedback if the course is in pending or approved status.
- If the course is in the denied state by the admin, at that time, an admin can write feedback explaining why the course was denied, which will appear in the feedback column.

12. Admin Dashboard:
It will be private & only an admin can access this route.
Manage Courses: This page will show all the Courses. All the Courses added by the Instructor from the Add course page will be displayed here. Show the following information: course Image, course name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback (Future Features)).
        
Note: By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.
Note: If the admin clicks the Deny button, the status will be updated to denied. The Deny and the Approve button will become disabled. 
TODO: Future Feature
Note: A modal will be opened When the admin clicks the send feedback button. Admin will write the approved/denied reason in a text field and send it to the Instructor. You can also do this in another route except for the modal.

Manage Users:  The admin can see the relevant information of all registered users. By default, everyone will be a student. And there will be 2 buttons: Make Instructor button and Make Admin button. If a user clicks any of the buttons, disable it.
Make Instructor button Action: Update the user role as an instructor.
Note: If the admin makes a user instructor, that user profile page will have the Instructor as the role
Make Admin button Action: Update the user role as an admin.

<!-- TODO: Future Features -->
1. Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website.
2. will be used Axios for at least two calls.
3. will be Used the Environment variables both on the client side & server side.
4. wil be Implemented JWT token for Login and Registration systems (Email/ password & social login). I will send the token for the Dashboard routes and verify the user.
5. add an intro video button in each course information; clicking on this button will open a modal that will play the video.
6. Add a button on the Instructor called see Courses. After clicking on an instructor's See Courses button, a student can see all the Courses taken by that Instructor. Only Courses approved by the admin will be displayed here. If any Courses of the Instructor are in the pending/ denied status in the Instructor's dashboard, then they will not be shown here. 
7. Following Feature A student will see all instructors he/she is following after clicking the Follow button on the Instructors page. Also, after clicking on the Follow button, show an Unfollow button. On clicking the Unfollow button, a student can unfollow an instructor, and the Instructor will disappear from the following page.
8. Profile page will be private:
On clicking the user profile picture, the user will be redirected to the Profile page, where they will see all the information:
    - Name
    - Image
    - Email
    - Phone Number
    - Address
    - Role(Instructor/ Student/Admin)
    - Gender
    - Update button
    Update Action: a user can update their information except role and email on clicking the Update button.
9. Manage Students: On the Manage Courses, there will be a button called show students. Clicking on that link will take an admin to a route where the admin will see students for a particular course. An admin will be able to kick out a student from a course. 

