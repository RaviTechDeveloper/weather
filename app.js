// // let str = await fetch('http://api.weatherapi.com/v1/current.json?key=1b412d654b8a47ccbad172520220108&q=Indore&aqi=nov')
// // console.log(str)
// async function weatherdata(){
//     let x= await fetch('http://api.weatherapi.com/v1/current.json?key=1b412d654b8a47ccbad172520220108&q=Indore&aqi=no')
//     console.log(x.json)
// }
// weatherdata()
// // fetch('http://api.weatherapi.com/v1/current.json?key=1b412d654b8a47ccbad172520220108&q=Indore&aqi=no')
// // .then(x=>console.log(x.json()));
fetch('http://api.weatherapi.com/v1/current.json?key=1b412d654b8a47ccbad172520220108&q=rewa&aqi=no')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    let date =myJson["current"]["last_updated"]
    let temp =myJson["current"]["temp_c"]
    let name =myJson["location"]["name"]
    let region =myJson["location"]["region"]
    let country =myJson["location"]["country"]
    let cloud  =myJson["current"]["cloud"]
    let wind =myJson["current"]["wind_kph"]
    let humidity =myJson["current"]["humidity"]
    let weatherstatus =myJson["current"]["condition"]["text"]
    // let input = document.getElementById["search location"];
    
    

    console.log(date)
    console.log(temp)
    console.log(name)
    console.log(region)
    console.log(country)
    console.log(cloud)
    console.log(wind)
    console.log(humidity)
    console.log(weatherstatus)

    let showcity = document.getElementsByClassName("city")
    // showcity[0].innerHTML =`${name}<div class = \"date\"></div>`
    showcity[0].innerHTML = "<i class=\"fa-solid fa-location-dot\"></i> &nbsp" + name + ", "  +region + ", "  +country
    console.log(showcity)
    let showdate = document.getElementsByClassName("date")
    showdate[0].innerText = date
    // console.log(showdate)
    let showtemp = document.getElementById("temp")
    showtemp.innerText = temp +"°C"
    console.log(showtemp)
    // let showregion = document.getElement sByClassName("region")
    // showregion[0].innerText = region
    // let showcountry = document.getElementsByClassName("country")
    // showcountry[0].innerText = country
    let showcloud = document.getElementsByClassName("cloud")
    showcloud[0].innerHTML = "<i class=\"fa-solid fa-droplet\"></i> &nbsp;"+cloud + "%"
    let showwind =document.getElementsByClassName("wind")
    showwind[0].innerHTML = "<i class=\"fa-solid fa-wind\"></i> &nbsp" + wind + " km/h"
    let showhumidity =document.getElementsByClassName("humidity")
    showhumidity[0].innerHTML = "<i class=\"fa-solid fa-droplet\"></i> &nbsp" + humidity + "%" 
    let showweatherstatus =document.getElementById("weatherstatus")
    showweatherstatus.innerHTML = weatherstatus
    // let x = document.createElement("INPUT");
    //   x.setAttribute("type", "search");
    // let x = document.getElementsByTagName('form');
    //    console.log(x)
      // let formElement =document.getElementsByClassName('s')
      // console.log(formElement);

    
  });
  // let x = document.getElementById("search")
  // console.log(x.value)

  function showvalue(){
    let formElement =document.getElementsByClassName('s')
    console.log(formElement[0].value);
  }