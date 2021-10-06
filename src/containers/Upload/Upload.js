import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getAuthToken } from '../../store/selectors/selectors';
import { UPLOAD } from '../../store/reducers/actionTypes'

import classes from './Upload.module.css'

const Upload = (props) => {
    const [image, setImage] = useState(null)
    const [object3D, setObject3D] = useState(null)
    const [mtl, setMtl] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const dispatchUpload = useDispatch()
    const token = useSelector(getAuthToken)
    if (token && token!==""){
        console.log(token)
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
            />
            <hr></hr>
            <label>MTL File</label>
            <input
                style={{width:'100%', marginBottom: '10px'}}
                label="MTL"
                type="file"
                onChange={(e) =>  setMtl(e.target.files[0]) }
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
                    onClick={() => dispatchUpload({type: UPLOAD, payload: {image:image, object_3D:object3D, mtl:mtl}})}>
                    Upload
                </button>
            </form>
    );

    return(
        <div style={{marginTop: "100px", marginLeft: "400px", marginRight: "400px"}} className={classes.Signin}>
            {form}
        </div>
    )
}

export default Upload;