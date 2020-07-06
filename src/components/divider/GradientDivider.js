import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gradient: {
        background: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )'
    }
})

function GradientDivider() {
    const styles = useStyles();

    return (
        <Divider className={styles.gradient} />
    )
}

export default GradientDivider;