export default function Settings(props) {
  return (
    <div className="d-boxb">
      <label>{props.placeholder}: </label>
      <input {...props} />
    </div>
  );
}
