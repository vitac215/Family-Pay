import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MainParent extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        hello parent
      </div>
    )
  }; // end render
} // end class

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user_type: state.user.user_type,
  };
}

export default connect(mapStateToProps)(MainParent);
