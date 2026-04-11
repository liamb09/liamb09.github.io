---
layout:      post
title:       "Making this blog"
date:        2024-07-01 11:30:00 -0500
description: In this post, I discuss how I made this blog site.
image:       blog.png
tags:        coding
---

Hi again! Now that I have fully fleshed out this blog page to the point that I am happy, I want to sort of debrief and explain how I went from clueless with Jekyll to slightly less clueless and some of the problems I had.

After finishing my portfolio page, I was eager to move on to a blog, because, well, that’s just what I’ve seen a lot of people do. Also, my 7th grade coding teacher said that this is a good thing to have, so here I am.

At first, I was sure how I should go about making a blog. The first idea that came to my mind was just hard-coding it into a bunch of HTML pages, but after some googling and common sense, I ruled out that option. Next, I moved on to something that I had seen when publishing my portfolio page with GitHub Pages: Jekyll, a static site generator. I’m still not completely clear on what that means, but I have seen that it’s a useful tool for simplifying the process of creating, storing, and displaying blog posts. However, it’s also pretty intimidating when you get it all together, and there are a lot of files and folders that seem pretty complex. A helpful [tutorial](https://www.youtube.com/watch?v=EmSrQCDsMv4&t) by Bill Raymond helped clear some things up and get me started.

Unfortunately, insufficient planning and research beforehand led me to create the Jekyll project inside the portfolio page that I had already finished, which messed a lot of things up and made everything more confusing because I had random files from my original page that didn’t show up in the tutorial. Luckily, I was able to restore everything, and I decided to start my Jekyll blog in a different repository under the ``blog`` subdomain of my site, which seemed more appropriate than just putting it after my portfolio of projects. This allowed me to focus more on the blog without messing up my original page, and I was able to follow the tutorial better because everything looked the same.

After getting over that initial hurdle of having everything configured, I began to override the default Jekyll theme ``minima`` to shift to the same theme as my original page. In Jekyll, this can be done by creating the ``_layouts`` and ``_includes`` folders, in which you can make files such as ``home.html`` in ``_layouts`` to override the default home page. This is where another bonus of Jekyll comes into play: creating your own elements in this manner allows you to clean your code too. For example, adding ``header.html`` and ``footer.html`` into the ``_includes`` folder allows you to easily insert the same header and footer into all your other pages with a command such as ``{ % include header.html %}``.

Overriding default Jekyll styles was easy enough when I was styling the site for large screens, but once I began adding in CSS media queries to make the site responsive for other devices, I got really stuck. For some reason, only some elements were reflecting the adjusted styles, and the other ones just wouldn’t budge. After coming back to the issue after fixing other small problems with the blog, I realized that I had made one tiny error: I had neglected to put the ``<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=yes" />`` tag in the ``<head>`` of my HTML, which enabled CSS media queries. Typical small coding error. Finally, I was able to make my site responsive!

Next, I moved on to smaller details. The main thing that was left to do was styling code snippets in the blog like ``this``. This proved to be simple, for you can just look into the ``main.css`` file that holds the default styles, and transfer them over to your custom CSS files. Lastly, I added a simple blue circle as the favicon.

## Final words

Looking back, this blog came together much faster than I imagined, for once I learned a little bit about Jekyll, I was able to (relatively) easily fashion these couple pages together. I’m pretty happy with how it turned out, so now I just have to actually write stuff for it! :)