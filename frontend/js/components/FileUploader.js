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
      _dropMessage = <p>Drop files here to upload.</p>;
      _dropTrigger = this._onDrop
    } else if (this.props._status === "File Uploading"){
      _dropMessage = <div><p><i class="fa fa-spinner fa-spin fa-fw"></i></p><p>Please wait, your file is being uploaded.</p></div>;
      _dropTrigger = ""
    } else if (this.props._status === "File Uploaded"){
      _dropMessage = <p>Your file has been uploaded.</p>;
      _dropTrigger = "";
      _uploadedFile = <a class="btn uploaded-file" href={this.props._uploadedURL} target="_blank"><p><i class="fa fa-file-text-o fa-3x fa-fw"></i></p>{this.props._fileName}</a>
    }
    return (
      <div>
        <Dropzone className="file-uploader" onDrop={ _dropTrigger } size={ 150 }>
            {_dropMessage}
        </Dropzone>
        <p>{_uploadedFile}</p>
      </div>
    )
  }
}
