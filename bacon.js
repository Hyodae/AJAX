var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;
    
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    return xmlHttp;
}

function process() {
    if (xmlHttp) {
        try {
            xmlHttp.open("GET", "http://127.0.0.1/AJAX/bacon.txt"), true);
        }
        catch(e) {
            alert(e.toString());
        }
    }
}