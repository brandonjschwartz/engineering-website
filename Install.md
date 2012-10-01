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
    npm install forever -g
    
run

    source scripts/production-start

stop

    forever stopall

### using forever

[forever](https://github.com/nodejitsu/forever) is a package that make sure your scripts are always running.

    forever start <script name>
    forever list
    forever stop 0
    forever stopall

### push to production

create a production remote

    git remote add github git@git.corp.attinteractive.com:dstools/engineering-website-prod.git

when you want to push to production

    git push production master

### Run the git updater

This little node.js server provide a single end-point: POST /update  
all it does is 'git pull' and restart the docpad server

    forever start updater/server

### Add post-recieve url on [github](https://git.corp.attinteractive.com/dstools/engineering-website-prod/edit)

test

    curl -X POST http://engineering.np.wc1.yellowpages.com:3000/update

add on github's post-recieve hooks section

    http://engineering.np.wc1.yellowpages.com:3000/update

