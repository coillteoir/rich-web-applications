# Lab 4 Questions

1. Explain using code examples what is meant by props and state in React JS?

In React JS, applications are divided into components, similar to web components but handled entirely by React's Virtual DOM 
Components are declarative ways of defining parts of a web application. Components are functions disguised as HTML tags.

Props: Props are objects passed into a component's constructor function. Props can then be accessed in the component to render the external state of the application.
State: React uses state to allow components to internally track state within them. It is a declarative mechanism, using a constant value and a setter function to manipulate the state of components.

2. In functional programming, what does the term functor mean? Can you give an example in JavaScript?

In category theory, a functor is a mapping between categories, in the same way that a function is a mapping between sets.
In terms of computer science and programming, a function can take a certain type of input and return a different type of output. 
For example, the isEven function would take an integer and return a boolean.
A functor is the next step up from this, the Array type is an example of a functor since it can be constructed from any primitive or composite type 
i.e turning type T to type Array<T> 

3. We have looked at three kinds of asynchronous programming mechanisms, namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.

- Callbacks: Callbacks are simple to use and an easy way to express asynchronous behaviour. They can become more difficult to manage when nesting callbacks, this is often known as callback hell or the pyramid of doom.
- Promises: Promises are a functor which allows for declarative asynchronous functionality. They are far more structured than callbacks and by using the `.then` syntax they can be a lot easier to manage as they grow. They are not immediately intuitive, especially if you're unfamiliar with concepts like algebraic data types.
- Streams: Streams are a general mechanism for handling asynchronous tasks, and can lead to really elegant solutions when handling asynchronous tasks, like user input, network operations, and more. Most stream based frameworks like RxJS can be very unintuitive and difficult to get started with.

4. With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model and show how it can be used to space DOM elements



5. Detail how the browser loads and bootstraps a rich web application from an initial URL.
Once a URL is typed into the browser or a link is pressed, the browser will send an HTTP/S request via your ISP to a DNS server. That server will then resolve that DNS query to an IP address and a connection will be established between the client (you) and the server (website). Once a connection is established, the browser will then send a request to the server for the HTML/CSS/JS of that page. Once the server sends it over, the browser will begin rendering the page.
The DOM is created from the HTML document sent over, and once it is complete then a CSS DOM is created and loaded into memory. The JavaScript compiler (V8/SpiderMonkey/JavaScriptCore) will begin compiling the received JS into bytecode to be run by the interpreter. At this point, the page should be rendered with JS doing DOM manipulations in the background. As the page is running the JavaScript JIT will be optimizing the bytecode as it analyzes execution of functions. 


