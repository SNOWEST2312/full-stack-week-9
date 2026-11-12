- Today:
    - Setup a basic React project
    - Use Parcel to package the code for our React application.

- React: JavaScript front-end framework with many features - gives us a way to render HTML elements and place them in the DOM - build user interfaces that run in the browser. Similar to assignment 2
- Parcel: is a helper application that takes all our JavaScript files for the React application (there could be many) compiles them into one single, compressed JavaScript. Minify (makes it smaller, easier to transmit, only a single HTTP request to transmit)
- Our project will two parts:
    - Express: server that serves our React application files to the client.
    - React: a source code for our React application, which will be packaged by Parcel and given to the Express part of the application to be sent to the client.