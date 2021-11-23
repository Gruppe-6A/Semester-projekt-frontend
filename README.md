# Frontend startcode for 3rd semester

### Preconditions
*You should have node.js installed and an IDE like Visual Studio Code*
- [Node JS](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Setup the project

After having cloned the project and ran `npm install`, you should change the **URL** in **settings.js**

- Then you can run `npm start` to start a live preview of your project
- And then you are ready to code

### Deployment
*There are two methods on how to deploy your project*

#### The easy methode/Surge.sh
*This method is the easiest, but it won't use your own domain name*

- To get started with deploying your project with surge
- Start by running the command `npm run build` inside your project folder
- Then run `npm install surge` or if you are on a Linux/Mac system do `sudo npm install surge`
- After having installed surge, run this command: `surge --project ./build --domain A_DOMAIN_NAME.surge.sh`
- The *A_DOMAIN_NAME* part of the command needs to change to whatever domain name you want

#### The hard method
*This method is to deploy your project on your own domain name*
- SSH into your droplet that holds your tomcat container.
- cd into /etc/var/www/ folder and thereafter create a new folder: `mkdir XXXX`
- replace XXXX with the name of your frontend.
- Set permissions so we can upload the project: `chmod -R 777 XXXX`
- If not already done, type (in the root of your front-end project): `npm run build`
- Now you are ready to deploy your frontend by typing: `scp -r ./build/* root@X.X.X.X:/var/www/XXXX`
- On your droplet, open this configuration file:   `nano /etc/nginx/sites-available/default`
- Inside the default file, you have to write `location / { root /var/www/XXXX/};` inside the server block.
- Then you need to safe and quit the file and thereafter type `sudo service nginx restart`
- Run `npm run build` again inside the root of your front-end project.
- Deploy your frontend again by typing: `scp -r ./build/* root@X.X.X.X:/var/www/XXXX`
- [Use this link](https://docs.google.com/document/d/1KoqM54djkwAXpLDEb6wF3YoMjkkyYkxdtG4I43Dgf3w/edit)
