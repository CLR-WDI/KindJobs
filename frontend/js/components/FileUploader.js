import React from "react";
import ReactDOM from 'react-dom';
//Dropzone for file uploads
import Dropzone from 'react-dropzone';

export default class FileUploader extends React.Component {
  constructor() {
    super();
    this._onDrop = this._onDrop.bind(this);
  }

  _onDrop(files) {
    let file = files[0];
    if(file == null){
      return alert('No file selected.');
    }
    this.props._onUpload(file);
  }

  render() {
    let _dropMessage
    let _dropTrigger
    let _uploadedFile
    if (this.props._status === "No File Selected") {
      _dropMessage = "Drop files here to upload";
      _dropTrigger = { this._onDrop }
    } else if (this.props._status === "File Uploading"){
      _dropMessage = "Your file is being uploaded";
      _dropTrigger = ""
    } else if (this.props._status === "File Uploaded"){
      _dropMessage = "Your file has been uploaded";
      _dropTrigger = "";
      _uploadedFile = <a href={this.props._uploadedURL} target="_blank">{this.props._fileName}</a>
    }
    return (
      <div>
        <Dropzone className="file-uploader" onDrop={ _dropTrigger } size={ 150 }>
          <div>
            {_dropMessage}
          </div>
        </Dropzone>
        {_uploadedFile}
      </div>
    )
  }
}
