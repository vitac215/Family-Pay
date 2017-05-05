import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MainChild extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>

        <div className="nav">
          { localStorage.getItem('firstName') }
        </div>

        <img className="user-avatar img-circle" src={this.props.file} />

        <div>
          {/* <p>You've spent ${this.props.spent} out of ${this.props.limit}</p> */}
          <p>You've spent $300 out of $1000</p>
        </div>

        <button type="submit" className="primary-button">
          Make Payment
        </button>
        <button type="submit" className="primary-button">
          Send Request
        </button>

      </div>
    )
  }; // end render
} // end class

// function mapStateToProps(state) {
//   return {
//     authenticated: state.auth.authenticated,
//     user_type: state.user.user_type,
//     spent : state.childData.spent,
//     limit: state.childData.limit,
//   };
// }

// export default connect(mapStateToProps, actions)(MainChild);
export default connect(null, actions)(MainChild);
