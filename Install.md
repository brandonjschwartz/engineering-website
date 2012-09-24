## Install on engineering.np.wc1.yellowpages.com

    sudo rootsh -iu nextgen  # install as nextgen

install node

    git clone git://github.com/creationix/nvm.git ~/nvm
    . ~/nvm/nvm.sh  # add to .bashrc

Clone the project

    cd
    git clone git@git.corp.attinteractive.com:dstools/engineering-website.git
    cd engineering-website
    npm install
    sudo npm install forever -g
    
Run

    NODE_ENV=production forever start node_modules/docpad/bin/docpad-server
    forever start updater/server.js

### using forever

[forever](https://github.com/nodejitsu/forever) is a package that make sure your scripts are always running.

    forever start <script name>
    forever list
    forever stop 0
    forever stopall

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

## Heroku (depricated)

### running as production on heroku

    heroku config:add NODE_ENV=production --app engineering-website
    heroku config:add NODE_ENV=production --app stage-engineering-website

### heroku commands

    heroku config -s --app stage-engineering-website
    heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git --app stage-engineering-website
   
### Run the git updater

This little node.js server provide a single end-point: POST /update  
all it does is 'git pull'

    forever start updater/server

### Add post-recieve url on [github](https://git.corp.attinteractive.com/dstools/engineering-website/edit)

test

    curl -X POST http://engineering.np.wc1.yellowpages.com:3000/update

add on github's post-recieve hooks section
    http://engineering.np.wc1.yellowpages.com:3000/update

