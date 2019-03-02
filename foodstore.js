var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;
    
    // Windows Explorer
    if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch(e) {
            xmlHttp = false;
        }
    }
    // other browser such as Firefox, Google chrome
    else {
        try {
            xmlHttp = new XMLHttpRequest();
        } 
        catch(e) {
            xmlHttp = false;
        }
    }
    
    if (!xmlHttp) {
        alert("cant create that object hoss!");
    }
    else {
        return xmlHttp;
    }
}

function process() {
    
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4) {
        food = encodeURIComponent(document.getElementById("userInput").value);
        xmlHttp.open("GET", "http://blog.emba.kr/AJAX/foodstore.php?food=" + food, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }
    else {
        setTimeout('process()', 1000);
    }
}

function printTime() {
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var seconds = now.getSeconds();
    
    return (hours+':'+mins+':'+second);
}

function handleServerResponse() {
    if (xmlHttp.readyState==4) {    // communication is done
        if (xmlHttp.status==200) {  // OK
            
            xmlResponse = xmlHttp.responseXML;
            xmlDocumentElement = xmlResponse.documentElement;
            message = xmlDocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
            setTimeout('process()', 1000);
            
        }
        else {
            alert('Something went wrong!');
        }
    }
}
