{{{
  "title" : "Getting mosh (mobile-shell) running on an SSVM",
  "authorName": "Chris Dolan",
  "authorLink": "https://github.com/aelien27",
  "authorImage": "http://www.gravatar.com/avatar/6e262ce095cdf3cafb8e3bf59ca0ef07.png",
  "tags" : [ "linux","ssh","shell" ],
  "date" : "02-27-2013"
}}}

# What is it?

Mosh is, most simply, an SSH wrapper. Using the UDP protocol and desined for intermittent connectivity, Mosh takes care of most of SSH's real annoyances. What's more, it uses your existing SSH config files, so if you can SSH into a server and that server has Mosh, you can Mosh into it, too!

Mosh comes with comprehensive instructions for installing in all sorts of operating systems which are not ours! In order to make this thing work in CentOS, you've got to compile it yourself, which means compiling some dependencies, and also creating a symlink to get around a limitation of the linker.

Here goes...

# How To

## Compile and install Protocol Buffers (an open-source Google project for data interchange)

    $ wget https://protobuf.googlecode.com/files/protobuf-2.5.0.tar.gz
	$ ./autogen.sh
	$ ./configure
	$ make
	$ make check
	$ sudo make install

## Compile and install Mosh

    $ wget
	$ ./autogen.sh
	$ PKG_CONFIG_PATH=/usr/local/lib/pkgconfig ./configure
	$ make
	$ make check
	$ sudo make install

## Create wrapper scripts to set LD_LIBRARY_PATH for execution

	# mosh-client
    $ sudo mv /usr/local/bin/mosh-client /usr/local/bin/mosh-client.exe
	$ echo '#!/bin/sh
	LD_LIBRARY_PATH=/usr/local/lib exec /usr/local/bin/mosh-client.exe "$@"' > /usr/local/bin/mosh-client
	$ sudo chmod +x /usr/local/bin/mosh-client

	# mosh-server
    $ sudo mv /usr/local/bin/mosh-server /usr/local/bin/mosh-server.exe
	$ echo '#!/bin/sh
	LD_LIBRARY_PATH=/usr/local/lib exec /usr/local/bin/mosh-server.exe "$@"' > /usr/local/bin/mosh-server
	$ sudo chmod +x /usr/local/bin/mosh-server

## Usage

	# from client
	$ mosh user@hostname

Now you should have a resiliant connection to your remote host! Use it just like SSH.

## Further Reading

- [Protocol Buffers page (Google Code)](https://code.google.com/p/protobuf/)
- [Mosh home](http://mosh.mit.edu/)
