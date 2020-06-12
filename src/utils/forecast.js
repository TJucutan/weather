const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=66c4b699d558ddc072e18465d33d61b5&query=' + latitude + ',' + longitude + '&units=f'

request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
        const temperature = body.current.temperature
        const feelsLike = body.current.feelslike
        const description = body.current.weather_descriptions[0]
        callback(undefined, `Today is ${description}. It is currently ${temperature} degrees out. It feels like ${feelsLike} out.`)
    } 
})
}

module.exports = forecast