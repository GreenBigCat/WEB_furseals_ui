function DeleteFurseal() {
    var fursealId = sessionStorage.getItem('fsId');
    xhr = new XMLHttpRequest();
    var url = "https://awwawwapp.herokuapp.com/v1/furseals/" + fursealId;
    xhr.open("DELETE", url, false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("deleted");
        }
    };
}

