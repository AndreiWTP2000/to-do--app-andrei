const Progressbar = ({ progress }) => {
  return (
    <div>
      <div className="outer-bar">
        <div
          className="inner-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: " rgb(252, 126, 107)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
