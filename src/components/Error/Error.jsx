// import css from "./Error.module.css";

export default function Error({ errorMessage, children }) {
  return (
    <div>
      <p>
        <b>{children}</b>
      </p>
      {errorMessage}
    </div>
  );
}
