import React from "react";

const Button = ({classes, children, ...rest}) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className={
              `btn ${classes}`
          }
          {...rest}
        >
            {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
