document.getElementById("defaultOpen").click();

function openDescription(evt, descName) {
    var i, navigator, navigator_components;

    navigator = document.getElementsByClassName("navigator-components");
    for( i = 0; i < navigator.length; i++) {
        navigator[i].style.display = "none";
    }

    navigator_components = document.getElementsByClassName("navigator-components");
        for (i = 0; i < navigator_components.length; i++) {
            navigator_components[i].className = navigator_components[i].className.replace(" active", "");
    }

    document.getElementById(descName).style.display = "block";
    evt.currentTarget.className += " active";

    console.log(evt.currentTarget.className);
}
