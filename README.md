# klaudsol.com 
Klaudsol.com is the official website of KlaudSol Apps

# Machine Requirements
This app has been tested to run on the following machines:
* MacBook Pro (15-inch, 2018) 16GB Memory

# OS Requirements
This app has been tested to run on the following operating systems:
* Ubuntu 18.04

# Dependencies
Your machine is expected to have the following applications before starting the installation process:
* git version 2.17.1 or higher
* NodeJS version 10.19.0 or higher
* NPM version 6.13.4 or higher

# Running from local machine
* Run `npm run start` from the console.
* Open `localhost:8081` from your browser.

# Deployment
The klaudsol.com website is currently hosted via AWS Amplify. Thus, a simple
push to the git repository is sufficient to trigger a redeploy.
To redeploy:
* Add all the changes you did: `git add <file1> <file2>`
* Commit: `git commit -m '<Some useful message regarding this commit>'`

