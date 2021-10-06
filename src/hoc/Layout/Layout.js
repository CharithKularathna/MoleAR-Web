import React, { useEffect } from 'react';

//import Sidebar from '../../components/Nav/Sidebar/Sidebar'
import { Grid, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux';

import { REINSTATE_STATE } from '../../store/reducers/actionTypes';
import Navbar from '../../components/Nav/NavBar/NavBar'

const Layout = (props) => {
    const dispatchReinstateState = useDispatch()
    useEffect(() => {
        console.log("Layout Re-rendered")
        dispatchReinstateState({type: REINSTATE_STATE})
    }, [])

    return(
        <>
            <Grid container justify="center" spacing={1}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                {/*this.props.isAuthenticated ? 
                    <Grid container style={{marginTop:'47px'}} className={classes.container}>
                        <Grid item xs={2} >
                            <Sidebar name={this.props.userName} role={this.props.role}/>
                        </Grid>
                        <Grid item container justify="center" xs={10} className={classes.container}>
                            {this.props.children}
                        </Grid> 
                    </Grid> :
                    <Grid item xs={12}>
                        {this.props.children}
                    </Grid>
                    
                */
                }
                <Grid item xs={12}>
                    {props.children}
                </Grid>

                <Grid item xs={12}>
                    {/*<Footer />*/}
                </Grid>
                    
            </Grid>
        </>
    )
}

export default Layout;