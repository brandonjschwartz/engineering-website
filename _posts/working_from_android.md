{{{
	"title" : "Working from Android",
	"authorName" : "Chris Dolan",
	"authorLink" : "https://github.com/aelien27",
	"authorImages": "http://en.gravatar.com/userimage/11263843/485df645844bd9e801190abc7aaf0d2c.jpg?size=200",
	"tags" : [ "mobile", "development" ],
	"date" : "6-5-2013"
}}}

If you're reading this, there's actually a better chance that you're on a mobile device than desktop PC. The world has moved on since then. I'm going to show you how I can not only consume information from my Android tablet (a rooted WiFi-only [Nexus 7](http://www.google.com/nexus/7)), but how I can actually do the vast majority of my job from this device, if necessary.

## Network Connection
At my company, we disallow WiFi users access to vital intranet resources by default, requiring the user to maintain a (Cisco) VPN connection. Fortunately, this capability is build into Android as of version 4.0.

(These instructions are particularly YP-centric. YMMV!)

![Android VPN settings](img/vpn_settings.png "VPN Settings")

Go ahead and crib these settings. If you are a YP.com engineer and need to know the masked values, they can be found in the corporate wiki.

![Android VPN configured](img/vpn_main.png "VPN Configured")

This is what it will look like when complete. Upon first tap, it will be necessary to provide your personalized authentication. If you elect to store your username and password, you will not be prompted again.

It's a bit of a pain to open Settings, click More, and select VPN every time you want to connect to the VPN. I've made it a bit easier by adding a shortcut to the VPN activity on my homescreen. You can see that below. That's a little too much "basic Android" for me to include here, but anyone feeling generous enough can go ahead and add those instructions in the comments.

![My WFA homescreen](img/homescreen_icons.png "My Work-From-Android homescreen")

## Essential Applications

### Mosh (server-side)
Ever since learning about [Mosh](http://mosh.mit.edu/), I've found it invaluable for development on-the-go. "Mosh" is short for "Mobile Shell", and provides a sort of self-healing SSH connection. If you've ever tried SSHing into a remote server with spotty Internet, you'd REALLY appreciate Mosh. Installing it on an older CentOs machine is like pulling teeth. I'll give that its own blog post. The remainder of this guide will assume you've already got Mosh working on your server.

### Irssi Connectbot (with Mosh)
There are a lot of terminals out there for Android, but only one I've found has native Mosh support. This is a custom hack of a custom hack of a terminal emulator called ConnectBot.

It can be downloaded [here](http://dan.drown.org/android/mosh/). You'll need to enable Unknown Sources in your Android settings in order to install it from the linked APK.

**Note: This is not the Irssi ConnectBot which can be found in the Google Play Store. This is a customization of that program and cannot be installed beside the market version.**

#### Passwordless Access

For the sake of convenience, you'll probably want to set up a keypair for use with your terminal connection. Passwords are for the birds.

![Keypair Create](img/keypair_create.png "Creating a keypair")
Create the key according to your idea of good-enough security. This thing is going to be living on your mobile device, so remember, it's still no more secure than your pocket is.

![Copying the Public Key](img/pubkey_copy.png "Copying the public key")
You can get the public key into your pastebuffer by long-pressing the created key. Use this to add the public key to the list of authorized keys on the server. You can then associate this key with your created connection profile, removing the need to store or type a password.

Once you've got Mosh working, the command-line purist is done with setup. I am far from a command-line purist, so I'll include some other Android applications I rely on.

### GNU Screen (or Tmux) (server-side)
Persistent terminal multiplexing is a complex topic, and not suitable for this post. I use [GNU Screen](http://www.gnu.org/software/screen/) myself, but others in my office prefer [Tmux](http://tmux.sourceforge.net/) for its somewhat broader flexibility and better defaults.

(If you happen to use GNU screen, the Irssi ConnectBot client provides a long-press menu which makes controlling Screen a snap.)

### AndroIRC
If you happen to need IRC connectivity, [AndroIRC](https://play.google.com/store/apps/details?id=com.androirc&hl=en) is probably the most reliable application out there for IRC connections over Android. Setup is intuitive, so I won't go into it here.

## Helpful hardware
If you've got a Nexus 7 like me, I recommend getting a Bluetooth keyboard for it. Eschewing that, [Hacker's Keyboard](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard&hl=en) is a great soft keyboard designed for engineers, programmers, and IT staff. It's got a ton of great features that make it a lot easier to work inside a terminal.
