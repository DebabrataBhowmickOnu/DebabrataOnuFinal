import React, { useEffect } from "react";
import styles from "@/styles/BookCall.module.css";

const BookCall = () => {
    useEffect(() => {
        // Dynamically load the Calendly widget script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup the script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.bookCall_container} id="GET_IN_TOUCH">
            <div className={styles.bookCall_contain}>
                <h2>Book a <span>Call now!</span></h2>
                <p>Let's collaborate to bring your vision to life. Contact me today to discuss your project, and <br />
                let's embark on a journey to elevate your online presence together.</p>
            </div>

            <div className={styles.contact_container}>
                <div>
                    <h3>30 Minute Meeting</h3>
                    <p>30 Min</p>
                </div>
                <div className={styles.Calendly_container}>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/debabrata-developer/30min"
                        style={{ width: "100%", minWidth: "320px", height: "700px", overflow: "hidden" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default BookCall;
