export const ErrorComponent = ({ message }) => {
  return (
    <div className="m-4">
      <h1>Error!</h1>
      <p>{message}</p>
    </div>
  );
};
