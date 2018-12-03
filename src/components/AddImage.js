import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader'

class AddImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isUploading: false,
            progress: 0,
            images: []
        }
    };

    handleUploadSucces = (filename,task) => {
      this.setState((state,props) => ({
       images: state.images.concat(filename)
      }))
    }

    render(){
        return(
            <section>
            <h1>Uploader</h1>
            <form>
                <FileUploader 
                    accept="image/*"
                    randomizeFilename
                    storageRef={firebase.storage().ref("images")}
                    onUploadSuccess={this.handleUploadSucces}
                    />
            </form>
            </section>
        )
    }
}

export default AddImage;