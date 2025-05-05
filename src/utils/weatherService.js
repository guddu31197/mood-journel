
export async function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=9356919296fb21f74a7ad1871656f147`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("api data "+data)
    return {
      temp: Math.round(data.main.temp),
      description: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  }