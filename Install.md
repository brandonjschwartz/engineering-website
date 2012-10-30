## install on production server
become nextgen user

    sudo rootsh -iu nextgen

Install node

    git clone git://github.com/creationix/nvm.git ~/nvm
    # add to .bash_profile
    . ~/nvm/nvm.sh
    alias shasum='sha1sum'

    nvm install 0.8.14

Clone the project and install packages

    git clone git@github.com:<you>/engineering-website.git
    cd engineering-website
    npm install --production
    npm install forever -g
    
Run

    source scripts/start-production

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

### for development

    grunt watch  # watch stylus files in public/style and compile them to public/css/site.css
    
### before deploy to production

    grunt  # compile stylus into css and generate rss feed


