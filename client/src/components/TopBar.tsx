import { useContext } from "react";
import styles from "../styles";
import { ThemeStyles } from "../App";
import {
  Ellipse17,
  Ellipse18,
  Ellipse19,
  Ellipse20,
  Ellipse21,
  Ellipse22,
  Ellipse23,
  Ellipse24,
} from "../assets/index";
import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TopBar = () => {
  const theme: any = useContext(ThemeStyles);

  return (
    <div className={`${styles.flexBetween} w-[100%]`}>
      <div className={`${styles.flexStart} p-[0.25rem] w-[100%]`}>
        <div className={`${styles.flexBetween} w-[100%]`}>
          <div className={`${styles.flexStart} p-[0.25rem] w-[100%]`}>
            <div
              className={`${styles.flexStart} overflow-scroll gap-[2.5rem] w-[100%] sm:hidden`}
            >
              <div className={`${styles.flexColCenter} relative`}>
                <img src={Ellipse17} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-semibold`}>
                  You
                </h4>

                <div className="add-story absolute top-[38%] left-[48%]">
                  <IconButton>
                    <Add
                      sx={{
                        color: `${theme.mode === "light" ? "#fff" : "#dcdcdc"}`,
                        fontSize: "2em",
                        fontWeight: "900",
                      }}
                    />
                  </IconButton>
                </div>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse18} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Sam</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse19} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Yang</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse20} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Rasta</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse21} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>
                  Director
                </h4>
              </div>

              <div className={`${styles.flexColCenter} font-thin`}>
                <img src={Ellipse22} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Mia</h4>
              </div>

              <div className={`${styles.flexColCenter} font-thin`}>
                <img src={Ellipse23} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>James</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse24} alt="" className="w-[100%]" />
                <h4 className={`${theme.font} font-lexend`}>McLemore</h4>
              </div>
            </div>

            <div
              className={`hidden ${styles.flexBetween} w-[100%] h-[100%] overflow-scroll story sm:flex`}
            >
              <div className={`${styles.flexColCenter} relative`}>
                <img src={Ellipse17} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-semibold`}>
                  You
                </h4>

                <div className="add-story absolute top-[37%] left-[47%]">
                  <IconButton>
                    <Add
                      sx={{
                        color: `${theme.mode === "light" ? "#fff" : "#dcdcdc"}`,
                        fontSize: "1.4em",
                        fontWeight: "900",
                      }}
                    />
                  </IconButton>
                </div>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse18} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Sam</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse19} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Yang</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse20} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Rasta</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse21} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>
                  Director
                </h4>
              </div>

              <div className={`${styles.flexColCenter} font-thin`}>
                <img src={Ellipse22} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>Mia</h4>
              </div>

              <div className={`${styles.flexColCenter} font-thin`}>
                <img src={Ellipse23} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend font-thin`}>James</h4>
              </div>

              <div className={`${styles.flexColCenter}`}>
                <img src={Ellipse24} alt="" className="w-[75%]" />
                <h4 className={`${theme.font} font-lexend`}>McLemore</h4>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;
