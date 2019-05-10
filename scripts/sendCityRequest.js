// 1st - parameter - text, 2nd - place to insert the response
function sendCityRequest(city, cityPos) {
    var xmr = new XMLHttpRequest();
    xmr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var div = document.getElementById("descriptionRows").children[cityPos];
            var colorspan = document.createElement("span");
            div.innerHTML = "";
            colorspan.style = "color: red";
            colorspan.innerHTML = city.toUpperCase();
            div.appendChild(colorspan);
            div.innerHTML += ": " + this.responseText;
        }
    }
    xmr.open("GET", "/php/getCityResponse.php?q=" + city, true);
    xmr.send();
}