import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import login from '/style/login.css';

import * as actions from '../actions';

class IndexLogin extends Component {

  onSubmit({ username, password }) {
    this.props.loginAction({ username, password });
  }

  renderAlert() {
    if (this.props.errorMsg) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMsg}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { fields: {username, password} } = this.props;

    return (
      <div id="inner-container">
        <img src="/img/logo.svg" width="220px" height="138px" />
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" {...username} />
            <div className="text-help">
              {username.touched ? username.error : ''}
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" {...password} />
            <div className="text-help">
              {password.touched ? password.error : ''}
            </div>
          </div>

          {this.renderAlert()}

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>

<<<<<<< HEAD
        <button action="submit" className="btn btn-primary">Login</button>
      </form>
=======
>>>>>>> 36f998956fd7002abf706443cebefd3438aa79d9
    );
  }
} // end of class

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please enter a username';
  }
  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}


function mapStateToProps(state) {
  return { errorMsg: state.auth.error };
}


export default reduxForm({
  form: 'LoginForm',
  fields: ['username', 'password'],
  validate
}, mapStateToProps, actions )(IndexLogin);
