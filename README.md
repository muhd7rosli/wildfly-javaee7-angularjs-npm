# Wildfly JavaEE 7 AngularJS Webapp with NPM support

This template has custom Java EE directory structure to integrate Java EE development backend with
frontend web development. The Java EE provide REST API service to the frontend application. The frontend development 
access the backend service using Angular JS. The frontend development is managed by Bower and Gulp to manage all 
javascript dependencies and optimize html script. Both management modules uses NPM, a package manager for Node.js.

# Pre-requisite components requires to be installed
## Java
1. JDK 1.7 and above
2. Maven 3
3. Java Application Server (eg. Wildfly 8.1)

## Javascript and CSS package manager
1. Node.js
2. Bower
3. Gulp

# Quickstart
1. Download this file from github
2. Go to the main directory of this project, run 'npm install'
3. Run 'bower install'
4. Run 'gulp'
5. Run 'mvn clean package
6. Deploy the war package on your application server.

# Development
There are two section of developments space. The Java EE development is located in folder `src/main/java` where 
all the Java Beans are located. The frontend development is located in folder `webcontent`. The html script located in 
the folder will be optimized and rendered to folder `src/main/webapp` using Bower and Gulp. This development process
ensure all javascript and web assets are organized.

## Backend
+ The backend uses RESTEasy <http://resteasy.jboss.org/> framework to build the REST API.
+ Hibernate database is set up but not used for this demo.

## Frontend
+ The main javascript file is located at `webcontent/src/app/js`.
+ The javascript uses AngularJS. Please read the note for further instruction.
+ The bower configuration and gulp configuration is located at `bower.json` and `gulpfile.js`.

# Note
This framework is build on a localhost server. It requires modification on the frontend to accommodate actual hosting 
(eg. openshift).

# Platform Tested
1. Tested on Wildfy 8 and 9.
2. Tested on Node JS v4.4.2 LTS