import React from 'react';
import SubHeading from '../UI/SubHeading';
import Paragraph from '../UI/Paragraph';
import styles from './Members.module.css';
const Members = props => {
    return (
        <div className={styles.container}>

            <SubHeading > Members </SubHeading>

            <Paragraph >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>


        </div>
    )
}
export default Members;