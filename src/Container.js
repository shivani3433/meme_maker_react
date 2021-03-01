// import './App.css';
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
    fontSize: "",
    imgWidth: "",
    top_top: "",
    top_right: "",
    top_left: "",
    top_bottom: "",
    bottom_top: "",
    bottom_right: "",
    bottom_left: "",
    bottom_bottom: "",
  });
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
          value={activeMemeStyle.colorFont}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Choose Image width"
          name="imgWidth"
          value={activeMemeStyle.imgWidth}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move top text up"
          name="top_top"
          value={activeMemeStyle.top_top}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move top text left"
          name="top_left"
          value={activeMemeStyle.top_left}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move top Text Right"
          name="top_right"
          value={activeMemeStyle.top_right}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move bottom text down"
          name="bottom_bottom"
          value={activeMemeStyle.bottom_bottom}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move  bottom text up"
          name="bottom_top"
          value={activeMemeStyle.bottom_top}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move  bottom text left"
          name="bottom_left"
          value={activeMemeStyle.bottom_left}
          onChange={styleHandler}
        />
        <Settings
          placeholder="Move bottom Text Right"
          name="bottom_right"
          value={activeMemeStyle.bottom_right}
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
    </ContainerHoc>
  );
}

export default App;
