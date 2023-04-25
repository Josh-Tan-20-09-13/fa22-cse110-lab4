function answer() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(answer, 1000);
