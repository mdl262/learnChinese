function resize() {
    textArea = document.querySelectorAll("#input")[0];
    bounding1 = textArea.getBoundingClientRect()
    span = document.querySelector('span')
    content = textArea.innerText
    document.querySelector("span").innerText = content || "Type Chinese"
    bounding2 = span.getBoundingClientRect()
    currentSize = getComputedStyle(textArea).fontSize;

    heightScale = (bounding1.height - 4*Number(getComputedStyle(textArea).paddingBottom.replace("px",""))) / bounding2.height
    widthScale = (bounding1.width - 4*Number(getComputedStyle(textArea).paddingLeft.replace("px",""))) / bounding2.width

    newFontSize = "calc("+currentSize+"*"+Math.min(heightScale, widthScale)+")"

    span.style.fontSize = newFontSize
    textArea.style.fontSize = newFontSize
}

window.addEventListener('load',
    resize(), false);

window.onresize = resize();