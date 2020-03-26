What is Passport.js?
Passport is authentication middleware for Node.js. As it’s extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application. A comprehensive set of strategies supports authentication using a username and password, Facebook, Twitter, and more. Find out more about Passport here.

// TOKEN BASED AUTHENTICATION (https://www.dotnettricks.com/learn/webapi/token-based-authentication-in-aspnet-web-api)

ASP.NET Web API is a service which can be accessed over the HTTP by any client. So, providing security to the Web API is very important, which can be easily done with the process called Token based authentication. Token-based authentication is a process where the user sends his credential to the server, server will validate the user details and generate a token which is sent as response to the users, and user store the token in client side, so client do further HTTP call using this token which can be added to the header and server validates the token and send a response. This article will give you a step by step process to implement the token-based authentication in ASP.NET Web API 2.

From this article, we have learned the complete process of token-based authentication in ASP.NET Web API 2, where we have seen how to generate the token by sending the user credential and how to use the token with HTTP header for further communication with the server through an HTTP request to access a secured API Service

---

-Anytime we access our Mongo database no matter what it is, it is always asynchronous action

COOKIE SESSION MIDLEWARE
Simple cookie-based session middleware.

A user session can be stored in two main ways with cookies: on the server or on the client. This module stores the session data on the client within a cookie, while a module like express-session stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.

The following points can help you choose which to use:

What’s In A Session Anyway?
When a user first logs in or registers for your site, you know who they are because they just submitted their information to your server. You can use that information to create a new record in your database, retrieve an existing one, or better yet – use Stormpath. Simple!

But how do you keep them authenticated when they do something crazy like reload the page? Magic, that’s how! Also known as sessions.

cookie-session does not require any database / resources on the server side, though the total session data cannot exceed the browser's max cookie size.
cookie-session can simplify certain load-balanced scenarios.
cookie-session can be used to store a "light" session and include an identifier to look up a database-backed secondary store to reduce database lookups.

a ‘session’ is a squishy, abstract term for keeping users logged in.
We care more about the actual mechanism for persisting authentication; namely, cookies. The most delicious part of user management.

Cookies allow you to store a user’s information inside a file on their browser. The browser then sends that info back on every request, allowing your application to identify the user and customize their experience. Which is objectively way better than asking for a username and password on every request.

They’re pretty simple too. Let’s say a user has a cookie on their browser, and this is the HTTP request sent when they load a new page:

The request is broken into two parts:

The headers section (the top box), which contains metadata about the request
The body, which holds the actual payload from the user
Headers get our attention today because that’s where the cookies are. Notice the “Cookie” header in our request – that’s where the user’s info is stored. They’re simply strings separated with semicolons, nothing fancy (yet).

https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions

---

There should be 2 seperate sets of keys for Development and Production envrionment
Keys for development in our local machine will be for test database only, and let say even we lose our computer or laptop we can
just delete the test database, it also allows us to have 2 seperate Mongo databases.
It very imoprtant to have 2 databases, one for dev and one for production because when we delpoy our application to production
we want to have a clean database existing in production
