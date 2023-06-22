# Quiz India

Quiz India project is developed with idea of creating a website for people fun and let them discover how much you know about a beautiful, historical rich, culturally diverse country called INDIA. The website contains a game that have 3 levels 'Easy', 'Medium' and 'Hard'. Each level consist of 5 unique questions about India. When the user give correct answer of a question it will add 10 points to the users score. Whereas for every incorrect answer the user will loose 5 points. By default, the game will start from 'Easy' level. But the user have option to choose either 'Medium' or 'Hard' difficulty levels as well. There is no limit how many times a user can restart this game or a level of game.

# Table of contents

- [Quiz India](#Quiz India)
- [Table of contents](#table-of-contents)
- [Design](#design)
    - [Text \& Background color](#text--background-color)
- [Features](#features)
  - [Common Features](#common-features)
    - [Languages Used](#languages-used)
    - [Navigation](#navigation)
    - [Footer](#footer)
  - [Home Page](#home-page)
    - [Main Image](#main-image)
    - [Home Page](#home-page-1)
    - [Attractions Page](#attractions-page)
    - [Contact Us Page](#contact-us-page)
    - [Confirmation Page](#confirmation-page)
- [Testing](#testing)
- [Validator Testing](#validator-testing)
    - [HTML](#html)
    - [CSS](#css)
    - [Lighthouse](#lighthouse)
- [Unfixed Bugs](#unfixed-bugs)
- [Libraries \& Programs Used](#libraries--programs-used)
- [Deployment](#deployment)
- [Credits](#credits)
- [Content](#content)
- [Media](#media)
    - [Images](#images)
    - [Google Map](#google-map)

# Design

### Text & Background color

Indian national flag have 3 main colors as Orange, White and Green. Hence, color them of my website is to based upon Orange, White and Green colors contrast. We have choosen background color a page cosist of blend of these 3 colors similar to the flag have have Orange at top, White in the middle and Green at the bottom. The main area is kept as light blue to support text in Orange for headers and paragraps in green color. Buttons on Index.html and Quiz.html page has Green colored background with Options having Orange colored background. When a user hover over the button some effects have been added with additional use of Voilet color. Try again button on results page have Green colored background whereas the link to restart the quiz is in voilet color background with some effect when user hover over the button. The text on results page consist of brown color with all fields that are dynamic like username, score and correct answer for total question in Green color.

# Features

## Common Features

### Languages Used

- HTML5
- CSS3
- JavaScript

### Navigation

In my website I've 2 pages but the navigation for them is allowed only 2 ways.
- 1st after clicking on 'Start Quiz' button on index.html page.
- 2nd option is after clicking on 'Select different level' button under result message on quiz.html page.
There also a way to go back on quiz.html page when a user click on 'Try again!' button under result message.

## Home Page

### Landing Page

A Main page consist of information about the quiz and rules about how the scores calculations will be performed. This page also has an input box, where the user has to enter its name, along with 3 options ('Easy', 'Medium' and 'Hard') level of difficulty of quiz to choose from. Once the user clicks the 'Start Quiz' button the user will be routed to next page where the question will be displayed.

![Main-Image](assets/images/mainimage.jpg)

### Quiz Page

This page 2 features explained below.

- **User Info Section** : This section display the Username, difficulty level of the quiz choosen by user and current score of user. 
- **Question & Answer Area** : This section displays one question at a time with 4 options to user. Out of 4 one option has correct answer and 3 incorrect. Once user select an option and click on 'Submit' button. The quiz move to next question with 4 options with respect to that question and the cycle continues. If the user has answered correctly then the score will be updated with +10 points. But, if the users answers incorrectly the score will updated with -5 points. If the user try to click on Submit button without selecting any option an alert message will be shown to user to select any one option to move forward with quiz.
- **Results Message** : 

![About-City](assets/images/whyamritsar.jpg)

### Results Message

Once all 5 questions were answered by user. Then the result message will be displayed to the user. In this message user will get information like how many correct answers he has given and total score he has socred based upon calculation described above.

![Attractions-1](assets/images/attractions1.jpg)

# Testing

The site has been tested on a variety of mobile devices (iphone (iOS), OnePlus(Android)) as well as different web browsers (Chrome, Internet Explorer, Safari) and all links, information about quiz, questions & options has functioned as it should. All input fields and options are required to be filled/clicked by the user before submitting.

I personally tested the site extensively with Google Chrome dev tools to ensure the site works responsively not only on mobile devices but also on medium to larger screens.

One of the biggest problems I encountered from the beginning handling css on different webpages. Then I took help from Love Math project as well as w3school and stackoverflow websites (mentioned in credits as well).

Applying media queries has been the biggest challenge during this project.

Some improvements are done on different HTML pages after testing them on W3C Validator.

# Validator Testing

### HTML

No errors were returned when passing through the official W3C validator.

![HTML](assets/images/w3cvalidatorresults.jpg)

### CSS

No errors were found when passing through the official W3C CSS (Jigsaw) validator.

![css](assets/images/cssvalidatorresults.jpg)

### Lighthouse

The page achieved great performance on mobile and desktop.

- **Desktop**:
  
  ![Desktop](assets/images/lighthousereportdesktop.jpg)

- **Mobile**:
  
  ![Mobile](assets/images/lighthousereportmobile.jpg)

# Unfixed Bugs

I've struggled with Media queries and how to handle website on different devices. This website currently looks great on desktop borwsers but have issues with alignments on other media devices.

I will try to improve further on this in coming days and considering it as a challenge to handle.

# Libraries & Programs Used

- **Github**: Store Repository
- **Codeanywhere**: Create the html and css files
- **Google Chrome Dev Tools**: To aid the initial styling for media queries and testing at various screen sizes
- **Microsoft Edge**: Site testing on an alternative browser
- **Snipping Tool**: To take screenshot for images of various results
- **Am I Responsive**: To ensure website looks good on different devices
- **W3C Validator**: To validate HMTL pages
- **W3C CSS Validator**: To validte CSS

# Deployment

The site is deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, select the amritsar-tourism project from left pane 'Top Repositories' section
- Click on Settings tab in navigation menu.
- Select the 'Pages' tab in the 'Code and Automation' section.
- From the Build and deployment section, go to source and select 'Deploy from a branch' in drop-down menu.
- Next select the 'Main' branch under Branch drow-down menu.
- Once the 'Main' branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
- The live link for the site can be found here - [/sugandhi13.github.io/amritsar-tourism](https://sugandhi13.github.io/amritsar-tourism/)

# Credits

I have really enjoyed the Code Institute course up till now, and I am looking forward to the next units of the course. I wanted to thank the Slack Community for their support learning the content and my Mentor Martina for her guidance with this project and assurances that creating a website is not as scary as I initially thought.

As a starting point I looked at the Coders Coffee and Love Running projects.

- From the Coders Coffee Project, I got understanding of how to use Codeanywhere and GitHub to develop website.
- From the Love Running Project, I took inspiration for the header, hero banner, footer and form.
- Wikipedia and Punjab Tourism websites, I have referred these website to create content on my website.

# Content

Following websites have been referred to generate the content on Home page along with some sentences included/modified by me to best fit in websites context.

- [punjabtourism.punjab.gov.in](https://punjabtourism.punjab.gov.in/destination-amritsar.php)
- [wikipedia.org](https://en.wikipedia.org/wiki/Amritsar)
- [indiahotels.com](http://www.indiahotels.com/amritsar/amritsar-culture.html)

# Media

### Images

Various websites are referred to collect images used in this website. Original source links can be found below.

- Main Image - [holidify.com](https://www.holidify.com/places/amritsar/sightseeing-and-things-to-do.html)
- Gobindgarh Fort Image - [holidify.com](https://www.holidify.com/places/amritsar/gobindgarh-fort-sightseeing-120918.html)
- Confirmation Page Image - [historypak.com](https://historypak.com/punjabi-culture-2/)
- Ram Tirath Image - [ffo.gov.in](https://ffo.gov.in/locations/location-information/69)
- Maharaja Ranjit Singh Muesum Image - [mouthshut.com](https://www.mouthshut.com/product-reviews/Maharaja-Ranjit-Singh-Museum-Amritsar-Photos-925078676)
- Sadda Pind Image - [googleusercontent.com](https://lh5.googleusercontent.com/p/AF1QipP6i60UYzdaQdFCtZVGE9TcA-7UzIQUYu8YjXRw=w600-h321-p-k-no)
- Durgiana Temple Image - [googleusercontent.com](https://lh3.googleusercontent.com/proxy/kcFhudzDfjqLkTJbn-SGOG-50LFYbPNc3HZoYVAjLY442AyfMRXRlicCZyBHK2mlF8K9zPG-JafBTyOhTu4HWQjvv-cImvv_xTvNkBZXCQcbxGZ-grX7Vm-hq5WHR-n5a5ruIT740JhPa6k2sB_u2gobanyMOg=s680-w680-h510)
- Some Images on Attractions Page - [fabhotels.com](https://www.fabhotels.com/blog/historical-places-in-amritsar/)

### Google Map

Google Map API is created and used from Google maps.

- Google Map API - [maps.google.com](https://goo.gl/maps/g1H9qGUC1iNNKUoq8)