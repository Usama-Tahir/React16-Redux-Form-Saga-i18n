# Welcome to React 16, Redux, Redux-Form, Redux-Saga Project

Hey Folks! This project contains great technologies as  [React 16](https://reactjs.org/), [React Hot Loader](https://github.com/gaearon/react-hot-loader), [Redux](http://redux.js.org/), [Redux-Form](https://redux-form.com), [Redux-Saga](https://redux-saga.js.org/), [JWT](https://jwt.io/), [Webpack](https://webpack.js.org), [JavaScript Standard Coding Style](https://standardjs.com/), [MongoDB](https://www.mongodb.com/), [Nginx](https://nginx.org)

I am more then sure that you will find here something interesting. It can help you sometimes when you get stuck.

What you can find here **(Client Side and Server Side)**:

 1. Babel [ES2015/ES6 Stage 3](https://babeljs.io/docs/plugins/preset-stage-3/) Setup with [transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)
 2. Authorization using JWT **(Access Token and Refresh Token)**
	> - Register / Sign up
	> - Login / Sign in
	> - Logout
	> - Forgotten Password **(TODO)**
 3. Dashboard
	> - Layout based on the most famous css framework [Bootstrap 4](http://getbootstrap.com/)
	> - Table Data sorting, searching
	> - Table Data pagination **(TODO Client Side)**
	> - Generic Table Data component to use with just config file (to speed up the development)
	> - Graphs / Statistics Generic Page
3. Forms
	> - [Redux-Form](https://redux-form.com)
	> - [Redux-Form](https://redux-form.com) Validation (Username or Email already exist)
	> - Multilanguage forms
4. Api / MongoDB Storage
	> - [Redux-Saga](https://redux-saga.js.org/) for Async Operations with cancelling etc.
	> - [Mongoose](http://mongoosejs.com/) as package to use MongoDB in NodeJS
	> - [Express](https://expressjs.com/) to use as web server
5. Internationalization ([i18n-webpack-plugin](https://github.com/webpack-contrib/i18n-webpack-plugin))
	> - Separate json files for each language **(eg. locales/pl.json)**
	> - Separate bundle file for each language **(eg. bundle.pl.js)**
	> - One function to translate **i18n(text)**
6. Separate Config files for different evironments

## Packages (more at package.json):

Client Side 

	"react": "^16.0.0",
	"react-dom": "^16.0.0",
	"react-redux": "^5.0.6",
	"react-router": "^4.2.0",
	"react-router-dom": "^4.2.2",
	"react-router-redux": "^5.0.0-alpha.6",
	"redux-form": "^7.1.0",
	"redux-saga": "^0.15.6"
	
Server Side
	
	"express": "^4.15.5",
	"helmet": "^3.8.2",
	"jsonwebtoken": "^7.4.3",
	"mongoose": "^4.11.13",
	"mongoose-paginate": "^5.0.3"
	"jest": "^21.2.1",
	"snazzy": "^7.0.0",
	"standard": "^10.0.3",
	"supertest": "^3.0.0"

## TODO:
1. Forgotten Password
2. Login with [Passport.js](http://www.passportjs.org/) package for different strategies like Facebook, Google, Twitter. **Passport has now over 300 strategies !**
3. Finish Tests for Backand and Frontend 
4. SEO Generation ***if will be not used for public system*** (Crawling and Indexing)
5. Flash Messages (Login Failed etc.) - Add some information to end users.
6. Login / Logout dates store in DB - Just if needed for the functionality.
7. Better Docker as Microservices Setup