const WeatherData = require('../models/weatherDataModel');

const getWeatherByCityName = async (req, res) => {
  const cityName = req.params.cityName;

  try {
    // TODO: Implement logic to retrieve weather data by city name
    const weatherData = await WeatherData.findOne({cityName})
    if(!weatherData){
      return res.status(404).json({ message: 'Weather data not found for the given city' });
    }
    // Example response when data is found:
    return res.status(200).json({ weatherData });
    // Example response when data is not found:
    // res.status(404).json({ message: 'Weather data not found for the given city' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getWeatherByZipCode = async (req, res) => {
  const zipCode = req.params.zipCode;

  try {
    // TODO: Implement logic to retrieve weather data by zip code
    const weatherData = await WeatherData.findOne({zipCode})
    if(!weatherData){
      return res.status(404).json({ message: 'Weather data not found for the given zip code' });
    }
    // Example response when data is found:
    return res.status(200).json({ weatherData });
    // Example response when data is found:
    // res.status(200).json({ weatherData });
    // Example response when data is not found:
    // res.status(404).json({ message: 'Weather data not found for the given zip code' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const postWeatherAlert = async (req, res) => {
  const { cityName, humidity, weatherDescription, temperature, zipCode } =
    req.body;
  try {
    // Example response when alert is posted successfully:
    const newAlert = await WeatherData.create({cityName, humidity, weatherDescription, temperature, zipCode})
    return res.status(201).json({ message: 'Weather alert posted successfully', alert: newAlert });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};
module.exports = {
  getWeatherByCityName,
  getWeatherByZipCode,
  postWeatherAlert,
};
