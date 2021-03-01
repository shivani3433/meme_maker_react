export default function ImageArea({
  topText,
  bottomText,
  imgpath,
  imgALt,
  refe,
  Style,
}) {
  var imgStyle = {
    width: Style.imgWidth + "px",
  };
  return (
    <div className="content mx-auto" ref={refe}>
      <h1
        style={{
          fontSize: Style.fontSize + "px",
          color: Style.colorFont,
          top: Style.top_top + "%",
          bottom: Style.top_bottom + "%",
          left: Style.top_left + "%",
          right: Style.top_right + "%",
        }}
        className="top-text"
      >
        {topText}
      </h1>
      <img style={imgStyle} className="memeImg" src={imgpath} alt={imgALt} />
      <h2
        style={{
          fontSize: Style.fontSize + "px",
          color: Style.colorFont,
          top: Style.bottom_top + "%",
          bottom: Style.bottom_bottom + "%",
          left: Style.bottom_left + "%",
          right: Style.bottom_right + "%",
        }}
        className="bottom-text"
      >
        {bottomText}
      </h2>
    </div>
  );
}
