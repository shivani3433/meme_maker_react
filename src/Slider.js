const SliderPage = (props) => {
  return (
    <>
      <label className="pr-3">{props.placeholder}: </label>
      <input {...props} />
    </>
  );
};

export default SliderPage;
