import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MainChild extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>

        <div className="nav">
          { localStorage.getItem('firstName') }
        </div>

        <img className="user-avatar img-circle" src={this.props.file} />

        <div>
          <p>You've spent {} </p>
        </div>

      </div>
    )
  }; // end render
} // end class

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user_type: state.user.user_type,
    spent : state.childData.spent,
  };
}

export default connect(mapStateToProps)(MainChild);
