# [YP Engineering Website](http://engineering-website.herokuapp.com/)

This is our Engineering website. Everyone at YP is welcome to contribute.
clone this repo, create or modify a post and push it. 
we'll get an email and we promise to publish it right away.

```ruby
require 'kitty'
cat = Kitty.new("Hello")
puts cat.miaoo
```

## How to add/edit a blog post?

Clone the project and run the server on your laptop

install node - http://nodejs.org

    git clone git@git.corp.attinteractive.com:dstools/engineering-website.git  
    cd engineering-website 
    npm install # installs all dependencies
    nod_modules/docpad/bin/docpad run 

Open [http://localhost:9778/](http://localhost:9778/)

Create or edit a blog post. all posts are in src/documents/posts
    
    touch src/documents/posts/best-restaurants.html.md

if it looks good on your localhost commit and push your changes

    git push github master

High five! we will push your post to [the engineering website](http://engineering-website.herokuapp.com/) as soon as we can.


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
    and untold numbers of discussions, we have compiled a list of the most compelling places to dine in Denver—and beyond. 
    We hope our choices, and the order in which they’re ranked, incite discussion—not to mention many nights out on the town.

    When we set out to rank restaurants for our second annual 25 Best Restaurants list, 
    we didn’t expect there to be a huge shift from 2010’s roundup. Boy, were we wrong. 
    The last year has seen a tremendous number of new—and very good—restaurants open, 
    and the local dining scene has continued to mature and rocket upward. 

    The result: a list that sings the praises of seven restaurants that weren’t included last year 
    (either because they weren’t open or because the kitchens have stepped up their games). 
    There was also a significant amount of upward—and downward—movement, and inevitably, a few places fell off the list entirely. 
    In putting together this ranking, we do everything we can to make an inherently subjective process—choosing a good restaurant—more objective. 

    We assign points to every dish we try, average them, and give each restaurant an overall food score. 
    We allot points for service (knowledge, attentiveness, friendliness) and ambience 
    (comfort, noise level, and how inviting the space is). 
    We recognize that restaurants thrive or die on something as indefinable as “vibe,”
    so we also assign a “rave rating” to each establishment.  
    
    Finally, once we’ve narrowed the choices to 30-some contenders, we spend hours analyzing the picks, discussing dining trends, 
    revisiting places (over and over and over again), 
    and shuffling restaurants up or down in ranking. In short, the list you hold in your hands is the culmination of many 
    months of eating, hundreds of dishes, and an untold number of hours evaluating, scoring, and debating. 
    
    We hope our choices, and the order in which they’re placed, incites discussion—not to mention many dinners out.
    
    ## Here are the top 3
   
    * Raffi's Place Restaurant
    * Far Niente Ristorante
    * Mini Kabob


## Markdown cheatsheet

    # Header h1
    ## Header h2
    ### Header h3 
    #### Header h4
    ##### Header h5

    1. this
    1. is 
    1. a numbered list

    * list
    * with
    * no
    * numbers

    this is a example of a [link](http://www.google.com)
    
    and that's how to add an image:

    ![image](http://www.welaf.com/uploads/201007/20/imgs/1279673882_miserable-life-of-a-small-cat.jpg)

    code:

    ```ruby
    require 'kitty'
    cat = Kitty.new("Hello")
    puts cat.miaoo
    ```

# Header h1
## Header h2
### Header h3 
#### Header h4
##### Header h5

1. this
1. is 
1. a numbered list

* list
* with
* no
* numbers

this is a example of a [link](http://www.google.com)

and that's how to add an image:

![image](http://www.welaf.com/uploads/201007/20/imgs/1279673882_miserable-life-of-a-small-cat.jpg)

code:

```ruby
require 'kitty'
cat = Kitty.new("Hello")
puts cat.miaoo
```

## How does it work?

it uses [DocPad](https://github.com/bevry/docpad) - a static site generator that watches
changes on 'src' folder, and generate a website into 'out' folder.

let's say you added a blog post localy. when you push your changes, 
the git repo on the server is getting the update thanks to a post-recieve hook.
this hook is making a post request to a little node.js api that is doing 'git pull'.
as soon as it's pulling your changes, DocPad regenerate the site into the 'out' folder and 
your blog post is public.
