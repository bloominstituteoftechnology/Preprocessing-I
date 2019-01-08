window.onload = function() {
    getIPs(function(ip){console.log(ip);});
    modifyComments();
}
function modifyComments() {
    let els = document.getElementsByClassName("comment");
    for(let i=0; i<els.length; i++) {
        //get text length for element
        let length = els[i].textContent.length;
        //create spans for new lines
        let spanBefore = document.createElement("span");
        spanBefore.classList.add("color-comment");
        spanBefore.textContent = "/";
        for(let j=0; j < length + 3; j++) {spanBefore.textContent += "*";}
        let spanAfter = document.createElement("span");
        spanAfter.classList.add("color-comment");
        for(let j=0; j < length + 3; j++) {spanAfter.textContent += "*";}
        spanAfter.textContent += "/";
        //create new lines
        let before = document.createElement("div");
        before.classList.add("line");
        before.appendChild(spanBefore);
        let after = document.createElement("div");
        after.classList.add("line");
        after.appendChild(spanAfter);
        //add new lines to the dom
        els[i].parentElement.parentElement.insertBefore(before, els[i].parentElement);
        els[i].parentElement.parentElement.insertBefore(after, els[i].parentElement.nextSibling);
    }
}