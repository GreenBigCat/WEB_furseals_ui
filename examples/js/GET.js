xhr = new XMLHttpRequest();
var url = "https://awwawwapp.herokuapp.com/v1/furseals";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        response = JSON.parse(xhr.responseText)[0]["content"];
        console.log(response +" js file");
    }
};