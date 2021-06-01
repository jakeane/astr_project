import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { marsWeather } from '../constants/urls';
import landscapeImg from '../img/marslandscape.png';

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
      <h1 id="lom">Life on Mars</h1>
      <img src={landscapeImg} alt="Mars Landscape" width="60%" />
      <p className="temperature high">High: {weather.max_temp}°C</p>
      <p className="temperature low">Low: {weather.min_temp}°C</p>
      {weather.atmo_opacity && <p>The weather is {String(weather.atmo_opacity).toLowerCase()}</p>}
    </section>
  );
};

export default LifeOnMars;
