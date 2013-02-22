function XHR() {
    // public
    this.post = static_post;
    this.get = static_get;

    // private
    this.getXmlHttp = static_getXmlHttp;
    this.handleError = handleError;
    return this;
}

function static_post(url, json, callback) {
    var xmlhttp = this.getXmlHttp()
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.setRequestHeader('Charset', 'utf-8');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState != 4) return

        clearTimeout(timeout) // очистить таймаут при наступлении readyState 4
        if (xmlhttp.status == 200) {
            // Все ок
            //return xmlhttp.responseText;
            //console.log(xmlhttp.responseText);
            callback(xmlhttp.responseText);
        } else {
            this.handleError(xmlhttp.statusText); // вызвать обработчик ошибки с текстом ответа
        }
    }
    xmlhttp.send(json);
    // Таймаут 10 секунд
    var timeout = setTimeout(function () {
        xmlhttp.abort();
        this.handleError("Time over")
    }, 10000);
}

function static_get(url, callback) {
    var xmlhttp = this.getXmlHttp()
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            }
        }
    };
    xmlhttp.send(null);
}

// this will return xmlhttp obj

function static_getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

// error handler

function handleError(message) {
    console.log(message);
}