// JS goes here

function openSideMenu(){
    document.getElementById('side-menu').style.width = '100%';
    document.getElementById('main').style.marginRight = '250px';
}

function closeSideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}


// function myFunction(imgs) {
//     // Get the expanded image
//     var expandImg = document.getElementById("expandedImg");
//     // Get the image text
//     var imgText = document.getElementById("imgtext");
//     // Use the same src in the expanded image as the image being clicked on from the grid
//     expandImg.src = imgs.src;
//     // Use the value of the alt attribute of the clickable image as text inside the expanded image
//     imgText.innerHTML = imgs.alt;
//     // Show the container element (hidden with CSS)
//     expandImg.parentElement.style.display = "block";
//   }