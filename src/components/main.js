import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {PARENT, CHILD} from '../actions/types';
import MainParent from './main_parent';
// import MainChild from './main_child';

class Main extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    // Adult
    if (this.props.authenticated && this.props.user_type === PARENT) {
      return (
        <MainParent />
      )
    }
    // Child
    else if (this.props.authenticated && this.props.user_type === CHILD) {
      // <MainChild />
    }
    // Not authenticated
    else {
      // redirect to index login page
      this.context.router.push('/');
    }
  }; // end render
} // end class

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user_type: state.user.user_type,
  };
}

export default connect(mapStateToProps)(Main);
