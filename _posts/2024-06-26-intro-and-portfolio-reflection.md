---
layout:      post
title:       "Introduction + Portfolio Reflection"
date:        2024-06-26 16:00:00 -0500
description: This post goes through how I made my portfolio site.
image:       website.png
tags:        coding
---

Hi! My name is Liam, and this is the first post in my blog. I have just finished building this site that serves to showcase my projects, but more on that later.

I’m still not completely sure what I want to discuss in my blog posts, but it will likely be a mishmash of anything and everything from coding to running to music to math to whatever is on my mind.

Right now I’m kinda setting myself up to make frequent posts, but that’s not realistic, especially once school starts up again. I'm just planning to try to get something down every few weeks.

## Making this website

Whew! Finishing this website was a lot more of a thorough task than many of my other projects. I’ve never really made something that I publish online before, so I spent a lot more time than usual tweaking the finer details, but in the end, although I’m no graphic designer, I’m pretty happy with how it turned out. I’ve never really seriously made a website before, so it took a while to get used to basic CSS stuff, but I’ve definitely come away with a much better understanding of it.

My goal was to create a simple website with my projects, and maybe a blog later on. I knew there were a lot of ways to make a website, but I figured that it would be best to stick to something I somewhat know (vanilla HTML, CSS, and JavaScript) rather than trying something completely new.

I ran into one of my first main problems with my portfolio list of projects. To simplify the layout of the page, I decided to create little cards for each project and display popups with more information when you click on them. Luckily, the ``<dialog>`` tag built into HTML lets you do just that. At first, I was struggling to center the popup, although according to the documentation, they are centered by default. This was very frustrating, and I felt that I had hit a dead end, until I realized that I had put ``margin: 0;`` under the html tag of my CSS at the beginning of the project. This had been negating the margin that centers a ``<dialog>`` by default, and by removing this line, my problem was solved.

Another tough thing was animating the ``<dialog>``. I wanted it to slide and fade in, but I was having trouble because of the way ``<dialog>``s work in HTML. When you close a ``<dialog>``, it sets the ``display`` to ``none``, and you cannot animate it in from there. After some digging, I found a really helpful [video](https://www.youtube.com/watch?v=4prVdA7_6u0) from Kevin Powell that used a clever workaround: instead of immediately closing the popup and therefore setting ``display`` to ``none``, you can first animate its opacity down to 0 to fade it out, then close it. Using a similar technique for opening the popup worked great for me, and I was all set.

```javascript
// To animate a closing dialog
function closeDialog () {
    dialog = document.getElementById("project-info-dialog");
    // Add the closing class to the dialog to fade it out
    dialog.setAttribute('closing', "");
    // Once the animation has ended, close the dialog
    dialog.addEventListener('animationend', (e) => {
        dialog.removeAttribute('closing');
        dialog.close();
    // Kill the listener after to prevent unwanted closing
    }, {once: true})
}
```

From there, it was just making final touches. I learned how to use CSS media queries to make my site responsive, which was surprisingly easy. Then came the part that was really uncharted territory for me: hosting my site online. A couple of my friends have portfolio websites with their name as the domain, which would be cool, but I eventually settled on using GitHub Pages, which turned out to be a seamless transition, and best of all, it was free. Plus, I can buy a domain to redirect to this site later if I want to.

## Final words

Well, that’s just about it. My first blog post, finished! At the time of writing this, I haven’t even finished touching up the blog part of my website, but I wanted to get something down about the homepage of my website.