# Android Layouts

This project will help you practice new skills and concepts you have learnt along the way. For this project you'll build a single page app that will display static content (content that is hard coded and doesn't change). This content will consist of an image and a dozen or so components. Use a combination of all the Viewgroups that we discussed to layout the page in a way that you see fit.

> You can use a personal bio for your source of data or use an entry from a publicly available dataset.  
> Some examples include:  
> + [Nasa Images](https://www.spacetelescope.org/images/heic1501a/)  
> + [Movies](https://www.themoviedb.org/movie/637-la-vita-bella)  
> + [Videogames](https://www.igdb.com/games/the-legend-of-zelda-ocarina-of-time)  
> + [TV Shows](https://www.thetvdb.com/series/stranger-things)  

## Create an Android Studio Project

1. Create a new Android project
2. Name the project "Layouts"

## Add UI Elements to activity_main.xml

1. Select half a dozen pieces of data from your entry.
2. Save an image from your entry to your app's `app\src\main\res\drawable` directory.
2. Decide how you want your data to be arranged and what will go in your scrollview.
> Keep in mind the aspect ratio of your image and other images from your dataset when deciding 
3. Open the app's activity_main.xml file.
4. Add components for each of the pieces of data you have selected. As well as components for labels as necessary
5. Fill in the data from your entry.

## Hints
+ A scroll view can only have one child, but that child can have as many children as you want.  
    - You can nest view groups to make multiple components behave as one to the parent group.  
+ Image Views can be tricky be sure to include the following attributes to make things easier for you.
    - `android:src="@drawable/FILENAME_WITHOUTEXTENSION"` - use this to add your image, if the image is in the right place, intellisense will suggest the name to you.  
    - `android:scaleType="fit"` - use this to set how your image should scale, play with the suggested options.  
    - `android:adjustViewBounds="true"` - this will prevent white space around your image.  

## Build, Run, and Test Your App

1. Build and run your app using your preferred testing environment.
2. Enter various words, including those you know are in your synonyms directory, and others that aren't into the text field and make sure the synonym listing works.

## submission

Create a pull request with your submission in the layouts homework folder

## Bonus

If you finish and want another challenge, add the data from your entry programatically.

## Hints
+ be sure to add ids to all the components you wish to change programatically
+ use the code `COMPONENT.setImageBitmap(BitmapFactory.decodeResource(context.getResources(),R.drawable.FILENAME_WITHOUTEXTENSION));`
    - This will pull an image file from your drawables directory, decode it to a bitmap image and display it in your GUI where your imageview component is.

