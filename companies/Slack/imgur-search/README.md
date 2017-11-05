## No 3rd Party Libraries Used

Although this project was originally bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app)
(and then ejected), I made sure to NOT use React, jQuery, lodash or any 3rd party libraries as 
instructed. Although there could be config settings in the webpack config file, no 3rd party 
libraries were included in the production build.


## NPM (or yarn) Scripts

```
$ npm start # starts dev server with HMR on localhost:3000
$ npm build # build production
$ npm test # run unit tests with Jest (watch changes and rerun test)
```


## Lightbox Layout Credit

The lightbox UX design was inspired by the open source project [lightbox-2](http://lokeshdhakar.com/projects/lightbox2/).
Many HTML, CSS were modified from the design of Lightbox2. I have also copied and used the
images for buttons. **However, no JavaScript code was copied or used**.


## Design and Technical Decisions

### Imgur API
I chose to use the Imgur API v3, because it allows basic fetching from client with minimum 
authentication so that I did not have to set up a server as proxy.

### Search and Infinite Scroll
I added searching and infinite scroll to make the content of image grid more dynamic.
In addition to scrolling, a 'load more' button is also displayed when more images are available.  

### Testing
I have made sure to include unit tests for most of the JavaScript modules. Although jsdom were used,
I kept the use of the API to minimum. With dependency injection(DI) pattern, I could easily mock 
the dependencies. The find result(production build) were tested on Safari or Mac and iPhone, Chrome
 for Mac, Chrome for iPhone, Firefox, as well in phone emulator in Chrome Dev Tools.
