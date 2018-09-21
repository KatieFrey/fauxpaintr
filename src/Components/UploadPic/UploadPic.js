import React from "react";
import S3FileUpload from "react-s3";

//Optional Import
//import { uploadFile } from "react-s3";

const config = {
  bucketName: "fauxpaintr",
  dirName: "photos" /* optional */,
  region: "us-east-1",
  accessKeyId: "AKIAJBBNFLAAUUT3XDAQ",
  secretAccessKey: "gceWye1AdcDm1YqviKC/F1i14d1Wc3Og0Mwg6ArD"
};

/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

// S3FileUpload.uploadFile(file, config)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

class UploadPic extends React.Component {
  constructor() {
    super();
    this.state = {
      picture: ""
    };
    this.upload = this.upload.bind(this);
  }

  upload(event) {
    console.log(event.target.files[0]);
    S3FileUpload.uploadFile(event.target.files[0], config)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="card">
        <h1>Upload a picture</h1>
        <input type="file" onChange={this.upload} />
      </div>
    );
  }
}

export default UploadPic;
