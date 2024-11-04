import React from "react"
import styles from "@/styles/SocialMedia.module.css";
import logo1 from '../../assets/images/Group 1261152953.png';
import logo2 from '../../assets/images/Group 1261152954.png';
import logo3 from '../../assets/images/Group 1261152955.png';
import logo4 from '../../assets/images/Group 1261152956.png';
import Image from "next/image";
import Link from "next/link";
const SocialMedia = () => {
    return (
        <div className={styles.SocialMedia_container}>
            <div>
                <Link href="https://www.linkedin.com/in/debabrata-bhowmick">
                    <Image
                        src={logo1}
                        width={38}
                        height={40}
                        alt="expertise"
                    />
                </Link>
            </div>
            <div>
                <Link href="mailto:debabrata.dev.ru@gmail.com">
                    <Image
                        src={logo2}
                        width={38}
                        height={40}
                        alt="expertise"
                    />
                </Link>
            </div>
            <div>
                <Link  href="https://wa.me/+8801770556351" target="_blank" >
                    <Image
                        src={logo3}
                        width={38}
                        height={40}
                        alt="expertise"

                    />
                </Link>
            </div>
            <div>
                <Link  href="https://www.behance.net/debabrabhowmick">
                    <Image
                        src={logo4}
                        width={38}
                        height={40}
                        alt="expertise"
                    />
                </Link>
            </div>

        </div>
    )
};

export default SocialMedia;
