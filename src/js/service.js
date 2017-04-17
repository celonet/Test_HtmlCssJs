function dribbleService(callback) {
    let url = `https://api.dribbble.com/v1/shots?access_token=${configuration().token}`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.addEventListener("load", function () {
        var shots = JSON.parse(xhr.responseText);
        callback(shots);
    });

    xhr.send();
};

