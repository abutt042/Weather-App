
const submitbtn = document.getElementById('submitbtn');
console.log("msndkjszdkjs")
const cityname = document.getElementById('cityName');
const city_name = document.getElementById('city_name');


const getinfo = async (event)=>{
    event.preventdefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=23a30a95df7f71b97b8d6949a6784853`
    alert("function worked")
    let cityval = cityname.value;
    if(cityval === ''){
        city_name.innerText = `PLz write name before search`
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=23a30a95df7f71b97b8d6949a6784853`
const response = await fetch(url) 
    }
}
submitbtn.addEventListener('click', getinfo);