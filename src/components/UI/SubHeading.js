import React from 'react';
import styles from '../UI/SubHeading.module.css'
const SubHeading = props => {

    return (
        <div className = {styles.subheading}>
            {props.children}
        </div>
    )
}
export default SubHeading;