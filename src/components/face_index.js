import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { loginAction } from '../actions/index';

class FaceIndex extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.loginAction(props)
      .then( () => {
        this.context.router.push('/faceLogin');
      });
  }

  render() {
    const { handleSubmit } = this.props;
    const { fields: {username, password} } = this.props;

    return (
      <div>
        <div>
          FamilyPay
        </div>

        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className={`form-group ${username.touched && username.invalid ? 'has-danger' : ''}`}>
            <label>Username</label>
            <input type="text" className="form-control" {...username} />
            <div className="text-help">
              {username.touched ? username.error : ''}
            </div>
          </div>

          <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
            <label>Password</label>
            <input type="text" className="form-control" {...password} />
            <div className="text-help">
              {password.touched ? password.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
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

export default reduxForm({
  form: 'LoginForm',
  fields: ['username', 'password'],
  validate
}, null, {loginAction} )(FaceIndex);
