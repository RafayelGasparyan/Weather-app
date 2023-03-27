import React from 'react'
const axios = require("axios");

export const geoApiOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd0d2630a98mshd7db2a94dbd3828p1d5e3fjsn03f01c547844',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

   export const  GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
   export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
   export const WEATHER_API_KEY = 'a4806d89d63a659a37ccd2af47af0e0f'