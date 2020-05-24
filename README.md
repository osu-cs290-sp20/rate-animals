# Animal Ranker

## To Run Project
First make sure you have the current branch from master, then do npm install to get your node_modules folder. Then to start the server running on port 3000 do npm start.
To access pages go to localhost:3000.

## Installing MONGO DB
To run the project successfully, you need to run MONGODB. The file structure should look like within the main folder, there should be the installation folder called MONGODB. So the main MONGODB folder should be in the same folder as the readme.MD. Once this is installed, you'll want to take a terminal into the bin folder, where there should be an executable called mongo.exe. If you want you can change the environmental variables PORT, to change the port the server is served on, but I would not suggest it. Simple run mongo.exe from the terminal. In git bash this is ./mongo.exe , to look up other methods for different terminals look up those individual terminals. I haven't tested this yet, but it should work just by you doing that. However if this doesn't work when you run npm start in a different terminal, go into mongodb compass and go to the server running on localhost, and add a database called "main" with a collection called "animals", then things should work. If this STILL doesn't work, text Jacob.

## Adding pages to be served.
When you're a linking a js or css file from public, start it off with a / and then do the pathname within public. For isntance if I was serving a file called upload.css inside public/upload, I would link it by saying src="/upload/upload.css", and then the server should automatically grab it and serve it. 

## Editing HTML
To edit the HTML/the heads of each individual page go to the views folder, and edit the files from inside the appropriate .handlebars file.

## Note to other Contributors:
Before you start editing check out this: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging

When you're happy make a pull request with master, and text the group so we can all check it out, or if you're just adding and not removing anything feel free to just push it to master.

Also check out the projects tab, and feel free to add anything you think needs to be to any of the lists, as well as moving stuff around when you're actually working on things, so we don't have multiple people working on something at the same time.
## Changing Main Styling
To change the styling for anything that will change accross all the pages, use the navbar-style.css file within the navbarstyle folder in the root directory. This will allow for consistent displaying across the website.

## Changing Individual Page Styling
To change an individual page's styling, simply create new css file in that page's folder and link it to the page from the HTML.

## Adding temporary images.
Use this website url to add images. https://placekitten.com/

