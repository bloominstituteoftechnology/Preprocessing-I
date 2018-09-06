let skill = document.querySelector('ul.skill-photo');
let cb = function() {
    let listItem = document.querySelectorAll('.skill-item');
    document.querySelector('.skill-label').style.transform = "translate(200px)";
    document.querySelector('.skill-label').style.opacity = "0";
    for (let i = 0; i <= listItem.length; i++) {
    listItem[i].style.transform = "translate(0,-200px)";
    listItem[i].style.fontSize = "2.0rem";
    }  
};

skill.addEventListener("click", function() {
    let listItem = document.querySelectorAll('.skill-item');
    document.querySelector('.skill-label').style.transform = "translate(200px)";
    document.querySelector('.skill-label').style.opacity = "0";
    for (let i = 0; i <= listItem.length; i++) {
    listItem[i].style.transform = "translate(0,-200px)";
    listItem[i].style.fontSize = "2.0rem";
    }
});


