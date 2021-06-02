import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { marsWeather } from '../constants/urls';

// Cameras used each day are not consistent, so this ensures consistency in quality images
// const cameraPriority = {
//   NAVCAM_LEFT: 0,
//   NAVCAM_RIGHT: 1,
//   FRONT_HAZCAM_RIGHT_A: 2,
//   FRONT_HAZCAM_LEFT_A: 3,
//   MCZ_RIGHT: 4,
//   MCZ_LEFT: 5,
//   SUPERCAM_RMI: 6,
//   SKYCAM: 7,
//   SHERLOC_WATSON: 8,
// };

const LifeOnMars = () => {
  // const [imageURL, setImageURL] = useState('');
  const [weather, setWeather] = useState({});

  // const getPhotos = async () => {
  //   const date = moment()
  //     .subtract(10, 'days')
  //     .format('YYYY-MM-DD');

  //   const data = await axios
  //     .get(`${perseverencePhotos}?${querystring.stringify({ api_key: apiKey, earth_date: date })}`)
  //     .then((res) => res.data.photos.sort((p1, p2) => cameraPriority[p1.camera.name] - cameraPriority[p2.camera.name]));

  //   setImageURL(data[0].img_src);
  // };

  const getWeather = async () => {
    const data = await axios
      .get(marsWeather)
      .then((res) => res.data);
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    // getPhotos();
    getWeather();
  }, []);

  return (
    <section className="life-on-mars">
      <div className="left">
        <h1 id="lom">Life on Mars</h1>
        <div className="landscape">
          <div className="weather-pane">
            <h2>Latest Weather:</h2>
            {weather.atmo_opacity && <p>Conditions: {weather.atmo_opacity}</p>}
            {weather.max_temp && <p>High: {weather.max_temp}°C</p>}
            {weather.min_temp && <p>Low: {weather.min_temp}°C</p>}
            {weather.local_uv_irradiance_index && <p>UV Radiation: {weather.local_uv_irradiance_index}</p>}
            <p className="weather-note">Recorded from the Curiosity rover at Gale Crater</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="facts">
          <h3>Soak in the rays</h3>
          <p>Mars&apos; minimal magnetosphere and atmosphere provides optimal exposure to the cosmos.</p>
        </div>
        <div className="facts">
          <h3>Storms like none other</h3>
          <p>If you are lucky, you may get the chance to experience a global dust storm, which can last for weeks at a time.</p>
        </div>
        <div className="facts">
          <h3>Jump for the heavens</h3>
          <p>The gravity on Mars has only 38% of Earth&apos;s gravity, which means you can jump 2.64x higher. Have fun with that!</p>
        </div>
        <div className="facts">
          <h3>Get your breath taken away</h3>
          <p>Literally. There is no oxygen in Mars&apos; atmosphere, its mostly carbon dioxide. Besides, the atmospheric pressure is 1% that of Earth&apos;s</p>
        </div>
      </div>
    </section>
  );
};

export default LifeOnMars;
