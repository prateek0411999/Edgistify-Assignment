# Edgistify-Assignment

•	Firstly manually clone the repository inside a folder (say Edgistify-task in D drive)

•	 So Now we have the Edgistify-task folder in which we have the client folder (i.e. react application folder) as well as other folders (that our servers.js file needs)

•	NOW THIS STEP IS SUPER IMPORTANT 

•	Download the config.env file from my google drive link 

•	https://drive.google.com/file/d/14Ujduzy0EnHqf5C5mKMhgeaYsRrCcRka/view?usp=sharing

•	(as it’s a practice that everyone follows i.e. to store the configurations in an environment separate from the code moreover github doesn’t allow it or drops security warnings for the same)

•	Once you have downloaded the file put it inside the config folder in the root directory (i.e. D -> Edgistify-task -> Config -> (put the config.env file here) ).

•	Now once this is done it’s time to get the node_modules that I’ve used in this application so 
                
1.	Firstly you need to install the node modules for the root directory which our server uses:
(So go to the cmd prompt and then to the root directory i.e. D -> Edgistify-task)
(and type npm install and hit enter, this is install all the node modules that I’ve used)
(and once it’s done you will see  node_modules folder in the same directory (D-> Edgistify-task)   )


2.	Now you have node_modules for our server.js file but also our client folder needs to have the node_modules for our react application so we’ll do  the same thing here also but this time we need to go into one directory more i.e. in Client folder , So in Cmd prompt go to D -> Edgistify-task->Client and type npm install 

•	Now we have all the files to run the application so there are simply two steps to run the application
o	First we’ll run our server so open the cmd and go to the root directory and type npm run dev i.e (in cmd go to D-> Edgistify-task and type npm run dev and hit enter) this will start our server on port 5000
 
o	Second is to run our react application i.e. inside the client folder so in cmd go to D-> Edgistify-task-> Client  and type npm start  this will start our react application on port 3000



Now everything is done, the application is up and running in your browers on http://localhost:3000  as soon as you type this the application will redirect you to sign up page of the application
	





FOR BETTER UNDERSTANDING CHECK THE WORD FILE
