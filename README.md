# ClubMouse
Hello, This is our group Club Mouse. Our members are: 
1. Nathan Gallagher
2. James Letien
3. Bach Truong
4. Krisna Bou
5. Henry Lin
6. Anthony Longhurst


# Plan-it
Plan-it is our project for this DECO3801 class that we have developed throughout a mobile application that improve the sleep schedule for insomnia patient.
It was built on React Native and Node JS. The database is stored at PHPMyAdmin and access via PHP codes. For the features of the app, it consists of a login and signup system which allows users to manage their individual accounts
and provide a more dynamic functionality for the application. In addition, it has a calendar system so that users can keep track of their input time as well as 
input their desired time slots. The application also have an achievement page which illustrates all the available achievement they can obtain while interacting with the app.
Depending on the achievement they received, the world (located in the home page) will render different characters (dog, cat, plants, etc). User can build their own world 
by successfully complete the achievements. 

# How to install 
1. Install React Native via https://reactnative.dev/docs/environment-setup
2. After getting the codebase ready, run "npm install --force" to download all relevant libraries imported throughout the codebase
3. Run "expo start"
4. Use the actual phone to scan the QR provided after the expo start command was run. In Android, download Expo Go app in Google Play and scan it via the app. 
In IOS, use normal camera to scan the QR code

# How to use
After scanning, it will lead to the welcome page. In order to login, let's sign up first. After signing up, the next page is Home Page with the world rendered with sprites on it.
Use the navigation bar located at the bottom of the app to move between the screens. There are 4 screens: Home Screen, Calendar Screen, Achievement Screen and Profile Screen.
In the Calendar Screen, there is an "+" button at the bottom right corner. This is used to add entry. Please BE AWARE that it needs the users to input everything to store
in the database otherwise it will alert. To select the date and time, press on the word "Date select" or "Time select". 
After adding an entry, it will prompt a message to announce that the insertion is saved. Please press on the date again to allow the calendar page the load and update the query.
After that, it will show all the entries for the next 7 days. 
