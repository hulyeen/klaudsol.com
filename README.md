# klaudsol.com 
Klaudsol.com is the official website of KlaudSol Apps

# Running from local machine
* Run `npm start` from the console.
* Open `localhost:8080` from your browser.
* Alternatively, you can launch `ngrok http 8080` to view from remote machine / cloud IDE.

# Deployment
The klaudsol.com website is currently hosted via AWS Amplify. Thus, a simple
push to the git repository is sufficient to trigger a redeploy.
To redeploy:
* Add all the changes you did: `git add <file1> <file2>`
* Commit: `git commit -m '<Some useful message regarding this commit>'`

