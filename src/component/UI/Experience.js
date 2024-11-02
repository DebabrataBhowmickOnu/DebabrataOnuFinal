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
                    <h3><span>Offshore IT | Junior Developer | </span> April 2020 - April 2022 </h3>
                    <p>
                        Developed and maintained production code for client websites by collaborating with the senior developer team. My core responsibilities are:
                    </p>
                    <ul>
                        <li>Assisting the development manager with all aspects of software design and coding.</li>
                        <li>Attending and contributing to company development meetings.</li>
                        <li>Working on minor bug fixes.</li>
                        <li>Monitoring the technical performance of internal systems.</li>
                        <li>Collaborate with the development team.</li>
                        <li>Collect and utilize consumers' demands about program functionality.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Experience;
