# TodoItemRestfulAPIApp
Restful API application for To-do Item List

1. How long did you spend on your solution?

	Reply: I have spent between 2-3 hours for the solution.

2. How do you build and run your solution?

	Reply: I have built and ran my solution using Visual Studio for Mac. I have used Console, Swagger and Postman applications to execute in-between testings. Ofcourse, the final version was tested on Google Chrome browser.

3. What technical and functional assumptions did you make when implementing your solution?

	Reply: I have made following technical and functional assumptions while implementing the solution.
	1. For simplicity of the application as mentioned in the task, to-do tasks are stored in memory.
	2. The Edit Form will be displayed when a task is selected and the Edit button is clicked. It will not be displayed when the page is loaded for the first time.
	3. The Edit Form will not be visible when the Save button is clicked to update the task.
	4. User will be shown a warning message when deleting a task.

4. Briefly explain your technical design and why do think is the best approach to this problem?

	Reply: My technical design encompasses the usage of .Net Core functionalities for the development of a RESTful Web API. As we know, RESTful API is an application programming interface adhered to the REST architectural style that uses HTTP requests to access and use data with the operations, such as GET, PUT, POST and DELETE. The Model and Controller are implemented in C# language, which accepts and responds to the CRUD requests over HTTP from the client. The web page is designed with the HTML5 and Bootstrap4 features and functionalities. It contains text fields, table and buttons for addition, listing and updating of the to-do task list. The underlying actions are carried out by Javascript and JQuery functions that perform client-side validations, and request and response communications between client and sever.

	I think this is the best approach to the task because of the following reasons;
	1. We are carrying out request and response payloads between client and server in a JSON format. It is a lightweight data-interchange format in a plain text written in JavaScript object notation that is independent of language. Because of the JSON format being syntactically similar to the code that creates JavaScript objects, a JavaScript based program can easily convert JSON payload into JavaScript objects.	Similar to JSON, they are other ways to transfer data between client and server, for instance, XML. However, it is not widely supported by frameworks without transforming the data into a useable format, which is usually JSON. Eventually, it adds lots of extra work in order to carry out the data transfer, including parsing with the XML parser.

	2. I have added some exception handling functionalities at the server side, such that the exceptions can be handled gracefully and a meaningful error message can be sent to the client when an exception occurs. Thereby, the root of an issue can be easily identified and resolved.

	3. I have used Bootstrap features and functionalities for the front end design and look and feel. It provides a responsive web design approach making the web page automatically adapt on all devices and screen sizes, ranging from desktop to smartphone.
