import React from 'react';
import Button from '../UI/Button';
import styles from './Homepage.module.css';
import sampleImg from '../../assets/images/sample.png';

import Contributions from '../Contributions/Contributions';
import Members from '../Members/Members';
import Internships from '../Internships/Internships';
import About from '../NewAbout/About'
const Homepage = props => {
    return (
        <div>

            <table className={styles['homepage-table']}>
                <tbody>
                <tr className={styles['homepage-table-row']}>
                    <td className={styles['homepage-table-data']}>
                        <About></About>
                    </td>
                    <td className={styles['homepage-table-data']}>
                        <img alt="sampleimage" src={sampleImg} className={styles.image}></img>
                    </td>
                </tr>
                <tr>
                    <td className={styles['homepage-table-button']}>
                        <Button>
                            Get Started
                        </Button>
                        <Button>
                            GitHub
                        </Button>
                    </td>

                </tr>
                <tr className={styles['homepage-table-row']}>
                    
                    <td className={styles['homepage-table-data']}>
                        <Contributions></Contributions>
                    </td>
                    <td className={styles['homepage-table-data']}>
                        <Members></Members>
                    </td>
                    <td className={styles['homepage-table-data']}></td>
                    <td className={styles['homepage-table-data']}>
                        <Internships></Internships>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Homepage;