async function fetchTranslation() {
    text = document.querySelector("textarea").value;
    translation = async () => {
        response = await fetch(genQuery(text));
        console.log(response)
        console.log(response["text"])
    }

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

