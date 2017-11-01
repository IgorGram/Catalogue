"use strict";

class HttpService{
    static getJSON(url, successHandler){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status !== 200){
                alert(xhr.status + ': ' + xhr.statusText);
            }else {
                let data = JSON.parse(xhr.responseText);

                successHandler(data);
            }
        };
    }
}