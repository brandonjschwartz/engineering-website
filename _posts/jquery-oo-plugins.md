{{{
  "title" : "Building Object-Oriented jQuery Plugins",
  "authorName": "Hector",
  "authorLink": "http://www.virgentech.com",
  "authorImage": "http://www.gravatar.com/avatar/47555008c5f66348b8673b9c90e4c394.png",
  "tags" : [ "tech" ],
  "date" : "9-25-2012"
}}}


So you've been using [jQuery](http://jquery.com) as your Javascript framework and now you need to write a plugin. If you come from an Object-Oriented background like me, you may feel that jQuery's plugins leave a lot to be desired.

The basic formula to create a jQuery plugin is to extend the plugin namespace with a single method:


<pre>
#myplugin.js
jQuery.fn.myplugin = function(){
  // Do some cool stuff here
}
</pre>

While that seems all fine and dandy for simple plugins, you may need to create more robust plugins that do many things, often in a non-linear fashion.

Some plugins get around this by adding tons of methods to jQuery's plugin namespace.


    $('#test').plugin();
    $('#test').pluginAdd('stuff');
    $('#test').pluginRemove('other stuff');
    $('#test').pluginDoSomethingCool();

I personally don't like that approach because it pollutes the jQuery plugin namespace with lots of methods --  it's best to stick to just one plugin method per plugin.

Other plugins use the first parameter of the plugin to call methods:

    $('#test').plugin();
    $('#test').plugin('add', 'stuff');
    $('#test').plugin('remove', 'other stuff');
    $('#test').plugin('doSomethingCool');

This approach is a little awkward, especially if the plugin accepts an `options` object the first time it is created. This approachs means you would have to either write a switch of all the methods you want to expose, or blindly accept any string as a method name.

To get around these hurdles, you can use this basic template for jQuery plugins that provides access to an Object-Oriented interface if needed while still maintaining jQuery's simplicity of a single method in the plugin namespace.

The first thing you need to do is wrap all your plugin code in an anonymous function. This will help keep things nice and tidy without creating global variables.

    #myplugin.js
    (function($){
      // Your plugin code goes here
    })(jQuery);

Next, create your plugin as a class, where the first parameter is a single DOM element.

    #myplugin.js
    (function($){
      var MyPlugin = function(element){
        var elem = $(element);
        var obj = this;

        // Public method
        this.publicMethod = function(){
          console.log('publicMethod() called!');
        };
      };
    })(jQuery);

To make your new object-oriented class available as a jQuery plugin, write a simple wrapper function in the plugin namespace:

    #myplugin.js
    (function($){
      var MyPlugin = function(element){
        var elem = $(element);
        var obj = this;

        // Public method
        this.publicMethod = function(){
          console.log('publicMethod() called!');
        };
      };

      $.fn.myplugin = function(){
        return this.each(function(){
          var myplugin = new MyPlugin(this);
        });
      };
    })(jQuery);

Now, when you call `$(selector).myplugin()`, the jQuery plugin will loop through the matched elements and instantiate an instance of `MyPlugin` for each one, passing the element as the first argument. And by returning `this`, you can ensure that your plugin is chainable (e.g. `$(selector).myplugin().show()`).

But now there's a problem of how to get the object `myplugin` once it's been created. For this, I usually store the object in the elements data. This provides easy access to the object while allowing you to prevent accidental double instantiation in the event that the plugin was called again on the same element.

    #myplugin.js
    (function($){
      var MyPlugin = function(element){
        var elem = $(element);
        var obj = this;

        // Public method
        this.publicMethod = function(){
          console.log('publicMethod() called!');
        };
      };

      $.fn.myplugin = function(){
        return this.each(function(){
          var element = $(this);

          // Return early if this element already has a plugin instance
          if (element.data('myplugin')) return;

          var myplugin = new MyPlugin(this);

          // Store plugin object in this element's data
          element.data('myplugin', myplugin);
        });
      };
    })(jQuery);

Now you have easy access to the object should you need to run methods on it.

    $('#test').myplugin();
    var myplugin = $('#test').data('myplugin');
    myplugin.publicMethod(); // prints "publicMethod() called!" to console

If you need to get fancy and add an options argument or other required arguments, just pass them from the jQuery plugin to your plugin's constructor:

    #myplugin.js
    (function($){
      var MyPlugin = function(element, options){
        var elem = $(element);
        var obj = this;

        // Merge options with defaults
        var settings = $.extend({
          param: 'defaultValue'
        }, options || {});

        // Public method
        this.publicMethod = function(){
          console.log('publicMethod() called!');
        };
      };

      $.fn.myplugin = function(options){
        return this.each(function(){
          var element = $(this);

          // Return early if this element already has a plugin instance
          if (element.data('myplugin')) return;

          // pass options to plugin constructor
          var myplugin = new MyPlugin(this, options);

          // Store plugin object in this element's data
          element.data('myplugin', myplugin);
        });
      };
    })(jQuery);

You may also want to expose some of your object's methods while keeping others private. To make a private method, create a local function within your object using the `var` keyword:

    #myplugin.js
    (function($){
      var MyPlugin = function(element, options){
        var elem = $(element);
        var obj = this;
        var settings = $.extend({
          param: 'defaultValue'
        }, options || {});

        // Public method - can be called from client code
        this.publicMethod = function(){
          console.log('public method called!');
        };

        // Private method - can only be called from within this object
        var privateMethod = function(){
          console.log('private method called!');
        };
      };

      $.fn.myplugin = function(options){
        return this.each(function(){
          var element = $(this);

          // Return early if this element already has a plugin instance
          if (element.data('myplugin')) return;

          // pass options to plugin constructor
          var myplugin = new MyPlugin(this, options);

          // Store plugin object in this element's data
          element.data('myplugin', myplugin);
        });
      };
    })(jQuery);

To see an example of a plugin written in this fashion, check out my [Tagger](http://www.virgentech.com/code/view/id/3) plugin.

> *Note: This post was cross-posted from the [VirgenTech.com blog entry by the same name](http://www.virgentech.com/blog/2009/10/building-object-oriented-jquery-plugin.html).*
