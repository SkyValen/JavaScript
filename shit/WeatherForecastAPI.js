fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.43&lon=24.75&altitude=90")
  .then((response) => response.json())
  .then((json) => {
    for (i = 0; i < 4; i++){
      let box = json.properties.timeseries[i]
      let time = box.time
      let temperature = box.data.instant.details.air_temperature
      console.log(time, temperature);
    }
  })
