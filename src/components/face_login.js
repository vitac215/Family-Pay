import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

class FaceLogin extends Component {

  render() {

    return (
      <div>
        <div>Hello!</div>
        <div>You can login with your face now!</div>
        {/* <img src={require('../../img/user.png')}></img> // png doesnt work? */}
        <input type="file" accept="image/*" capture="camera" />
      </div>
    )
  }
} // end of class


function mapStateToProps(state) {
  return { errorMsg: state.auth.error };
}


export default reduxForm({
  form: 'FaceLoginForm',
  fields: ['username', 'img'],
}, mapStateToProps, actions )(FaceLogin);
