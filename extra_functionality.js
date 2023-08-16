const icon_func = function (x) {
    switch (x) {
        case "01d":
            return "/images/icons8-summer.gif"
        case "02d":
            return "/images/icons8-partly-cloudy-day.gif"
        case "03d":
            return "/images/icons8-clouds.gif "
        case "04d":
            return "/images/icons8-clouds.gif "
        case "09d":
            return "/images/icons8-rain-cloud.gif"
        case "10d":
            return "images/icons8-rain.gif"
        case "11d":
            return "/images/icons8-cloud-lightning.gif"
        case "13d":
            return "/images/icons8-snow.gif"
        case "50d":
            return "/images/icons8-fog.gif"
        case "02n":
            return "/images/icons8-night (1).gif"
        case "01n":
            return "/images/icons8-night-sky.gif"
        case "03n":
            return "/images/icons8-clouds.gif "
        case "04n":
            return "/images/icons8-clouds.gif "
        case "09n":
            return "/images/icons8-rain-cloud.gif"
        case "10n":
            return "images/icons8-rain.gif"
        case "11n":
            return "/images/icons8-cloud-lightning.gif"
        case "13n":
            return "/images/icons8-snow.gif"
        case "50n":
            return "/images/icons8-fog.gif"

        default:
            return "/images/icons8-summer.gif"
    }
};

const time_func = function (x) {
    const localTime = new Date(x);


    const dayOfWeek = localTime.toLocaleString('en-US', { weekday: 'long' });
    const months = localTime.toLocaleString('en-US', { month: 'long' })



    const times = {
        day: dayOfWeek,
        date: localTime.getDate(),
        month: months,
        year: localTime.getFullYear()

    }
    return times
}

export { icon_func, time_func };