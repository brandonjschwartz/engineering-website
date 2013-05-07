# YP Engineering Website
[engineering.yp.com](http://engineering.yp.com)

This is our Engineering website. Everyone at YP is welcome to contribute.

## How to add/edit a blog post?

You have 2 options - cloning the repo and pushing to origin master or email a markdown file to an admin.

### Option 1. 
To Clone Repo and Push Your Post:

1. Use (or create if you don't have one) an external github account.
2. Ensure you have permissions to clone the repo - add your public ssh key to your external github account. 

  You'll know this is a problem if you get the following error: 
    Permission denied (publickey).
    fatal: The remote end hung up unexpectedly

3. Clone the repo using the following command (or follow instructions on github page) and go to the 
engineering-website directory on your local machine:

    git clone git@github.com:yp-engineering/engineering-website.git
    cd engineering-website

4. [install node](http://nodejs.org)

    npm install # installs all dependencies
    node server.js # run the site locally

  If you get the following error:
    Error: Cannot find module './config.js'
  run this command in the /engineering_website directory:
    cp config.example.js config.js

5. Open [http://localhost:9778/](http://localhost:9778/) to view the website

6. Create or edit a blog post. All posts are in _posts. Or to simply see how this works run the command:

    touch _posts/best-restaurants.html.md

7. If it looks good on your localhost commit and push your changes

    git add .
    git commit -am "best restaurants"
    git push

If you get the following error at this stage:

    ERROR: Permission to yp-engineering/engineering-website.git denied to <you>.
    fatal: The remote end hung up unexpectedly

Send an email to ogolan@yp.com or ncunningham@yp.com requesting that your external git account be added as an owner on the yp-engineering git team.

Now let us know the content is ready to push to production, or wait till we see the git activity: ogolan@yp.com or ncunningham@yp.com

### Option 2. email a markdown file

write your blog post using markdown (see example below) and email - ogolan@yp.com or ncunningham@yp.com

## Example for blog post

We use markdown for writing blog posts.


    {{{
      "title" : "Best places to eat in Glendale",
      "authorName": "Oren",
      "authorLink": "https://github.com/oren",
      "authorImage": "https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
      "tags" : [ "culture" ],
      "date" : "9-13-2012"
    }}}

    After many months of eating, hours of analyzing hundreds of dishes,
    and untold numbers of discussions, we have compiled a list of the most compelling places to dine in Glendale—and beyond.
    We hope our choices, and the order in which they're ranked, incite discussion—not to mention many nights out on the town.

    When we set out to rank restaurants for our second annual 25 Best Restaurants list,
    we didn’t expect there to be a huge shift from 2010’s roundup. Boy, were we wrong.
    The last year has seen a tremendous number of new—and very good—restaurants open,
    and the local dining scene has continued to mature and rocket upward.

    We hope our choices, and the order in which they’re placed, incites discussion—not to mention many dinners out.

    ## Here are the top 3

    * Raffi's Place Restaurant
    * Far Niente Ristorante
    * Mini Kabob

## Markdown cheatsheet

**headers**

    # this is an h1 header
    ## this is an h2 header
    ### this is an h3 header
    #### this is an h4 header
    ##### this is an h5 header

# this is an h1 header
## this is an h2 header
### this is an h3 header
#### this is an h4 header
##### this is an h5 header

**list**

    * chipotle
    * poquito mas
    * olive garden

* chipotle
* poquito mas
* olive garden

**numbered lists**

    1. apple
    1. grape
    1. tomato

1. apple
1. grape
1. tomato

**link**

    what a great [website](http://www.google.com)

what a great [website](http://www.google.com)

**image**

    ![image](http://www.welaf.com/uploads/201007/20/imgs/1279673882_miserable-life-of-a-small-cat.jpg)

![image](http://www.welaf.com/uploads/201007/20/imgs/1279673882_miserable-life-of-a-small-cat.jpg)

**code:** (4 spaces or 2 tabs)

<pre>
    require 'kitty'
    cat = Kitty.new("Hello")
    puts cat.miaoo
</pre>

(it's not showing here, but there is also automatic syntax highlight)

    require 'kitty'
    cat = Kitty.new("Hello")
    puts cat.miaoo

**line break** (2 spaces after the first line)

    hello
    world


