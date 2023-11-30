import React from "react";
import styles from "./profiles.module.css";
import GitHubIcon from "src/images/profiles/GitHub.png";
import CodePenIcon from "src/images/profiles/Codepen.svg";
import PortfolioIcon from "src/images/profiles/Portfolio.svg";

const Profiles: React.FC = () => {
    return (
        <React.Fragment>
            <hr className={styles.separator} />

            <div className={styles.profiles}>
                <a href="https://github.com/patrick-radulian" target="_blank" className={styles.link}>
                    <img src={GitHubIcon} width={80} height={80} />
                    <p>GitHub Profile</p>
                </a>

                <a href="https://codepen.io/Tricon/pens/public" target="_blank" className={styles.link}>
                    <img src={CodePenIcon} width={80} height={80} />
                    <p>CodePen Profile</p>
                </a>

                <a href="/portfolio.html" className={styles.link}>
                    <img src={PortfolioIcon} width={80} height={80} />
                    <p>Portfolio</p>
                </a>
            </div>
        </React.Fragment>
    );
};

export default Profiles;
