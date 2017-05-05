import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

class FaceLogin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit() {
    let username = localStorage.getItem('username');
    console.log("file", this.props.file);
    if (username !== null) {
      let file = this.props.file;
      this.props.faceLogin({ username, file });
    } else {
      alert("internal error!");
    }
  }

  onImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    this.props.uploadImg(file);
  }

  render() {

      return (
        <div id="inner-container">
          <div id="facerecogfirst-hello">Hello,</div>
          <div id="facerecogfirst-hello1">You can login with your face now!</div>
          {/* <img src={require('img/user.png')}></img>  */}
          <img id="default-user-avatar" src="/img/default-user-avatar.svg" />
          <form onSubmit={this.onSubmit.bind(this)}>
            <div id="upload-photo-div">
              <div style={{height: 90 + 'px'}}></div>
              <label>  
                <div className="primary-button-upload">Choose Photo</div>
                <input
                  id="file-upload-input"
                  type="file"
                  accept="image/*"
                  capture="camera"
                  onChange={this.onImageChange.bind(this)}
                  />
              </label>
            </div>
            <div style={{height: 20 + 'px'}}></div>
            <div>
            <button
              type="submit"
              className="primary-button"
              onClick={this.onSubmit.bind(this)}>
              Upload
            </button>
            </div>
          </form>
        </div>
      )

  }
} // end of class


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMsg: state.auth.error,
    file: state.file.file,
  };
}


export default reduxForm({
  form: 'FaceLoginForm',
  fields: ['username', 'img'],
}, mapStateToProps, actions )(FaceLogin);
