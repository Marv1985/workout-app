import React from "react";
export default function Routines(props) {
  const { name, image1, image2, image3, altText } = props;

  return (
    <div className="routines-wrapper">
      <div className="split-wrapper">
        <div>
          <p>{name}</p>
        </div>
        <img
          src={image1}
          srcSet={`${image1} 1200w, ${image2} 1080w, ${image3} 720w`}
          alt={altText}
        />
      </div>
    </div>
  );
}
