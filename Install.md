### heroku commands

    heroku config -s --app stage-engineering-website
    heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git --app stage-engineering-website
   
## Install on engineering.np.wc1.yellowpages.com

    sudo chown -R nextgen:nextgen /home/t/lib/node_modules # this will let you install node global packages. this command might not be needed.
    sudo npm install forever -g
    sudo rootsh -iu nextgen

    tpkg -i nodejs-0.8.8-1-centos5-x86_64.tpkg # install node.js
    tpkg -i git 

Clone the project

    git clone git@git.corp.attinteractive.com:dstools/engineering-website.git
    cd engineering-website
    npm install
    npm install docpad
    
Run the site

    forever start ./node_modules/docpad/bin/docpad run --env static

you can run the docpad and the updater at the same time using:

    source scripts/start

and

    source scripts/stop

Open [http://engineering.np.wc1.yellowpages.com:9778/](http://engineering.np.wc1.yellowpages.com:9778/)

### Run the git updater

This little node.js server provide a single end-point: POST /update  
all it does is 'git pull'

    forever start updater/server

### Add post-recieve url on [github](https://git.corp.attinteractive.com/dstools/engineering-website/edit)

    http://engineering.np.wc1.yellowpages.com:3000/update

### using forever

[forever](https://github.com/nodejitsu/forever) is a package that make sure your scripts are always running.

    forever start <script name>
    forever list
    forever stop 0

### pushing to remotes

push to our github

    git push github master

push to stage

    git push stage master

push to production

    git push origin master

### creating remotes

create a stage remote

    heroku create --remote=stage

create a github remote

    git remote add github git@git.corp.attinteractive.com:dstools/engineering-website.git

## running as production on heroku

    heroku config:add NODE_ENV=production --app engineering-website
    heroku config:add NODE_ENV=production --app stage-engineering-website
