import ProjectsLayout from "@/component/Layout/ProjectsLayout";
import Link from "next/link";
import styles from "@/styles/Projectspage.module.css";
import project from '../../assets/images/porfyri.rankupper.com.png';
import project2 from '../../assets/images/akindoorairservices.com.png';
import project3 from '../../assets/images/2cimages.com_.PNG';
import project4 from '../../assets/images/dreamstudio.nyc.PNG';
import project5 from '../../assets/images/olabbd.com.PNG';
import project6 from '../../assets/images/offshoreclipping.com.PNG';
import project7 from '../../assets/images/httpsdusanjh.com.PNG';
import React from "react"
import Image from "next/image";

const Projects = (props) => {
    return (
        <div>
            <div className={styles.project_contain_container3}>
                {/* project1  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Professional Commercial Photographer</h3>
                    <p>Porfyri Photography studio is based in the heart of Brisbane and services all areas around South East QLD, Australia.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://porfyri.rankupper.com/" className={styles.project_link}>Live Prevuew</Link>

                </div>
                {/* project2  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project2}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Heating and Air Conditioning Service</h3>
                    <p>Your doorstep solution for installing, repairing, & diverse heating & air conditioning services in Columbus.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://akindoorairservices.com/" className={styles.project_link}>Live Prevuew</Link>

                </div>
                {/* project3  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project3}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Connecticut Commercial Photographer.</h3>
                    <p>CONNECTICUT COMMERCIAL PHOTOGRAPHER.Every moment is worth preserving – to feel, touch, and relive</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://2cimages.com/" className={styles.project_link}>Live Prevuew</Link>

                </div>
                {/* project4  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project4}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Dreamstudio</h3>
                    <p>Changing the Meaning of Full-Service Innovative Production Techniques.Each photograph an organization produces ought to resonate with its audience.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://dreamstudio.nyc/" className={styles.project_link}>Live Prevuew</Link>

                </div>

                  {/* project5  */}
                  <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project5}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Olabbd</h3>
                    <p>Acquire New Skills Through Interactive, Live Sessions with Industry Experts.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://olabbd.com/" className={styles.project_link}>Live Prevuew</Link>

                </div>
                {/* project6  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project6}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>offshoreclipping</h3>
                    <p>Elevate Every Photo With Professional Clipping Path Services.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://offshoreclipping.com/" className={styles.project_link}>Live Prevuew</Link>

                </div>
                 {/* project7  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project7}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Dusanjh Productions</h3>
                    <p>Your moments, our passion.Preserving life's precious moments</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="https://dusanjh.rankupper.com/" className={styles.project_link}>Live Prevuew</Link>

                </div>
            </div>

        </div>
    )
};

export default Projects;

Projects.getLayout = function getLayout(page) {
    return (
        <ProjectsLayout>{page}</ProjectsLayout>
    );
};
