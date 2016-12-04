function GetOneFurseal() {
    var fursealName = sessionStorage.getItem('fsName');
    console.log("fursealName "+fursealName);
    xhr = new XMLHttpRequest();
    var url = "https://awwawwapp.herokuapp.com/v1/furseals?name=" + fursealName;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fursealData = JSON.parse(xhr.responseText)[0]["content"];
        }
    };
}
