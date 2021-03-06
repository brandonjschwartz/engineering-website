{{{
  "title" : "Node Knockout",
  "authorName": "Oren",
  "authorLink": "https://github.com/oren",
  "authorImage": "https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
  "tags" : [ "tech" ],
  "date" : "11-13-2012"
}}}


<iframe width="560" height="315" src="http://www.youtube.com/embed/5COW63KXEcU" frameborder="0" allowfullscreen></iframe>

163 teams all over the world celebrated Node Knockout 2012 this weekend. Node Knockout is 48 hours of non-stop Node.js hackery.

[Substack](https://github.com/substack), [Dominic](https://github.com/dominictarr), and [Raynos](https://github.com/Raynos) created a browser-based, multi-player adventure game where you can cast spells on any object around you by changing the object's javascript code! For example, you can turn your friend into a monster or a rock if he pisses you off. Click on anything around you to see it's code and start hacking!

Play it! - [http://wizardz.jit.su](http://wizardz.jit.su)   
The code - [https://github.com/substack/wizard-game](https://github.com/substack/wizard-game)  
Node Knockout - [http://nodeknockout.com](http://nodeknockout.com)  

For those of you who want a peek behind the curtain: 
> we use a streaming data replication module, [crdt](https://github.com/dominictarr/crdt), and then connect it up over [mux-demux](https://github.com/dominictarr/mux-demux) (stream multiplexer) and [shoe](https://github.com/substack/shoe). shoe provides a stream api over websockets, mux-demux provides multiple streams over a single stream and crdt provides a data model that can be updated from either end, and is eventually consistent.

I have no better picture to describe my brain now:
![wtf-cat](http://www.thejayfk.com/wp-content/uploads/2011/01/WTF.jpg)

