function update(preview){
    console.log(preview.alt);
    console.log(preview.src);
    let imgDiv = document.getElementById("image").querySelector("#image img");
    imgDiv.src = preview.src;
    imgDiv.alt = preview.alt;
}


window.addEventListener('load', function() {
    console.log("Page has loaded.");
    addTabFocus();
});