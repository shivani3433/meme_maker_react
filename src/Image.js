import React from "react";
export default function ImageArea({
  topText,
  bottomText,
  imgpath,
  imgALt,
  refe,
  Style,
}) {
  var imgStyle = {
    width: Style.imgWidth + "%",
  };
  return (
    <div className="content mx-auto col-sm-12 col-md-auto" ref={refe}>
      <h1
        style={{
          fontSize: Style.fontSize_top + "px",
          color: Style.colorFont,
          top: Style.top_top + "%",
          bottom: Style.top_bottom + "%",
          left: Style.top_left + "%",
          width: Style.width + "%",
        }}
        className="top-text"
      >
        {topText}
      </h1>
      <img style={imgStyle} className="memeImg" src={imgpath} alt={imgALt} />
      <h2
        style={{
          fontSize: Style.fontSize_bottom + "px",
          color: Style.colorFont,
          top: Style.bottom_top + "%",
          bottom: Style.bottom_bottom + "%",
          left: Style.bottom_left + "%",
          width: Style.width + "%",
        }}
        className="bottom-text"
      >
        {bottomText}
      </h2>
    </div>
  );
}
