import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../actions';

class FaceLogin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit() {
    let username = localStorage.getItem('username');
    if (username && this.props.file) {
      let image = this.props.file;
      this.props.faceLogin({ username, image });
    }
    else {
      alert("No image has been loaded yet");
    }
  }

  onImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
    // console.log("file", file);
    // console.log('file size', file.size/1024/1024);
    let fileSize = file.size/1024/1024;
    if (fileSize >= 2) {
      alert("Image is too big! Please upload an image that's less than 2MB");
      e.target.value = "";
    } else {
      // console.log('file', file);
      // convert to base 64
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let converted_file = reader.result;
        // console.log('converted_file', converted_file);
        this.props.uploadImg(converted_file);
      }
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div>Hello!</div>
        <div>You can login with your face now!</div>
        {/* <img src={require('img/user.png')}></img>  */}

        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            onChange={this.onImageChange.bind(this)}
          />
          <button
            type="submit"
            className="btn btn-primary">
            Upload
          </button>
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
