GetOneFurseal();
function getTheValueById(id) {
    var name_el = document.getElementById(id);
    var name = name_el.value;
    return name;
}
function GetOneFurseal() {
    var fursealId = sessionStorage.getItem('fsId');
    xhr = new XMLHttpRequest();
    var url = "https://awwawwapp.herokuapp.com/v1/furseals/" + fursealId;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fursealData = JSON.parse(xhr.responseText);
            console.log(fursealData);
            document.getElementById("namefs").innerHTML=fursealData.name;
            document.getElementById("weightfs").innerHTML=fursealData.weight;
            document.getElementById("heightfs").innerHTML=fursealData.height;
            document.getElementById("countryfs").innerHTML=fursealData.country;
            document.getElementById("hobbyfs").innerHTML=fursealData.hobby;
            document.getElementById("lsfs").innerHTML=fursealData.lifestyle;
        }
    };
}
function EditFurseal() {
    var fursealId = sessionStorage.getItem('fsId');
    xhr = new XMLHttpRequest();
    var url = "https://awwawwapp.herokuapp.com/v1/furseals/"+fursealId;
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
        }
    };
    var data = JSON.stringify({
        "height": getTheValueById('heightfs'),
        "name": getTheValueById('namefs'),
        "weight": getTheValueById('weightfs'),
        "lifestyle": getTheValueById('lsfs'),
        "hobby": getTheValueById('hobbyfs'),
        "country": getTheValueById('countryfs')
    });
    xhr.send(data);
}