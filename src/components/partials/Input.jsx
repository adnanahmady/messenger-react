import React, { Component } from "react";
import t, {Trans} from '../../utils/Translator';

const Input = ({label, id, type="text", ...rest}) => {
  return (
    <div className="row">
      <div className="col">
        <div className="form-group">
          <label htmlFor={id}>
              { label }
          </label>
          <input
            type={type}
            className="form-control"
            autoFocus="on"
            id={id}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
