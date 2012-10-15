## install on production server

Install node

    git clone git://github.com/creationix/nvm.git ~/nvm
    . ~/nvm/nvm.sh  # add to .bashrc

Fork and clone the project

    cd
    git clone git@github.com:<you>/engineering-website.git
    cd engineering-website
    npm install
    npm install forever -g
    
Run

    source scripts/production-start

Stop

    forever stopall

### Using forever

[forever](https://github.com/nodejitsu/forever) is a package that make sure your scripts are always running.

    forever start <script name>
    forever list
    forever stop 0
    forever stopall

### Submit changes

Submit a pull request to http://github.com/yp-engineering/engineering-website.

## install on your laptop, for development purposes
[Install node](http://nodejs.org/)

    git clone git.corp.attinteractive.com:dstools/engineering-website.git
    cd engineering-website
    npm install -g grunt
    npm install
  
### run

    node server.js


