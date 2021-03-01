export default function Button(props) {
  return (
    <div className="mt-3 text-center">
      <button className="btn btn-dark mr-5" onClick={props.click}>
        {props.name}
      </button>
    </div>
  );
}
