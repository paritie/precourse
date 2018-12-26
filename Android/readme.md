Overview of Android Operating System.

Android is an operating system maintained by Google that majorly power mobile devices. As a mobile developer, you are face with alot of options when setting out on a practice exercise or a paid job.

Some of those options include your tools. These tools include Android Studio; which is a type of application called an IDE. An IDE, Integrated Development Environment, is a single application that is made up of all of the tools required to write a program or application. IDEs will usually include at least the following components, a Code Editor, Build Automation Tools, a Debugger and additional quality of life features. IDEs are usually specialized so they can provide the tools for a specific coding environment. Android Studio is designed to build Android apps, you wouldn’t usually use it to write a Java applet or a web server. Xcode is designed to build iOS and macOS apps. There are other IDEs that are designed to work with other specific languages or platforms.

Android Studio is provided by Google for free and is built upon Jetbrains’ intellij platform. To see the variety of IDEs out there, you can go to jetbrains product page here https://www.jetbrains.com/products.html. Android studio will help us download and manage Android libraries, build empty android apps, manage all the complicated requirements of those apps, and compile and run apps on android virtual devices as well as on physical android devices.

##Editing User Interfaces with XML (Extensible Markup Language)

A user interface component has an XML side and a Java side, we need to build both and then connect them in order to manipulate them with our code and show them on the screen. This is best done with the ID which the developer defines when they create the component in the xml. In the Java side, we create a data member of the same type as the component. We then use the ID to find the component on the XML side and assign it to out data member container. Now, when we manipulate our data member, we will see the results on our user interface.

##How Android allows applications to respond to user interaction

When a user interacts with an interface component, it sends a message to the app that acts as a starting pistol to anything you have assigned to listen for that specific message

After creating a data member for the User Interface component, we attach a listener to it to listen for the event message that we have assigned to it When that message is received, the listener executes the code that we have written for it

##Learn to use debugging and logging tools to find and correct bugs

Sometimes our code doesn’t run as expected. Code always does what you tell it to but it may not always do what you expect it to. For this reason, IDEs have many tools to allow us to check the status of our apps even when the UI hasn’t been updated yet.

Add a log line to the listener to log when the click event occurs. Also make sure they understand that this doesn’t interfere with the normal execution of the application. Then add a break point to that line to pause execution on that log line. Identify the debugger and what the major buttons do. 

##Learn to make code changes that drive the application user interface

The User Interface is how we communicate with the user and how they communicate back. Much thought goes into the design of the user interface some people spend their entire careers designing them. We’ll be touching on principles of design here and there throughout the course and much of what we’ll do is manipulate and react to what happens on the user interface. Now that we have the infrastructure in place, we can make changes in our user interface.

##Checkout the instruction to submit the task for this Android track in the homework folder