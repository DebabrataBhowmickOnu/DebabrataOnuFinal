import React, { useEffect } from "react";
import styles from "@/styles/Testimonial.module.css";
import project from '../../assets/images/icon_image.png';
import Image from "next/image";
import { tns } from "tiny-slider"; 
import 'tiny-slider/dist/tiny-slider.css'; 

const Testimonial = () => {
    useEffect(() => {
        // Initialize Tiny Slider
        const slider = tns({
            container: '.slider_item_container',
            items: 2,
            slideBy: 'page',
            autoplay: true,
            controls: false,
            speed: 3000,
            nav: true,
            mouseDrag: true,
            autoplayButtonOutput: false,
            responsive: {
                0: {
                    items: 1,
                    gutter: 15,
                },
                768: {
                    items: 1,
                    gutter: 15,
                },
                981: {
                    items: 1,
                },
                1200: {
                    items: 2,
                }
            }
         
        });

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <div className={styles.Testimonial_container} id="Testimonial">
            <div className={styles.Testimonial_container_header}>
                <h2>Client  Testimonial</h2>
                <div>
                    <Image
                        src={project}
                        width={199}
                        height={183}
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
            </div>

            <div className="slider_item_container">
                <div>
                    <p>Debabrata is one of the best developers I’ve ever worked with in my entire life. His attention to detail is absolutely meticulous, and his communication skills are exceptional. He is a true professional.</p>
                    <h3>josh_mushe</h3>
                </div>
                <div>
                    <p>Debabrata did a fantastic job with the website. He quickly grasped my vision and delivered the website 2days ahead of schedule. He attentively addressed all my requests and inquiries. It was a pleasure working with him.</p>
                    <h3>gabriel_stuart</h3>
                </div>
                <div>
                    <p>Debabrata is truly exceptional. I feel incredibly fortunate to have had him complete this project for me. I'm grateful to both Fiverr and Debabrata for blessing my business. 🙏God bless you all today!</p>
                    <h3>sirenehendley</h3>
                </div>
                <div>
                    <p>Debabrata did an excellent job. I would give more than 5 stars if I could. The communication was excellent, and the delivery was thorough. Debabrata attention to detail and commitment to quality truly set him apart. The entire process was smooth and hassle-free. I highly recommend his services for any website development tasks. Thank you! </p>
                    <h3>ermastover</h3>
                </div>
                <div>
                    <p>Thank you for your support and commitment to make this possible.</p>
                    <h3>frank mueler</h3>
                </div>
                <div>
                    <p>"Very dedicated, good work. Trust the process, he nailed it."</p>
                    <h3>Joris Reynaud</h3>
                </div>
                <div>
                    <p>"highly skilled and professional"</p>
                    <h3>Trevor Tembi</h3>
                </div>
               
            </div>

            <div className={styles.dot_pagination}></div>
        </div>
    );
};

export default Testimonial;
