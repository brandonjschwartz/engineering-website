# YP Engineering Website
[engineering.yp.com](http://engineering.yp.com)

This is our Engineering website. Everyone at YP is welcome to contribute.  

## How to add/edit a blog post?

You have 2 options - forking the repo and submiting a pull request or email me a markdown file.

### 1. Fork and submit pull request

Fork the repo using the **Fork** botton at the top right corner.

    git clone git@github.com/<you>/engineering-website.git
    cd engineering-website 

[install node](http://nodejs.org)

    npm install # installs all dependencies
    node server.js # run the site locally

Open [http://localhost:9778/](http://localhost:9778/) to view the website

Create or edit a blog post. all posts are in _posts
    
    touch _posts/best-restaurants.html.md

if it looks good on your localhost commit and push your changes

    git add .
    git commit -am "best restaurants"
    git push

now go to your repository on github and sumbit a pull request (hit the 'pull request' button)  
fill in a title and a comment for the request and hit the 'send pull request' button.

### 2. email me a markdown file

write your blog post using markdown (see example below) and email me - ogolan@yp.com

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


