import React, { Component } from "react";
import jQuery from "jquery/dist/jquery";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    navbarContent: "navbarToggleExternalContent",
    styles: {
      item: 'rounded-0 nav-item text-light list-group-item bg-dark text-light action'
    }
  };

  /**
   * handle sliding navbar
   */
  handleNaving = () => {
    const { navbarContent } = this.state;
    jQuery(`#${navbarContent}`).slideToggle();
  };

  render() {
    return (
      <div className="pos-f-t">
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={this.handleNaving}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="collapse navbar-collapse" id={this.state.navbarContent}>
          <div className="card badge-dark rounded-0">
            <div className="list-group navbar-nav">
              <div className={this.state.styles.item}>
                <Link className="nav-link text-light" to="#">
                  Item #1
                </Link>
              </div>
              <div className={this.state.styles.item}>
                <Link className="nav-link text-light" to="#">
                  Item #2
                </Link>
              </div>
              <div className={this.state.styles.item}>
                <Link className="nav-link text-light" to="#">
                  Item #3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
