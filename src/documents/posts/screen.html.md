---
date: 2012-09-19
title: Screen Cheatsheet
authorLink: 'https://github.com/retiman'
authorName: 'min'
authorImage: 'https://secure.gravatar.com/avatar/cf4e42d9d740e60fd29c039d4a8805c9?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
layout: post
---

Here's my screen cheat sheet. It's simultaneous incredibly useful and ridiculous to configure.  
Actually reminds me of my other favorite tool with this syndrome: vim.

### Configuration

I like to bind C-o instead of C-a for screen commands.  
I feel that C-o is easier for my old hands to hit.

Here's the skinny on what goes inside that cryptic screenrc:  
Use C-o to issue commands to screen

    escape ^Oo
 
I also bind F5 and F6 to previous and next window:

F5 for previous window

    bindkey -k k5 prev

F6 for next window

    bindkey -k k6 next

### SSH

To be able to use ssh-agent within screen, you'll need this in your screenrc:

    setenv SSH_AUTH_SOCK $HOME/.ssh/screen_agent
    screen -t remote ssh-agent ssh-agent -a $SSH_AUTH_SOCK $SHELL

### Internal commands

    C-o "         Shows a list of sessions.
    C-o w         Shows name of session the lower left.
    C-o c         Creates a new session.
    C-o d         Detaches the current session.
    C-o A         Names the current session.
    C-o n         Cycle to next session.
    C-o p         Cycle to previous session.
    C-o F         Fit the session to the current terminal.
    C-o :quit     Quit all running sessions.
    C-o S         Open a new region in a session.
    C-o <TAB>     Enter a newly created region.
    C-o X         Close a region in screen.
    C-o ]         Enables copy mode for copying or scrolling; use PgUp, or PgDn, etc.
                  Press <ENTER> to mark text for copying.
                  Press <ENTER> again to copy the text.
                  Press C-o ] again to paste.

### External commands

    screen -ls    List sessions.
    screen -r     Reattach a session.
    screen -r foo Reattach to foo.
    screen -S foo Create a screen named foo.
 
**Conclusion**  
Clear as mud right?

