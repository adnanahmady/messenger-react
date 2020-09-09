import React, { Component } from "react";
import Navbar from "./Navbar";
import Pusher from "pusher-js";
import api from "../services/api";
import "jquery/dist/jquery";
import { chats } from "../services/fakeMessagesService";

export default class Messanger extends Component {
  state = {
    members: [],
  };

  componentDidMount() {
    this.syncApp();
    this.getMembers();
  }

  /**
   * gets members that has been
   * chating with current user
   */
  async getMembers() {
    // const {data: { data, meta }} = await api.get("/messages");

    // console.log(data, meta);
    // this.setState({ members });
    this.setState({ members: chats });
  }

  /**
   * connects to pusher server
   * and updates members
   */
  syncApp() {
    Pusher.logToConsole = true;
    let pusher = new Pusher(`${process.env.REACT_APP_PUSHER_KEY}`, {
      cluster: `${process.env.REACT_APP_PUSHER_CLUSTER}`,
      forceTLS: process.env.REACT_APP_PUSHER_FORCE_TLS,
    });

    let channel = pusher.subscribe(`${process.env.REACT_APP_PUSHER_CHANNEL}`);
    channel.bind(`${process.env.REACT_APP_PUSHER_EVENT}`, (data) => {
      const users = [...this.state.users];
      this.setState({ users: [...users, ...[data.user]] });
    });
  }

  render() {
    const { members } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <Navbar></Navbar>
            <div className="card">
              <div className="card-header">chats</div>
              <div className="card-body">
                <div className="list-group">
                  {members.map(({ name, email, unread }, index) => (
                    <div
                      className="
                        list-group-item 
                        list-group-item-action 
                        list-group-item-light"
                    >
                      <p className="text-dark">
                        <strong>{name}</strong>
                      </p>
                      <p className="text-secondary d-flex">
                        <span className="ml-auto">{email}</span>
                        <span>
                          {!!unread && (
                            <small className="badge badge-danger badge-pill">
                              {unread}
                            </small>
                          )}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col col-8">contents</div>
        </div>
      </div>
    );
  }
}
