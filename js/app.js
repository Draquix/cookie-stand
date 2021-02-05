'use strict';
var theTimesArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var totalCookies = [];
var locations = [];

function Location(Name,min,max,avg) {
    this.cityName = Name;
    this.minCustomer = min;
    this.maxCustomer = max;
    this.avgCookiesPerCustomer = avg;
    this.customerPerHour = [];
    this.cookiePerHour = [];
    this.totalCookies = 0;
}
    Location.prototype.generateCustomerPerHour = function () {
        for (var i = 0; i < theTimesArray.length; i++) {
            this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
        }
    }
    Location.prototype.setCookiePerHour = function() {
        this.generateCustomerPerHour();
        for (var i=0; i < theTimesArray.length; i++) {
            this.generateCustomerPerHour = function (){
                var thisTotal = Math.ceil(this.customerPerHour[i]*this.cookiePerHour);
                this.TotalCookies += thisTotal;
                this.cookiePerHour.push(this.TotalCookies);
            }
        }
    }
    Location.prototype.render = function() {
        this.setCookiePerHour();

        var tableBody = document.getElementById('table-body');
        var newRow = document.createElement('tr');
        var cityName = document.createElement('td');
        cityName.textContent = this.Name;
        //console.log(this.cityName.textContent);
        newRow.appendChild(cityName);
        tableBody.appendChild(newRow);
        
        
        //newRow.appendChild(document.createTextNode(this.Name));
        
        // tableBody.appendChild(newRow);
        // var list = document.createElement('tr');
        // var shops = document.createElement('td');
        // var cookieSales = [];
        // shops.textContent = this.cityName;
        // tableBody.appendChild(list);
        // list.appendChild(shops);
        // for (var i = 0; i < theTimesArray.length; i++) {
        //     var data = document.createElement('td')
        //     data.textContent = this.cookiePerHour[i];
        //     cookieSales[i] = this.cookiePerHour[i];
        //     list.appendChild(data);
        // }
        // cookieSales.push(this.totalCookies);
        // cookieTotal.push(cookieSales);
        // var storeData = document.createElement('td');
        // storeData.textContent = this.totalCookies;
        // table.appendChild(tableBody);
        // tableBody.appendChild(list);
        // list.appendChild(storeData);
    // }
        
}
  
    function random (min,max) {
        var answer = Math.floor((Math.random())*(max-min))+min;
        return answer;
    }
    



var Seattle = new Location("Seattle", 23, 65,6.3);
var Tokyo = new Location("Tokyo",3,24,1.2);
var Dubai = new Location("Dubai",11,38,3.7);
var Paris = new Location("Paris",20,38,2.3);
var Lima = new Location("Lima",2,16,4.6);

Seattle.generateCustomerPerHour(Seattle.minCustomer, Seattle.maxCustomer);
Seattle.setCookiePerHour();
Seattle.render();
// location.push(Seattle);
var theTable = document.getElementById('table');

function makeHeader() {
    var thead = document.getElementById('table'); //the table
    var headRow = document.getElementById('head'); //the head
    var hourRow = document.getElementById('blank');//a td to append
    var city = document.createElement('th');//make th
    city.textContent = "City   ";
    headRow.appendChild(city);  //the head . append th
    for (var i = 0; i < theTimesArray.length; i++) {
        var list = document.createElement('th'); //creat all th
        list.textContent = theTimesArray[i];
        headRow.appendChild(list);   //head . append th
    }
    var blank = document.getElementById('blank');
    blank.appendChild(document.createTextNode("    "));
    hourRow.textContent = "Total For Location";
    headRow.appendChild(hourRow);
    thead.appendChild(headRow);
    //table.appendChild(thead);
}
makeHeader();