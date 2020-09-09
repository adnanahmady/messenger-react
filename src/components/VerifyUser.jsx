import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import t, { Trans } from "../utils/Translator";
import Form from "./partials/Form";
import Input from "./partials/Input";
import Button from "./partials/Button";
import { verifyUser, getCurrentUser } from "../services/auth";

class VerifyUser extends Component {
  state = {
    otp: ""
  };

  handleVerification = async () => {
    const otp = this.state;
    toast.info(t("processing") + "...");

    try {
      await verifyUser(otp);
      window.location = window.location.origin+'/chat';
    } catch (ex) {
      toast.dismiss();
      if (ex.response && ex.response.status === 422) {
        return toast.error(ex.response.data.errors.otp.shift());
      }
      if (ex.response && ex.response.status === 404) {
        return toast.error(ex.response.data.data);
      }
      toast.error(t('there is a problem, please be patient and try later'));
    }
  };

  handleTyping = ({ currentTarget: { value: otp } }) => {
    this.setState({ otp });
  };

  handleEnter = ({ keyCode }) => {
    if (keyCode === 13) this.handleVerification();
  };

  render() {
    if (getCurrentUser()) {
        return (<Redirect to="/chat" />);
    }
    const { otp } = this.state;

    return (
      <div className="container">
        <Form title="verification form">
          <Input
            label={
              <React.Fragment>
                <i className="fa fa-envelope ml-3" aria-hidden="true"></i>
                <Trans>verification code</Trans> (<Trans>required</Trans>)
              </React.Fragment>
            }
            type="text"
            id="otp"
            value={otp}
            placeholder={t("your verification code")}
            onKeyUp={this.handleEnter}
            onChange={this.handleTyping}
          />
          <Button
            classes="btn-block btn-info"
            onClick={this.handleVerification}
          >
            <i className="fa fa-envelope-open ml-3" aria-hidden="true"></i>
            <Trans>verify</Trans> <Trans>and</Trans> <Trans>login</Trans>
          </Button>
        </Form>
      </div>
    );
  }
}

export default VerifyUser;
