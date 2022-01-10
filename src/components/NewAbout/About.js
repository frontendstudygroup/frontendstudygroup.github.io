import React from 'react';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';

import styles from './About.module.css';
const About = props => {
    return (
        <div className={styles.container}>

            <Heading >We are an Organization to help you find Open Source Internships </Heading>

            <Paragraph >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>


        </div>
    )
}
export default About;