
function gardenlinkthing() {
    let sites = [
        ""
    ]
    let timer = 30;
    let iframe = document.getElementById('iframe');

    setInterval(function() {
        let random = Math.floor(Math.random() * sites.length);
        iframe.src = sites[random];
    }, timer * 1000);
}

gardenlinkthing();