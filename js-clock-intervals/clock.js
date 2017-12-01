window.onload = function() {
    function setStartTime() {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        seconds = seconds * 5;
        minutes = (minutes * 5) + seconds * 0.08333;
        hours = (hours * 5) * ((minutes * 60) * 0.00138888888);
        document.getElementById("second").setAttribute("style", "transform:rotate(" + seconds + "deg)");
        document.getElementById("minute").setAttribute("style", "transform:rotate(" + minutes + "deg)");
        document.getElementById("hour").setAttribute("style", "transform:rotate(" + hours + "deg)");
        setDivTime();

    }
    setStartTime();
    setInterval(main, 1000);
    function main() {
        moveHand(document.getElementById("second"), 5);
        moveHand(document.getElementById("minute"), 0.08333);
        moveHand(document.getElementById("hour"), 0.00138888888);
        setDivTime();
    }
    function moveHand(e, offset) {
        let x = e.style.transform;
        x = x.replace("rotate(", "");
        x = x.replace("deg)", "")
        x = parseFloat(x);
        if (parseFloat(isNaN(x))) {
            e.setAttribute("style", "transform:rotate(" + 0 + ")");
        } else {
            let newDeg = x + offset;
            e.setAttribute("style", "transform:rotate(" + newDeg + "deg)");
            console.log("moveing to " + newDeg + "deg");
        }
    }
    function setDivTime() {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        document.getElementById("time-second").innerText=seconds;
        document.getElementById("time-minute").innerText=minutes;
        document.getElementById("time-hour").innerText=hours;

    }
}