import React from "react";
import styles from "./codepen.module.css";
import BoxContent from "components/box-content/box-content";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import CodePenIcon from "src/images/icons/Codepen.svg";

const Codepen: React.FC = () => {
    return (
        <Box className={styles.codepen}>
            <BoxContent>
                <div className={styles["codepen-image"]}>
                    <ImageLink
                        src={CodePenIcon}
                        to="https://codepen.io/Tricon/pens/public"
                        target="_blank"
                        label="Codepen"
                    />
                </div>
            </BoxContent>
        </Box>
    );
};

export default Codepen;
