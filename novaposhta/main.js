let requestURL = 'https://api.odesseo.com.ua/warehouses';
let request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
