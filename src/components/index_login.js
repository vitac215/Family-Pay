import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

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
        <img className="logo" src="/img/logo.svg" />
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className="form-group">
            <input type="text" className="form-control myinput" {...username} placeholder="Username" autoComplete="off" />
            <div className="text-help">
              {username.touched ? username.error : ''}
            </div>
          </div>

          <div className="form-group">
            <input type="password" className="form-control myinput" {...password} placeholder="Password" autoComplete="off" />
            <div className="text-help">
              {password.touched ? password.error : ''}
            </div>
          </div>

          {this.renderAlert()}

          <button type="submit" className="primary-button">Next</button>
        </form>
      </div>
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
