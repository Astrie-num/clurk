import { useContext } from "react";
import { ThemeStyles } from "../App";
import styles from "../styles";
import {
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
  Ellipse7,
  Ellipse8,
  chats,
} from "../assets";

const Intro = () => {
  const theme: any = useContext(ThemeStyles);

  return (
    <div
      className={`${styles.flexCenter} flex-col w-[100%] h-[100%] overflow-hidden relative`}
    >
      <div
        className={`intro ${theme.background1} flex w-[100%] h-[100%] overflow-scroll px-[10rem] mdsm:px-[2rem] xs:px-[0.7rem] py-[5rem]`}
      >
        <div
          className={`${styles.flexColBetween} gap-[3rem] w-[100%] px-[1rem] py-[4rem]`}
        >
          <img src={Ellipse3} alt="img1" className="w-[30%] xsss:w-[70%]" />
          <img
            src={Ellipse4}
            alt="img2"
            className="w-[30%] self-start xsss:w-[70%]"
          />
          <img src={Ellipse5} alt="img3" className="w-[30%] xsss:w-[70%]" />
        </div>

        <div
          className={`${styles.flexColCenter} gap-[4rem] intro-center text-white font-bold text-[28px] sm:text-[18px]`}
        >
          <div className={`${styles.flexColBetween} text-center font-lexend`}>
            <h2 className="">Welcome to Blath</h2>
            <h2 className="">Connect and chat with friends</h2>
          </div>

          <div className={`${styles.flexCenter}`}>
            <p
              className={`text-center font-lexend ${theme.font1} text-[17px] sm:text-[14px] font-medium`}
            >
              Welcome to Blath, the ultimate chat app for staying connected with
              your friends! With Blath, you can chat, share photos and videos,
              and stay up-to-date on all the latest news and trends. Whether
              you're looking to catch up with old friends or make new ones,
              Blath has everything you need to stay connected and engaged.
            </p>
          </div>

          <button
            className={`${styles.flexCenter} ${theme.font2} px-[1rem] py-[7px] font-bold font-lexend bg-white text-[20px] rounded-[5px]`}
          >
            Get Started
          </button>
        </div>

        <div
          className={`${styles.flexColBetween} gap-[3rem] px-[1rem] py-[4rem] w-[100%]`}
        >
          <img src={Ellipse6} alt="img4" className="w-[30%] xsss:w-[70%]" />
          <img
            src={Ellipse7}
            alt="img5"
            className="w-[30%] self-end xsss:w-[70%]"
          />
          <img src={Ellipse8} alt="img6" className="w-[30%] xsss:w-[70%]" />
        </div>
      </div>

      <div className="w-[20rem] h-[25rem] whitecircle absolute right-[-14rem] bottom-[-5rem] bg-white z-[60]"></div>
    </div>
  );
};

export default Intro;
