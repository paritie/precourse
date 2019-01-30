# User Interface Project Week
You are to treat this week as if you are working as a front end developer at a web development agency. The instructor is the owner of the agency and is under pressure from the client to deliver the product, a custom marketing website, on time. The project managers are acting as your supervisors.  

This week you will be building a website for an architectural firm named Smith and Jones Architects.  Smith and Jones have requested a minimum viable product to deliver to their board of directors by the end of the week.  The requirements are listed below under **MVP Features**.  Smith and Jones also have a wish list of extra features they would love to showcase to the board if you can get them done.  You will demonstrate your work to the agency owner Thursday afternoon.  

You will use Trello to report your progress on the MVP and any extra features you accomplish to your project managers every day during standup. This project is meant to be worked on by yourself.  Do not pair program this week as this challenge is meant to show you where you can improve and what you have learned on your own.

## Pro Tips For This Week:
- Use past solutions from the previous weeks to accomplish harder tasks
- Commit every time you accomplish any new functionality or layout. Get in the habit of frequent commits so you have a record of your work.  Push up your commits every day to showcase your progress to your PM
- After 20 minutes of being stuck on something, reach out to your PM
- Don't overplan, start coding as soon as you can and adjust accordingly.  Trello is there as a guide not as a distraction

## Trello Set Up:
* [ ] Create a [Trello account](https://trello.com/)
* [ ] Create a new public board called "S&J Architects - By Your Name"
* [ ] Create lists titled ```backlog```,```To Do```, ```In Progress```, and ```Done```
* [ ] Fill in the ```To Do``` list with the MVP features listed below
* [ ] Fill in the ```backlog``` list with all the extra features listed below
* [ ] Share your board with the Project Manager(@namdi2 on trello) that has been assigned to you. 

## Assets Provided:
* [Style guide:](/DesignFiles/style-guide.md) This file will help you identify font sizes, colors, and font families across the site.
* [Images for both desktop and mobile](/img).  Mobile images have been provided to match the design files.
* Content has been provided on each page inside of comment tags
* [Design Files](/DesignFiles) have been provided as guides for what the pages should look like on desktop and mobile.  Ignore tablet until you get MVP done.

## MVP Features:
These MVP features represent the fundamental knowledge you should have obtained throughout the last 4 weeks. 

* [ ] Build layout **HTML/LESS**: [Home page desktop design](/DesignFiles/Home/home-desktop.png)
* [ ] Build layout **HTML/LESS**: [Home page mobile design](/DesignFiles/Home/home-mobile.png)
* [ ] Build layout **HTML/LESS**: [Services page **desktop design only**](/DesignFiles/Services/services-desktop.png)
* [ ] Build layout **HTML/LESS/JavaScript**: [Navigation system design](DesignFiles/Navigation)
	* [Non-expanded View Design](DesignFiles/Navigation/non-expanded/non-expanded.png): When the navigation is not active, it should be fixed to the top of the page at all times
	* [Expanded View Design](DesignFiles/Navigation/expanded): When a user clicks on the navigation icon a full page overlay will pop over all the content on the page. The navigation icon will be replaced by a close icon. The user must click the close icon to return back to browsing the website. The home and services pages need to be linked together using `<a></a>` tags. You must use your own custom JavaScript for the opening and closing functionality, no bootstrap allowed for functionality on this feature
* [ ] Build Custom Component **HTML/LESS/JavaScript**: [Services page tab navigator design](/DesignFiles/Services/tabs)
	* [Using the assets provided](/img/services), you must build the tab navigator using your own custom JavaScript component, no libraries allowed on this feature. You are encouraged to use code from previous weeks to accomplish this feature

Once you have accomplished the required MVP features, **reach out to your project manager for approval to work on extra features of your choice**.  This project does not end at MVP.  Try to get as many extra features into your project as you can before the demonstration!

## Extra Features:
Extra features are not in order of importance, it's just a list of features the client wishes they could have by the demo.  Pick in any order you wish.
* Build layout **HTML/LESS**: [Services page mobile design](/DesignFiles/Services/services-mobile.png)
* Build layout **HTML/LESS**: [Contact page desktop design](/DesignFiles/Contact/contact-desktop.png)
* Build layout **HTML/LESS**: [Contact page mobile design](/DesignFiles/Contact/contact-mobile.png)
* Make tablet look good if you haven't already
* Create 2 more pages named "About Us" and "Projects".  Be creative on what kind of content you would put in there but match the heading layout of the services/contact us pages.  Be sure to add the new pages to the menu system as well.  Ideas for creativity: create a carousel showcasing all of the projects.  Use [pexel.com](https://www.pexels.com/) to get free images to create custom content around an architecture/building theme.  For the about us page, you could make a list of employees that work there and showcase credentials.  Make heavy use of lorem ipsum, don't waste time on content creativity at this point
* Use [Greensock](https://greensock.com/gsap) to add animation to the menu system when it opens and closes
* Build a custom carousel with your own components and use it throughout different pages on the site
* Take a look at [Vue.js](https://vuejs.org/v2/guide/) and see if you could implement some simple JavaScript examples in your site from their tutorials
* If you have experience with [React](https://reactjs.org/tutorial/tutorial.html), see if you could convert the site into a single page app instead of a multipage app by creating routes and components
* Incorporate animations on scroll events so that when users scroll through the site, content animates in or out of view
* Host your site on a domain you own

Remember: This is a self driven challenge, try to accomplish MVP as soon as you can and stretch as much as you can on extra features.  Have fun with this and remember to reach out to your project managers after the 20 minute rule.  Good luck!