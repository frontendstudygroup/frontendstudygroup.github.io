import React from 'react';
import styles from '../UI/Paragraph.module.css';
const Paragraph = props => {
    return (
        <div className = {styles.paragraph}>
            {props.children}
        </div>
    )
}
export default Paragraph;