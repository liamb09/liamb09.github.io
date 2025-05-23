projectInfo = [
    // [title, description, image path, github link, languages]
    ["Rundex", "A running log app made with flutter featuring many capabilities such as adding sets to your workout, custom routes, and more. This is one of my main ongoing projects at the moment.", "assets/rundex.png", "https://github.com/liamb09/Rundex", ["flutter"]],
    ["Slope Field Generator", "A \"minimalistic\" website that renders slope fields, as well as allowing you to check particular solutions or estimate them using Euler's Method. You can visit it <a href=\"https://liamb09.github.io/slope-field-generator/\" target=\"_blank\">here</a>.", "assets/slope-field-generator.png", "https://github.com/liamb09/slope-field-generator", ["html", "css", "js"]],
    ["Flashcards", "My attempt at making a study site that actually works and doesn't flood your screen with ads. Allows you to create, edit, and delete flashcard stacks. Plus, it has some cool animations. You can visit it <a href=\"https://liamb09.github.io/flashcards/\" target=\"_blank\">here</a>.", "assets/flashcards.png", "https://github.com/liamb09/flashcards", ["html", "css", "js"]],
    ["Countdown", "A little site that gives you the real-time countdown to an event of your choice, down to the second. You can visit it <a href=\"https://liamb09.github.io/countdown/\" target=\"_blank\">here</a>.", "assets/countdown.png", "https://github.com/liamb09/countdown", ["html", "css", "js"]],
    ["LogRun", "This simple running log was one of the first websites I made. It allows you to enter the details of your run, as well as customize the background color and text color on the display page.", "assets/logrun.png", "https://github.com/liamb09/LogRun", ["html", "css", "js"]],
    ["Breathing Exercises", "A Garmin app (specifically developed for the Forerunner 55) that guides you through breathing exercises. At the moment, it has box breathing and 4-7-8 breathing.", "assets/breathingExercises.png", "https://github.com/liamb09/Garmin-Breathing-Exercises", ["connectIQ"]],
    ["Conway's Game of Life", "This is a website I made a while back that simulates the famous Conway's Game of Life.", "assets/conwaysGameOfLife.png", "https://github.com/liamb09/Conway-s-Game-of-Life", ["html", "css", "js"]],
    ["Swimming Scorer", "This Python program takes your time in some swimming event and returns your time standard, as well has how much time you need to drop to reach the next standard.", "assets/python.svg", "https://github.com/liamb09/Swimming-Times", ["python"]],
    ["Python Wordplay Projects", "This is a collection of various python projects I have made, including an anagram finder, a palingram finder, a spelling bee solver, a wordle solver, and a pig latin translator, as of now.", "assets/python.svg", "https://github.com/liamb09/Fun-Wordplay-Projects", ["python"]],
    ["Gravity Simulator", "This was a quick Java program I wrote both to practice for the AP test and to make something cool.", "assets/gravitySimulator.png", "https://github.com/liamb09/gravity_simulator", ["java"]],
    ["Running Scorer", "This python program gives you a score based on a certain mark you have achieved in a given event, per the World Athletics Scoring Table, which indicates how impressive your mark is.", "assets/python.svg", "https://github.com/liamb09/Running-Scorer", ["python"]],
    ["Pong", "This was a simple practice program I made to get used to Godot for my Algebra II final project.", "assets/pong.png", "https://github.com/liamb09/Pong-in-Godot", ["godot"]],
    ["Algebra II Final Project", "This was my Algebra II class's final project, in which I was part of the team that developed games for an arcade cabinet using Godot. My game was similar to Deathball.", "assets/alg2FinalProject.jpeg", "https://github.com/liamb09/Algebra-2-Final-Project-Games", ["godot"]],
    ["Portfolio Website", "This is the very website you are viewing right now! It is made with HTML, CSS, and vanilla Javascript.", "assets/website.png", "https://github.com/liamb09/liamb09.github.io", ["html", "css", "js"]],
    ["Blog", "This is the blog I made with Jekyll, which can be found by clicking \"Blog\" at the top of this page. You can find out more about how I made it by reading the second blog post.", "assets/blog.png", "https://github.com/liamb09/blog", ["html", "css", "js", "jekyll"]],
]

function openDialog (infoID) {
    var currentProject = projectInfo[infoID];
    var imgClass = "";
    if (currentProject[2] == "assets/python.svg") {
        imgClass = "python-img";
    } else if (currentProject[2] == "assets/runningLogApp.png") {
        imgClass = "running-log-app-img"
    }
    var projectIcons = getIcons(infoID);
    document.getElementById("dialog-details").innerHTML = `<h1>${currentProject[0]}</h1><br /><div id="project-icons">${projectIcons}</div><br /><p>${currentProject[1]}</p><br /><img src="${currentProject[2]}" alt="${currentProject[0]}" class="${imgClass}"/><br /><br /><a href="${currentProject[3]}" target="_blank">View ${currentProject[3].split("/")[currentProject[3].split("/").length-1]} on Github &#x2197;</a>`; 
    document.getElementById("project-info-dialog").showModal();
}

function getIcons (projectID) {
    var projectIcons = "";
    projectInfo[projectID][4].forEach((element) => {
        projectIcons += `<img id="project-icon" src="assets/${element}.svg" />`;
    });
    return projectIcons;
}

window.onload = function() {
    var projects = "";
    for (var i = 0; i < projectInfo.length; i++) {
        console.log(i);
        projects += `
                    <div id="project-card" onclick="openDialog(${i})">
                        <h2>${projectInfo[i][0]}</h2>
                        <div id="project-icons">
                            ${getIcons(i)}
                        </div>
                    </div>
                    `;
    }
    document.getElementById("project-list").innerHTML = projects;
    dialog = document.getElementById("project-info-dialog")
    dialog.addEventListener('click', (e) => {
        if (e.target.nodeName == "DIALOG") {
            closeDialog();
        }
    });
};

function closeDialog () {
    dialog = document.getElementById("project-info-dialog");
    dialog.setAttribute('closing', "");
    dialog.addEventListener('animationend', (e) => {
        dialog.removeAttribute('closing');
        dialog.close();
    }, {once: true})
}
