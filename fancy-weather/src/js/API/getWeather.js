
async function getWeather(latitude, longitude) {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&days=4&units=M&lang=en&key=3319e5f0afe74f98bfaec789af49d05d`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return {
        weatherDescription: `${data.data[0].weather.description.toUpperCase()}`,
        weatherCode: `${data.data[0].weather.code}`,
        feelsLike: `${Math.round((data.data[0].app_max_temp + data.data[0].app_min_temp) / 2)}°`,
        wind: `${data.data[0].wind_spd.toFixed(1)} m/s`,
        humidity: `${data.data[0].rh}%`,
        currentGrad: `${Math.round(data.data[0].temp)}`,
        tomorrowGrad: `${Math.round(data.data[1].temp)}°`,
        afterTomorrowGrad: `${Math.round(data.data[2].temp)}°`,
        in2DaysGrad: `${Math.round(data.data[3].temp)}°`,
        timeZone: `${data.timezone}`,
    }
}

export default getWeather;