function AddFurseal() {
    xhr = new XMLHttpRequest();
    var url = "https://awwawwapp.herokuapp.com/v1/furseals";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert((xhr.responseText));
        }
    };

    function getTheValueById(id) {
        var name_el = document.getElementById(id);
        var name = name_el.value;
        return name;
    }
    var data = JSON.stringify({
        "height": getTheValueById('heightfs'),
        "name": getTheValueById('namefs'),
        "weight": getTheValueById('weightfs'),
        "lifestyle": getTheValueById('lsfs'),
        "hobby": getTheValueById('hobbyfs'),
        "country": getTheValueById('countryfs')
    });
    xhr.send(data);
    //setInterval(window.location.href = 'list.html',500);
}