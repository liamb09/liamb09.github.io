---
layout:      post
title:       "Filtering posts"
date:        2024-07-03 16:00:00 -0500
description: Here I talk about how I created a filter for my blog posts.
image:       blogWithFilter.png
tags:        coding
---

Hello!

Before I moved on to my other projects, there was one main thing that I wanted to do with my blog, which was to create a filter. If I do end up making posts about a variety of topics, as I hope to do, I want an easy way to see only the posts about a certain topic. Also, Jekyll has a built-in ``tags`` feature that lets you basically sort posts, so I thought I might as well try it.

## Making the filter

My first plan for the filter was to somehow have some JavaScript variable that I could use to show only the posts with that tag, with something like this:

```html
{ % for post in site.posts %}
    { % if post.tags contains "some-tag" %}
        <!-- Display the post -->
    { % endif %}
{ % endfor %}
```

However, this method would be hard to accomplish, and besides, as [this](https://stackoverflow.com/questions/32934372/jekyll-use-the-js-variable-for-if-condition) Stack Overflow question informed me, this kind of defeats the purpose of Jekyll: a _static_ site generator. This is not really respecting the static component of Jekyll, which is why I moved on to a different approach that the answer suggested: hiding irrelevant content with JavaScript.

I was able to do this by utilizing the ``hidden`` HTML attribute to hide irrelevant posts in a filter. I did this by creating two main Javascript functions to handle the hiding and showing of posts.

The first of these functions was ``filterPosts``, which takes the name of the tag to filter for when a tag filter button is clicked at the top of the Blog page.

```javascript
function filterPosts (tag) {
    // Show remove filter button
    document.getElementById("remove-filter").removeAttribute("hidden");

    // Make sure tag is visibly selected
    unselectTags();
    tags = document.getElementsByClassName("tag-menu-item");
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].innerHTML == tag) {
            tags[i].classList.add("selected-tag");
        }
    }

    // Make sure they're all hidden
    liElements = document.getElementsByTagName("li");
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].setAttribute("hidden", "");
    }

    // Remove hidden from posts that have tag
    selectedPosts = document.getElementsByClassName(tag);
    for (var i = 0; i < selectedPosts.length; i++) {
        selectedPosts[i].removeAttribute("hidden");
    }
}
```

``filterPosts`` does a few things:
1. First, it shows the remove filter button, which appears as an X, that can clear the filter.
1. Then, it makes sure only the current filter tag is selected.
1. Finally it hides all posts before unhiding only the posts that have the selected tag.

This was also the first time I worked with manipulating HTML attributes and classes with JavaScript, which proved to be easy and effective.

Next, I created a function to clear all filters: ``removeFilter``.

```javascript
function removeFilter () {
    // Make sure no posts are hidden
    liElements = document.getElementsByTagName("li");
    for (var i = 0; i < liElements.length; i++) {
        if (liElements[i].hasAttribute("hidden")) {
            liElements[i].removeAttribute("hidden");
        }
    }

    // Hide remove filter button
    document.getElementById("remove-filter").setAttribute("hidden", "");

    unselectTags();
}
```

This resets everything by
1. Showing all posts
1. Removing the remove filter button
1. Making sure all the tags are deselected

I found that these functions worked together pretty seamlessly, easily creating the functionality I was going for.

## Final words

Adding this feature to my blog site satisfies my vision for my blog site as of now, so now I will likely move on to other projects here on out.
