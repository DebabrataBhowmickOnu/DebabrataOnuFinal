import React from "react"
import styles from "@/styles/Experience.module.css";
import expertise from '../../assets/images/expertise.png';
import Image from "next/image";

const Experience = () => {
    return (
        <div className={styles.experience_container}>
            <div className={styles.experience_image}>
                <Image
                    src={expertise}
                    width={446}
                    height={366}
                    alt="expertise"
                    className={styles.expertise}
                />
            </div>
            <div className={styles.experience_content}>
                <h2>My <span>Experience</span></h2>
                <div className={styles.experience1}>
                    <h3><span>OLAB | Senior Developer |</span> April 2022 - Present </h3>
                    <p>
                    I Collaborate with designers and software engineers to create websites for OLAB. Along with this, I follow up-to-date industry trends and technology developments to provide top-notch services.  My core responsibilities are:
                    </p>
                    <ul>
                        <li>Performing coding assignments.</li>
                        <li>Reviewing code work for accuracy and functionality.</li>
                        <li>Creating and implementing design plans.</li>
                        <li>Analyzing code segments regularly.</li>
                        <li>Delegating tasks to team members.</li>
                        <li>Worked with the UI team to engineer and improve major features.</li>
                    </ul>
                </div>

                <div className={styles.experience2}>
                    <h3><span>Angular Developer | Resultier | </span> April 2022 - December 2022 </h3>
                    <p>
                        I worked with a very diverse team of brilliant developers on a cutting-edge health-tech application built using latest Angular versions and took charge of crafting and solving intricate frontend logic. Notably I successfully tackled complex data-table and form interactions including the challenging HCFA contributing to the applications seamless and efficient user experience.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Experience;
