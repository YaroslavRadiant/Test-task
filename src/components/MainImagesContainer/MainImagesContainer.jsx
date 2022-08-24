import React, { useState, useEffect } from "react";

import { getUsersData } from "../../API/randomNumber";

import emperorTamarinImage from "../../assets/images/emperorTamarin.jpeg";
import fennecFoxImage from "../../assets/images/fennecFox.jpeg";
import quokkaImage from "../../assets/images/quokka.jpg";
import Loader from "../Loader/Loader";

import "./MainImagesContainer.css";

export default function MainImagesContainer() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getNumbers();
  }, []);

  const getNumbers = () => {
    if (flag) {
      return;
    }
    Promise.all([getUsersData(), getUsersData()]).then((values) => {
      if (values[0] % 2 === 0 && values[1] % 2 === 0) {
        setFlag(true);
        return;
      }
      getNumbers();
    });
  };

  return (
    <div className="main_images_container">
      {flag ? (
        <div className="main_images_container__images">
          <img src={emperorTamarinImage} alt="emperorTamarinImage" />
          <img src={fennecFoxImage} alt="fennecFoxImage" />
          <img src={quokkaImage} alt="quokkaImage" />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
