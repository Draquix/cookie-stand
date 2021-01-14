var theTimesArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// var Seattle = { 
//     MinCust: 23,
//     MaxCust: 65,
//     AvgCookie:6.3,
//     TotalCookies: 0,
//     custPerHour:[],
//     AvgCookiePerHour:[],
//     calcCustomerEachHour : function() {
//         for (var i = 0; i < theTimesArray.length; i++) {
//             this.custPerHour.push(random(this.MinCust,this.MaxCust));
//         }
//     },
//     calcCookiesPerHour : function () {
//         this.calcCustomerEachHour();
//         for (i = 0; i < theTimesArray.length; i++){
//             var thisTotal = Math.ceil(this.custPerHour[i]*this.AvgCookie);
//             console.log(thisTotal);
//             this.TotalCookies += thisTotal;
//             this.AvgCookiePerHour.push(this.TotalCookies);
//         }
//     }
//   //  render: function(template, node) {
//     //    node.innerHTML = template;
//  //   }
// }
// Seattle.calcCustomerEachHour();
function Location(Name,min,max,avg) {
    this.cityName = name;
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
        this.generateCustomerPerhour();
        for (var i=0; i < theTimesArray.length; i++) {
            this.generateCustomerPerHour = function (){
                var thisTotal = Math.ceil(this.customerPerHour[i]*this.cookiePerHour);
                this.TotalCookies += thisTotal;
                this.cookiePerHour.push(this.TotalCookies);
            }
        }
    }
    Location.prototype.render = function() {
        var tableBody = document.getElementById('table');
        var list = document.createElement('tr');
        var shops = document.createElement('td');
        var cookieSales = [];
        shops.textContent = this.cityName;
        tableBody.appendChild(list);
        list.appendChild(list);
        for (var i = 0; i < theTimesArray.length; i++) {
            var data = document.createElement('td')
            data.textContent = this.cookiePerHour[i];
            cookieSales[i] = this.cookiePerHour[i];
            list.appendChild(data);
        }
        cookieSales.push(this.totalCookies);
        cookieTotal.push(cookieSales);
        var storeData = document.createElement('td');
        storeData.textContent = this.totalCookies;
        table.appendChild(tableBody);
        tableBody.appendChild(list);
        list.appendChild(storeData);
    }
    



        var Seattle = new Location("Seattle", 10, 50,2.5);



// var Tokyo = {
//     MinCust: 3,
//     MaxCust:24,
//     AvgCookie:1.2,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     calcCustomerEachHour : function() {
//         for (var i = 0; i < theTimesArray.length; i++) {
//             this.custPerHour.push(random(this.MinCust,this.MaxCust));
//         }
//     },
//     calcCookiesPerHour : function () {
//         this.calcCustomerEachHour();
//         for (i = 0; i < theTimesArray.length; i++){
//             var thisTotal = Math.ceil(this.custPerHour[i]*this.AvgCookie);
//             console.log(thisTotal);
//             this.TotalCookies += thisTotal;
//             this.AvgCookiePerHour.push(this.TotalCookies);
//         }
//     }
// }
// var Dubai = {
//     MinCust: 11,
//     MaxCust:38,
//     AvgCookie:3.7,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     calcCustomerEachHour : function() {
//         for (var i = 0; i < theTimesArray.length; i++) {
//             this.custPerHour.push(random(this.MinCust,this.MaxCust));
//         }
//     },
//     calcCookiesPerHour : function () {
//         this.calcCustomerEachHour();
//         for (i = 0; i < theTimesArray.length; i++){
//             var thisTotal = Math.ceil(this.custPerHour[i]*this.AvgCookie);
//             console.log(thisTotal);
//             this.TotalCookies += thisTotal;
//             this.AvgCookiePerHour.push(thisTotal);
//         }
//     }
// }
// var Paris = {
//     MinCust: 20,
//     MaxCust:38,
//     AvgCookie:2.3,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     calcCustomerEachHour : function() {
//         for (var i = 0; i < theTimesArray.length; i++) {
//             this.custPerHour.push(random(this.MinCust,this.MaxCust));
//         }
//     },
//     calcCookiesPerHour : function () {
//         this.calcCustomerEachHour();
//         for (i = 0; i < theTimesArray.length; i++){
//             var thisTotal = Math.ceil(this.custPerHour[i]*this.AvgCookie);
//             console.log(thisTotal);
//             this.TotalCookies += thisTotal;
//             this.AvgCookiePerHour.push(this.TotalCookies);
//         }
//     }
// }
// var Lima = {
//     MinCust: 2,
//     MaxCust: 16,
//     AvgCookie:4.6,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     calcCustomerEachHour : function() {
//         for (var i = 0; i < theTimesArray.length; i++) {
//             this.custPerHour.push(random(this.MinCust,this.MaxCust));
//         }
//     },
//     calcCookiesPerHour : function () {
//         this.calcCustomerEachHour();
//         for (i = 0; i < theTimesArray.length; i++){
//             var thisTotal = Math.ceil(this.custPerHour[i]*this.AvgCookie);
//             console.log(thisTotal);
//             this.TotalCookies += thisTotal;
//             this.AvgCookiePerHour.push(this.TotalCookies);
//         }
//     }
// }
function random(min,max) {
    console.log(min,max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
function SeattleList(){
    for (var i = 0; i < theTimesArray.length; i++) {
        var itemString = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
        var ul = document.getElementById("seatle-list");
        var li = document.createElement("li"); 
        //I don't understand this fully, I just wanted to produce the results on time. code from: https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
         li.appendChild(document.createTextNode(itemString));
         ul.appendChild(li);
    }
}
// function SeattleList(){
//     for (var i = 0; i < theTimesArray.length; i++) {
//         var itemString = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
//         var ul = document.getElementById("seatle-list");
//         var li = document.createElement("li"); 
//          li.appendChild(document.createTextNode(itemString));
//          ul.appendChild(li);
//     }
// }
// function TokyoList(){
//     for (var i = 0; i < theTimesArray.length; i++) {
//         var itemString = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
//         var ul = document.getElementById("tokyo-list");
//         var li = document.createElement("li"); 
//          li.appendChild(document.createTextNode(itemString));
//          ul.appendChild(li);
//     }
// }
// function DubaiList(){
//     for (var i = 0; i < theTimesArray.length; i++) {
//         var itemString = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
//         var ul = document.getElementById("dubai-list");
//         var li = document.createElement("li"); 
//          li.appendChild(document.createTextNode(itemString));
//          ul.appendChild(li);
//     }
// }
// function ParisList(){
//     for (var i = 0; i < theTimesArray.length; i++) {
//         var itemString = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
//         var ul = document.getElementById("paris-list");
//         var li = document.createElement("li"); 
//          li.appendChild(document.createTextNode(itemString));
//          ul.appendChild(li);
//     }
// }
// function LimaList(){
//     for (var i = 0; i < theTimesArray.length; i++) {
//         var itemString = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
//         var ul = document.getElementById("lima-list");
//         var li = document.createElement("li"); 
//          li.appendChild(document.createTextNode(itemString));
//          ul.appendChild(li);
//     }
// }
// SeattleList();
// TokyoList();
// DubaiList();
// ParisList();
// LimaList();
SeattleList();