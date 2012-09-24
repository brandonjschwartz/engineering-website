# YP Engineering Website
[http://engineering.yp.com](http://engineering.yp.com)

This is our Engineering website. Everyone at YP is welcome to contribute.  
clone this repo, create or modify a post and push it.  
we'll get an email and we promise to publish it right away.  

**note: if you can't push this repository, email me - ogolan@yp.com and i'll add you.**

## How to add/edit a blog post?

You will need to clone the project and run the website on your laptop

[install node](http://nodejs.org)

    git clone git@git.corp.attinteractive.com:dstools/engineering-website.git  
    cd engineering-website 
    npm install # installs all dependencies
    ./scripts/start

Open [http://localhost:9778/](http://localhost:9778/) to view the website

Create or edit a blog post. all posts are in src/documents/posts
    
    touch src/documents/posts/best-restaurants.html.md

if it looks good on your localhost commit and push your changes

    git add .
    git commit -am "best restaurants"
    git push

You are awesome! 
An email will be sent to us and we will publish your post http://engineering-website.herokuapp.com as soon as we can.


## Example for blog post

We use markdown for writing blog posts.

    ---
    date: 2012-09-13
    title: The best restaurants in Glendale
    authorLink: 'https://github.com/oren'
    authorName: 'oren'
    authorImage: 'https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
    layout: post
    ---

    After many months of eating, hours of analyzing hundreds of dishes, 
    and untold numbers of discussions, we have compiled a list of the most compelling places to dine in Glendale—and beyond. 
    We hope our choices, and the order in which they’re ranked, incite discussion—not to mention many nights out on the town.

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

**code:**

    ```ruby
    require 'kitty'
    cat = Kitty.new("Hello")
    puts cat.miaoo
    ```

```ruby
require 'kitty'
cat = Kitty.new("Hello")
puts cat.miaoo
```

**line break** (2 spaces after the first line)

    hello  
    world

## How does it work?

it uses [DocPad](https://github.com/bevry/docpad) - a site generator that watches
changes on 'src' folder, and generate a website into 'out' folder.  
Docpad also run a node server (express.js) that serve the content of 'out' folder.


