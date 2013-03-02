{{{
  "title" : "Getting mosh (mobile-shell) running on an SSVM",
  "authorName": "Chris Dolan",
  "authorLink": "https://github.com/aelien27",
  "authorImage": "http://www.gravatar.com/avatar/6e262ce095cdf3cafb8e3bf59ca0ef07.png",
  "tags" : [ "linux","ssh","shell" ],
  "date" : "02-27-2013"
}}}

# What is it?

[Mosh](http://mosh.mit.edu/) is simply an SSH wrapper. Using the UDP protocol and desined for intermittent connectivity, Mosh takes care of most of SSH's real annoyances. What's more, it uses your existing SSH config files, so if you can SSH into a server and that server has Mosh, you can Mosh into it, too!

Mosh comes with comprehensive instructions for installing in all sorts of operating systems which are not ours! In order to make this thing work in CentOS, you've got to compile it yourself, which means compiling some dependencies, and also creating a symlink to get around a limitation of the linker.

Here goes...

## How To

### Install yum packages
    $ sudo yum install openssl-devel ncurses-devel zlib-devel

### Compile and install autconf

    $ wget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz
    $ tar xzf autoconf-2.69.tar.gz
    $ cd autoconf-2.69
    $ ./configure
    $ make
    $ sudo make install

### Compile and install libtool

    $ wget http://ftpmirror.gnu.org/libtool/libtool-2.4.2.tar.gz
    $ tar xzf libtool-2.4.2.tar.gz
    $ cd libtool-2.4.2
    $ ./configure
    $ make
    $ sudo make install

### Compile and install Protocol Buffers (an open-source Google project for data interchange)

    $ wget https://protobuf.googlecode.com/files/protobuf-2.5.0.tar.gz
    $ tar xzf protobuf-2.5.0.tar.gz
    $ cd protobuf-2.5.0
    $ ./autogen.sh
    $ ./configure
    $ make
    $ sudo make install

### Compile and install Mosh

    $ wget http://github.com/downloads/keithw/mosh/mosh-1.2.3.tar.gz
    $ tar xzf mosh-1.2.3.tar.gz
    $ cd mosh-1.2.3
    $ ./autogen.sh
    $ PKG_CONFIG_PATH=/usr/local/lib/pkgconfig ./configure
    $ make
    $ sudo make install

### Create wrapper scripts to set LD_LIBRARY_PATH for execution

    # mosh-client
    $ sudo mv /usr/local/bin/mosh-client /usr/local/bin/mosh-client.exe
    $ echo '#!/bin/sh' > /usr/local/bin/mosh-client
    $ echo 'LD_LIBRARY_PATH=/usr/local/lib exec /usr/local/bin/mosh-client.exe "$@"' >> /usr/local/bin/mosh-client
    $ sudo chmod +x /usr/local/bin/mosh-client

    # mosh-server
    $ sudo mv /usr/local/bin/mosh-server /usr/local/bin/mosh-server.exe
    $ echo '#!/bin/sh' > /usr/local/bin/mosh-server
    $ echo 'LD_LIBRARY_PATH=/usr/local/lib exec /usr/local/bin/mosh-server.exe "$@"' >> /usr/local/bin/mosh-server
    $ sudo chmod +x /usr/local/bin/mosh-server

## Usage

    # from client
    $ mosh user@hostname

Now you should have a resiliant connection to your remote host! Use it just like SSH.

## Further Reading

- [Protocol Buffers page (Google Code)](https://code.google.com/p/protobuf/)
- [Mosh home](http://mosh.mit.edu/)
