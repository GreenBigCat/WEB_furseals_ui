GetOneFurseal();
function GetOneFurseal(){
    var fursealId=0;
    xhr = new XMLHttpRequest();
    var url = "https://awwawwapp.herokuapp.com/v1/furseals?size=1";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fursealData = JSON.parse(xhr.responseText)[0]["content"];
            console.log(fursealData);
        }
    };
}
