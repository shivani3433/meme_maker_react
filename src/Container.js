// import './App.css';
import React from "react";
import ContainerHoc from "./HOC/ContainerHOC";
import InputField from "./TextField";
import Button from "./Buttons";
import ImageArea from "./Image";
import Settings from "./Settings";
import domtoimage from "dom-to-image-more";
import FileSaver from "file-saver";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function App() {
  const imgRef = useRef("");
  const [activeMeme, setActiveMeme] = useState({});
  const [activeMemeStyle, setActiveMemeStyle] = useState({
    colorFont: "",
    fontSize_bottom: "",
    imgWidth: "",
    top_top: "",
    top_left: "",
    top_bottom: "",
    bottom_top: "",
    bottom_left: "",
    fontSize_top: "",
    width: "",
    display: "",
  });
  const [display, setDisplay] = useState({ display: "none" });
  const [topText, setTopText] = useState("Downloading memes from Internet");
  const [bottomText, setbottomText] = useState("Making your own memes");
  const [meme, setMemes] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((data) => {
        if (data.data) {
          setMemes(data.data.data.memes);
          setActiveMeme(data.data.data.memes[0]);

          console.log(imgRef.current.clientHeight);
        }
      })
      .catch((err) => console.log("Error: " + err));
  }, []);
  useEffect(() => {
    console.log(imgRef.current.clientHeight);
  }, [activeMeme]);
  const randomMemeImgHandler = () => {
    var num = Math.floor(Math.random() * 100);
    setActiveMeme(meme[num]);
  };
  const ShowImguploadOption = () => {
    if (display.display == "none") {
      setDisplay({ display: "inline-block" });
    } else {
      setDisplay({ display: "none" });
      randomMemeImgHandler();
    }
  };
  const setTextHandler = (e) => {
    if (e.target.name === "top-text") {
      setTopText(e.target.value);
    } else {
      setbottomText(e.target.value);
    }
  };
  const downloadMemeHandler = (e) => {
    // console.log(imgRef.current.)
    console.log(imgRef.current);
    domtoimage.toBlob(imgRef.current).then(function (blob) {
      FileSaver.saveAs(blob, "meme.png");
    });
  };
  const UploadImgHandler = (e) => {
    if (e.target.files[0]) {
      var imgObj = {
        type: "User-img",
        url: URL.createObjectURL(e.target.files[0]),
      };
      setActiveMeme(imgObj);
    }
  };
  const styleHandler = (e) => {
    setActiveMemeStyle({ ...activeMemeStyle, [e.target.name]: e.target.value });
  };
  return (
    <ContainerHoc classtyle="container">
      <h3 className="center">Meme-maker!</h3>
      <p>Create your own memes</p>
      <hr />
      <InputField
        name="top-text"
        placeholder="Add text to your meme"
        value={topText}
        change={setTextHandler}
        label="Add text at the top"
      />
      <InputField
        name="bottom-text"
        placeholder="Add another text to your meme"
        value={bottomText}
        change={setTextHandler}
        label="Add text at the bottom"
      />
      <div className="card mt-2">
        <Settings
          placeholder="Add font Color"
          name="colorFont"
          type="color"
          value={activeMemeStyle.colorFont}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Choose Image width"
          name="imgWidth"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.imgWidth}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Choose text width"
          name="width"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.width}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move top text vertically"
          name="top_top"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.top_top}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move top text horizontally"
          name="top_left"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.top_left}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Set font size for top text"
          name="fontSize_top"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.fontSize_top}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Set font size for bottom text"
          name="fontSize_bottom"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.fontSize_bottom}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move  bottom text vertically"
          name="bottom_top"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.bottom_top}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move  bottom text horizontlly"
          name="bottom_left"
          type="range"
          min="1"
          max="100"
          value={activeMemeStyle.bottom_left}
          onChange={styleHandler}
        />
      </div>
      <ImageArea
        Style={activeMemeStyle}
        refe={imgRef}
        topText={topText}
        bottomText={bottomText}
        imgpath={activeMeme.url}
        imgALt="Meme image"
      />

      <Button name="Next image" click={randomMemeImgHandler} />
      <Button name="Download" click={downloadMemeHandler} />
      <Button name="Upload an Image" click={ShowImguploadOption} />
      <InputField
        name="upload-img"
        type="file"
        accept="image/*"
        placeholder="Upload a image"
        change={UploadImgHandler}
        label="Upload a image"
        style={display}
      />
    </ContainerHoc>
  );
}

export default App;
