import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getAuthToken } from '../../store/selectors/selectors';
import { UPLOAD } from '../../store/reducers/actionTypes'

import Spinner from "../../components/UI/Spinner/Spinner"

import axios from '../../axiosAuth';

import classes from './Upload.module.css'

const Upload = (props) => {
    const [image, setImage] = useState(null)
    const [object3D, setObject3D] = useState(null)
    const [mtl, setMtl] = useState(null)

    //UI State
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatchUpload = useDispatch()
    const token = useSelector(getAuthToken)

    const clearForm = () => {

    }

    const uploadHandler = () => {
        setLoading(true)
        let fd = new FormData()
        //console.log(image.name)
        fd.append('image', image)
        fd.append('object_3D', object3D)
        fd.append('mtl', mtl)
        //console.log(fd)

        // Display the key/value pairs
        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios.post('accept-upload-image/', fd, {
            headers: {
                'Authorization': 'token ' + token
            }
        }).then(res => {
            setLoading(false)
            console.log("UPLOAD SUCCESS")
            console.log(res)
            //dispatchSuccessReg({type: REGISTER_SUCCESS})
        }).catch(err => {
            setLoading(false)
            console.log("UPLOAD FAILED")
            console.log(err)
            //dispatchErrorReg({type: REGISTER_FAILURE})
        })
    }
    
    let inputs = (
        <>
            <label>Image</label>
            <input
                style={{width:'100%', marginBottom: '10px'}}
                label="Image"
                type="file"
                onChange={(e) =>  setImage(e.target.files[0]) }
                required
            />
            <hr></hr>
            <label>3D Object</label>
            <input
                style={{width:'100%', marginBottom: '10px'}}
                label="3D Object"
                type="file"
                onChange={(e) =>  setObject3D(e.target.files[0]) }
                required
            />
            <hr></hr>
            <label>MTL File</label>
            <input
                style={{width:'100%', marginBottom: '10px'}}
                label="MTL"
                type="file"
                onChange={(e) =>  setMtl(e.target.files[0]) }
                required
            />
            <hr></hr>
        </>
    );
    
    let form = (
            <form className="form-signin" onSubmit={e => { 
                e.preventDefault(); 
            }}>
                <h1 className={"h3 mb-3 font-weight-normal " + classes.FormTitle}>Upload Files</h1>
                <hr />
                {inputs}
                <button 
                    disabled={disabled} 
                    className="btn btn-lg btn-primary btn-block" 
                    onClick={() => uploadHandler()}>
                    Upload
                </button>
            </form>
    );
    
    if (loading) {
        form = <Spinner />
    }

    return(
        <div style={{marginTop: "100px", marginLeft: "400px", marginRight: "400px"}} className={classes.Signin}>
            {form}
        </div>
    )
}

export default Upload;