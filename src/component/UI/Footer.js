import React from "react"
import styles from "@/styles/Footer.module.css";
import icon1 from '../../assets/images/LinkedIn.png';
import icon2 from '../../assets/images/Facebook.png';
import icon3 from '../../assets/images/Twitter.png';
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_contain}>
                <div className={styles.call}>
                    <p><span>Call me</span> +8801770556351</p>
                </div>
                <div className={styles.address}>
                    <p><span>Address</span> Lalmatia, Dhaka-1207</p>
                </div>
                <div className={styles.email}>
                    <p><span className={styles.email_span}>Email</span> debabrata.dev.ru@gmail.com</p>
                </div>
            </div>

            <div className={styles.social_logo_container}>
                <div className={styles.social_icon_container}>
                    <h3>Find me</h3>
                    <div className={styles.social_icon}>
                        <Link href="https://www.linkedin.com/in/debabrata-bhowmick" >
                            <Image
                                src={icon1}
                                width={20}
                                height={20}
                                alt="social"
                            />
                        </Link>
                        <Link href="https://www.facebook.com/ononno.anu.5?mibextid=LQQJ4d" >
                            <Image
                                src={icon2}
                                width={20}
                                height={20}
                                alt="social"
                            />
                        </Link>
                        <Link href="#" >
                            <Image
                                src={icon3}
                                width={20}
                                height={20}
                                alt="social"
                            />
                        </Link>
                    </div>
                </div>
                <p className={styles.Terms}>Terms of Service - Privacy Policy</p>
            </div>

        </div>
    )
};

export default Footer;
