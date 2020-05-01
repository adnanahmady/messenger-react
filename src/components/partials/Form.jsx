import React, { Component } from 'react';
import t, {Trans} from '../../utils/Translator';

const body = (children) => {
    if (children[0]) return (
        <div className="card-body">
            { [...children].shift() }
        </div>);
}

const footer = (children) => {
    if (children[1]) return (
        <div className="card-footer">
            { [...children].pop() }
        </div>);
}

const Form = ({title, children}) => {
    const _children = children[0] ?
        children :
        children.props ?
            children.props.children :
            children;

    return (
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col">
            <div className="card badge-primary">
              <div className="card-header">
                <strong>
                  <Trans>{title}</Trans>
                </strong>
              </div>
              { body(_children) }
              { footer(_children) }
            </div>
          </div>
        </div>
    );
}

export default Form;