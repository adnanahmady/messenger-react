import React, { Component } from "react";
import { Trans } from "../utils/Translator";

class NotFound extends Component {
  styles = {
    fullHeight: { height: "100vh" },
    fixSize: {
      fontSize: "100pt",
      marginTop: "-100pt",
    },
  };

  render() {
    return (
      <div className="container">
        <div className="row align-items-center"
         style={this.styles.fullHeight}>
          <div className="col">
            <div className="row">
              <div
                className="col text-center text-warning"
                style={this.styles.fixSize}
              >
                <i className="fa fa-warning warning-shadow"></i>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <div className="card badge-primary">
                  <div className="card-header">
                    <h2 className="display-1">
                      <Trans>404</Trans>
                    </h2>
                  </div>
                  <div className="card-body">
                    <p className="h2">
                      <Trans>Not Found</Trans>
                    </p>
                  </div>
                  <div className="card-footer">
                    <p className="h4">
                      <Trans>Requested page does not exist</Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
