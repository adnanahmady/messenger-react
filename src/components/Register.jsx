import React, { Component } from "react";
import t, { Trans } from "../utils/Translator";
import api from "../services/api";
import { toast } from "react-toastify";
import Form from "./partials/Form";
import Input from "./partials/Input";
import Button from "./partials/Button";

class Register extends Component {
  state = {
    email: ""
  };

  handleRegister = async () => {
    const email = this.state;
    toast.info(t("processing") + "...");

    try {
      const { data } = await api.post("/register", email);
      toast.dismiss();
      toast.success(data.meta.message);
      return this.props.history.push("/verify");
    } catch (ex) {
      toast.dismiss();
      
      if (ex.response && ex.response.status === 422) {
        return toast.error(ex.response.data.errors.email.shift());
      }
      toast.error(t('there is a problem, please be patient and try later'));
    }
  };

  handleTyping = ({ currentTarget: { value: email } }) => {
    this.setState({ email });
  };

  handleEnter = ({ keyCode }) => {
    if (keyCode === 13) this.handleRegister();
  };

  render() {
    const { email } = this.state;

    return (
      <div className="container">
        <Form title="registeration form">
          <Input
            label={
              <React.Fragment>
                <i className="fa fa-envelope ml-3" aria-hidden="true"></i>
                <Trans>email</Trans> (<Trans>required</Trans>)
              </React.Fragment>
            }
            type="text"
            id="email"
            value={email}
            placeholder={t("welcome to chat")}
            onKeyUp={this.handleEnter}
            onChange={this.handleTyping}
          />
          <Button classes="btn-block btn-info" onClick={this.handleRegister}>
            <i className="fa fa-envelope-open ml-3" aria-hidden="true"></i>
            <Trans>register</Trans> / <Trans>login</Trans>
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
