import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

export default class AdminDashboard extends Component {

  render() {

    return (
      <div>
        <div className="nav">
          FamilyPay
        </div>
        <img className="hamburger" src="/img/hamburger.svg" />
        <div id="container-under">
          <div style={{height: 20 + 'px'}}></div>
          <div className="r16">PNC Checking (..9999)</div>
          <div style={{height: 20 + 'px'}}></div>
          <div className="a-member">
            <div className="row">
              <div className="col-xs-3 col-sm-3">
                <img className="member-photo-md" src="" width="60px" height="60px" />
              </div>
              <div className="col-xs-9 col-sm-9">
                <div style={{height: 5 + 'px'}}></div>
                <div>
                  <span>Noah</span>
                  <span>&ensp;&ensp;&ensp;</span>
                  <span className="r16d">1 Request</span>
                </div>
                <div style={{height: 18 + 'px'}}></div>
                <div className="row">
                  <div className="col-xs-2">0</div>
                  <div className="col-xs-8"></div>
                  <div className="col-xs-2">1000</div>
                </div>
              </div>
            </div>
          </div>
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
