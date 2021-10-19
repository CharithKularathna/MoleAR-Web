import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => (
    <div style={{marginTop:'30%'}} className={classes.Loader}>Loading...</div>
);

export default spinner;