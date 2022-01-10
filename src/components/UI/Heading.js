import React from 'react';
import styles from '../UI/Heading.module.css';
const Heading = props => {
    return (
        <div className= {styles.heading}>
            {props.children}
        </div>
    )
}
export default Heading;