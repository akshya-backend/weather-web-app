import express from "express";
import axios from "axios";
import  {icon_func,time_func} from "./extra_functionality.js";

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get("/", async(req, res) => {
  const api2 = "89a4c51f5ad34017a15230734231308"
  const api = "d30604827c87748301f0ede2a8e06559"
  const days= 5;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=kapurthala&appid=${api}`
  const url2=`https://api.weatherapi.com/v1/forecast.json?key=${api2}&q=kapurthala&days=${days}`
  
 try {
    const fetchdata = await axios.get(url)
    const  fetchdata2 = await axios.get(url2) 
    console.log(fetchdata);
    const data2 = fetchdata2.data
    const toObject = fetchdata.data;
    let icon = toObject.weather[0].icon;
   
// calling and  asigning icon key value 
    let icon_res = icon_func(icon)
    const any = toObject.weather[0].icon = icon_res;
// calling time function
   
    let time_res= time_func(fetchdata2.data.location.localtime)
    if (req.query.error === 'true') {
      res.render("weather.ejs", { data: icon_res, time_res, data2, toObject,error:true}) 
    } else {
       res.render("weather.ejs", { data: icon_res, time_res, data2, toObject}) 
    }} catch (error) {
      res.render("error.ejs") 
    
     }
});
app.post("/report", async (req, res) => {
  const { city } = req.body;
  const api2 = "89a4c51f5ad34017a15230734231308"
  const api = "d30604827c87748301f0ede2a8e06559"
  const days= 5;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
  const url2=`https://api.weatherapi.com/v1/forecast.json?key=${api2}&q=${city}&days=${days}`
  
   try {
    const fetchdata = await axios.get(url)
    const  fetchdata2 = await axios.get(url2)
    const data2 = fetchdata2.data
    const toObject = fetchdata.data;
    let icon = toObject.weather[0].icon;
   
// calling and  asigning icon key value 
    let icon_res = icon_func(icon)
    const any = toObject.weather[0].icon = icon_res;
// calling time function
    let time_res= time_func(fetchdata2.data.location.localtime)
    res.render("weather.ejs", { data: icon_res, time_res, data2, toObject}) 
     } catch (error) {
      
      const isError = true;
      res.redirect(`/?error=${isError}`)
     }
    })

app.listen( process.env.PORT || 3000, () => {
  console.log(`Server is running `);
})
