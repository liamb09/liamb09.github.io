projects = [
    {
        title: "Soft Body Physics Engine",
        description: "A physics engine built completely from scratch, made up of point masses and springs that connect to form shapes and interact with each other.",
        link: "https://github.com/liamb09/soft-body-physics",
        languages: "C++"
    },
    {
        title: "Bread Log Manager",
        description: "A Google Apps Script web app that enables me to add formatted entries to my sourdough bread log from my phone. Instructions to use it for yourself can be found on the GitHub.",
        link: "https://github.com/liamb09/bread-log-manager",
        languages: "AppsScript, HTML, CSS, JS"
    },
    {
        title: "Rundex",
        description: "A running log app made with flutter featuring many capabilities such as adding sets to your workout, custom routes, and more.",
        link: "https://github.com/liamb09/Rundex",
        languages: "Flutter"
    },
    {
        title: "Slope Field Generator",
        description: "A \"minimalistic\" website that renders slope fields, as well as allowing you to check particular solutions or estimate them using Euler's Method. You can visit it <a href=\"https://liamb09.github.io/slope-field-generator/\">here</a>.",
        link: "https://github.com/liamb09/slope-field-generator",
        languages: "HTML, CSS, JS"
    },
    {
        title: "Flashcards",
        description: "My attempt at making a study site that actually works and doesn't flood your screen with ads. Allows you to create, edit, and delete flashcard stacks. Plus, it has some cool animations. You can visit it <a href=\"https://liamb09.github.io/flashcards/\">here</a>.",
        link: "https://github.com/liamb09/flashcards",
        languages: "HTML, CSS, JS"
    },
    {
        title: "Countdown",
        description: "A little site that gives you the real-time countdown to an event of your choice, down to the second. You can visit it <a href=\"https://liamb09.github.io/countdown/\">here</a>.",
        link: "https://github.com/liamb09/countdown",
        languages: "HTML, CSS, JS"
    },
    {
        title: "LogRun",
        description: "This simple running log was one of the first websites I made. It allows you to enter the details of your run, as well as customize the background color and text color on the display page.",
        link: "https://github.com/liamb09/LogRun",
        languages: "HTML, CSS, JS"
    },
    {
        title: "Breathing Exercises",
        description: "A Garmin app (specifically developed for the Forerunner 55) that guides you through breathing exercises. At the moment, it has box breathing and 4-7-8 breathing.",
        link: "https://github.com/liamb09/Garmin-Breathing-Exercises",
        languages: "ConnectIQ"
    },
    {
        title: "Conway's Game of Life",
        description: "This is a website I made a while back that simulates the famous Conway's Game of Life.",
        link: "https://github.com/liamb09/Conway-s-Game-of-Life",
        languages: "HTML, CSS, JS"
    },
    {
        title: "Swimming Scorer",
        description: "This Python program takes your time in some swimming event and returns your time standard, as well has how much time you need to drop to reach the next standard.",
        link: "https://github.com/liamb09/Swimming-Times",
        languages: "Python"
    },
    {
        title: "Python Wordplay Projects",
        description: "This is a collection of various python projects I have made, including an anagram finder, a palingram finder, a spelling bee solver, a wordle solver, and a pig latin translator, as of now.",
        link: "https://github.com/liamb09/Fun-Wordplay-Projects",
        languages: "Python"
    },
    {
        title: "Gravity Simulator",
        description: "This was a quick Java program I wrote both to practice for the AP test and to make something cool.",
        link: "https://github.com/liamb09/gravity_simulator",
        languages: "Java"
    },
    {
        title: "Running Scorer",
        description: "This python program gives you a score based on a certain mark you have achieved in a given event, per the World Athletics Scoring Table, which indicates how impressive your mark is.",
        link: "https://github.com/liamb09/Running-Scorer",
        languages: "Python"
    },
    {
        title: "Pong",
        description: "This was a simple practice program I made to get used to Godot for my Algebra II final project.",
        link: "https://github.com/liamb09/Pong-in-Godot",
        languages: "Godot"
    },
    {
        title: "Algebra II Final Project",
        description: "This was my Algebra II class's final project, in which I was part of the team that developed games for an arcade cabinet using Godot. My game was similar to Deathball.",
        link: "https://github.com/liamb09/Algebra-2-Final-Project-Games",
        languages: "Godot"
    },
    {
        title: "Portfolio Website",
        description: "This is the very website you are viewing right now! It is made with HTML, CSS, and vanilla Javascript.",
        link: "https://github.com/liamb09/liamb09.github.io",
        languages: "HTML, CSS, JS"
    },
    {
        title: "Blog",
        description: "This is the blog I made with Jekyll, which can be found by clicking \"Blog\" at the top of this page. You can find out more about how I made it by reading the second blog post.",
        link: "https://github.com/liamb09/blog",
        languages: "HTML, CSS, JS, Jekyll"
    },
];

window.onload = function() {
    const container = document.getElementById("project-container");

    projects.forEach(project => {
        const div = document.createElement("div");
        div.id = "project";

        div.innerHTML = `
            <a href="${project.link}">${project.title}</a> (${project.languages})
            <p>${project.description}</p>
        `;

        container.appendChild(div);
    });
}