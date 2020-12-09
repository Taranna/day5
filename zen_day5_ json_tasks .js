
1) - Get all the countries from Asia continent /region using Filter function 


var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
var data = JSON.parse(this.response);

var asiaco=data.filter((ele)=>{
    return ele.region==='Asia'
})

console.log(asiaco);
}


2)- Get all the countries with population of less than 2 lacs using Filter function

var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
var data = JSON.parse(this.response);

var popu=data.filter((ele)=>{
    if(ele.population<200000)
    return ele.population
})

console.log(popu);
}


3)- Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
var data = JSON.parse(this.response);



data.forEach(element => console.log(element.name+element.capital+element.flag))
        //element.flag,element.capital;


}

4) -Print the total population of countries using reduce function 

var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
var data = JSON.parse(this.response);

var total=data.reduce((accumulator,currentvalue)=>
{
    return accumulator+currentvalue.population;
},0)
console.log(total);
}

5) -Print the country which use US Dollars as currency. 


var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
var data = JSON.parse(this.response);

var usd_curr=data.filter((item)=>{
    let flag=false
    item.currencies.forEach(element => {
        if(element.code==='USD')
            flag=true;
        
    });
    if(flag==true)
        return true;
        else
        return false;
});
console.log(usd_curr);
}