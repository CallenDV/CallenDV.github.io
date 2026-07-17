function gardenlinkthing() {
    let sites = [
        "https://thecheesespot.xyz/new/sandwich.html"
    ]
    let timer = 2;
    let iframe = document.getElementById('iframe');

    for(let i = 0; i < 10000000000; i++) {
        let random = Math.floor(Math.random() * sites.length);
        iframe.src = random; 
    }
}

gardenlinkthing(); // this doesnt work btw