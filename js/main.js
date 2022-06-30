window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
    }
}

let controller = new AbortController();
const queryInterval = 500;
let timeout;

function fetchTranslation() {

    resize()

    clearTimeout(timeout)

    timeout = setTimeout(async function () {
        text = document.querySelector("#input").innerHTML
        console.log("try")
        controller.abort()
        controller = new AbortController();

        if (text == "") {
            document.getElementById('translation').innerHTML = ""
        } else {
            response = fetch(genQuery(text), {
                signal: controller.signal
            })
                .then(response => response.json())
                .then(data => interpret(data))
                .catch(error => {
                    document.getElementById('translation').innerHTML = "" // handle the error
                });
            console.log("sent fetch")
        }

    }, queryInterval);


}

var x;

function interpret(data) {
    console.log(data)
    x = data
    console.log(data['text'])
    document.getElementById('translation').innerHTML = data['text']
}

function genQuery(text) {
    const prefix = "https://learnchineserest.azurewebsites.net/?query=";
    return prefix + encodeURI(text);
}

fetch("https://learnchineserest.azurewebsites.net/?query=%E5%86%8D%E8%A7%81")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.log(error) // handle the error
    });

