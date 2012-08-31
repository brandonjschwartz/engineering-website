# [YP Engineering Website](http://engineering.np.wc1.yellowpages.com:9778/)

This is our Engineering website. 
Everyone at YP can modify it. create or modify a post, push it and it's live.  
yes, it's that simple.

## How to add/edit a blog post?

Clone the project and run the server

    git clone git@git.corp.attinteractive.com:dstools/engineering-website.git  
    cd engineering-website 
    [install node](http://nodejs.org/)
    npm install 
    docpad run 

Open [http://localhost:9778/](http://localhost:9778/)

Add your post to src/documents/posts. for example: best-restaurants.html.md

Make sure it looks good on your localhost

git add . && git commit -am "restaurants" && git push


## Example for blog post

We use markdown for our post.

    ---
    title: The best restaurants in Glendale
    summery: After many months of eating, hours of analyzing hundreds of dishes, and untold numbers of discussions, we have compiled a list of the most compelling places to dine in Glendale. We hope our choices, and the order in which they’re ranked... 
    author_image: './images/liz.jpg'
    author_name: 'Liz'
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
    
    Here are the top 3
   
    * Raffi's Place Restaurant
    * Far Niente Ristorante
    * Mini Kabob


## How does it work?

it uses [DocPad](https://github.com/bevry/docpad) - a static site generator that watches
changes on 'src' folder, and generate a website into 'out' folder.

let's say you added a blog post localy. when you push your changes, 
the git repo on the server is getting the update thanks to a post-recieve hook.
this hook is making a post request to a little node.js api that is doing 'git pull'.
as soon as it's pulling your changes, DocPad regenerate the site into the 'out' folder and 
your blog post is public.

## Install on engineering.np.wc1.yellowpages.com

sudo rootsh -iu nextgen

tpkg -i nodejs-0.8.8-1-centos5-x86_64.tpkg 

tpkg -i git

Clone the project

    git clone git@git.corp.attinteractive.com:dstools/engineering-website.git

    cd engineering-website
    
    npm install
    
    npm install docpad
    
Run the site

    ./node_modules/docpad/bin/docpad run

Open [http://engineering.np.wc1.yellowpages.com:9778/](http://engineering.np.wc1.yellowpages.com:9778/)

## Run the git updater

    node updater/server &

## Add post-recieve url on [github](https://git.corp.attinteractive.com/dstools/engineering-website/edit)

    http://engineering.np.wc1.yellowpages.com:3000/update


Thanks, the YP team loves you.
