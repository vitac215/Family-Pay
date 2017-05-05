import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

export default class AdminDashboard extends Component {

  render() {

    return (
      <div>
        <img className="hamburger" src="/img/hamburger.svg" />
        <div className="nav">
          <span className="title">FamilyPay</span>
        </div>
      </div>
    );
  }
} // end of class

// function mapStateToProps(state) {
//   return { errorMsg: state.auth.error };
// }
//
//
// export default reduxForm({
//   form: 'LoginForm',
//   fields: ['username', 'password'],
//   validate
// }, mapStateToProps, actions )(IndexLogin);
