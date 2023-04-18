import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import { ThemeStyles } from "../App";
import { navigations, navigations2 } from "../constants";
import { IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

interface NavbarProps {
  isMobileScreen: boolean;
  navigator: string
}

const Navbar = () => {
  const theme: any = useContext(ThemeStyles);

  const [isMobileScreen, setIsMobileScreen] =
    useState<NavbarProps["isMobileScreen"]>(false);
  const [navigator, setNavigator] = useState<NavbarProps['navigator']>("")

  const navigate = useNavigate();

  return (
    <div
      className={`navbar z-[50] ${styles.flexBetween} py-[1rem] px-[80px] sm:px-[30px] w-[100%] ${theme.background1} oveflow-hidden relative`}
    >
      <div className={`${styles.flexCenter}`}>
        <img
          src={`${theme.mode === "light" ? "../clurk1.svg" : "../clurk2.svg"}`}
          alt="logo"
          className="w-[4rem]"
        />
      </div>

      <div className={`${theme.font1} font-lexend mdsm:hidden`}>
        {navigations.map((navigator, index) => (
          <button
            key={`${navigator.id}-${index}`}
            className={`${
              index === navigations.length - 1 ? "mr-0" : "mr-[4rem]"
            }`}
            onClick={() => navigate(`${navigator.navigation}`)}
          >
            {navigator.title}
          </button>
        ))}
      </div>

      <div className="hidden mdsm:flex">
        <IconButton onClick={() => setIsMobileScreen((prev) => !prev)}>
          <Menu
            sx={{ color: `${theme.mode === "light" ? "#fff" : "#dcdcdc"}` }}
          />
        </IconButton>
      </div>

      {isMobileScreen && (
        <div
          className={`hidden menu-mobile ${theme.font1} ${styles.flexColCenter} ${theme.background2} absolute top-[2rem] left-[35%] sm:right-[1rem] gap-[1.8rem] rounded-[10px] px-[2rem] py-[1.5rem] font-lexend mdsm:flex`}
        >
          <IconButton onClick={() => setIsMobileScreen((prev) => !prev)}>
            <Close
              sx={{ color: `${theme.mode === "light" ? "#fff" : "#dcdcdc"}` }}
            />
          </IconButton>
          {navigations.map((navigator, index) => (
            <button key={`${navigator.id}-${index}`} onClick={() => navigate(`${navigator.navigation}`)}>{navigator.title}</button>
          ))}

          <div className={`${styles.flexColCenter} gap-[1rem]`}>
            {navigations2.map((navigator, index) => (
              <button
                key={index}
                onClick={() =>
                  navigate(`${navigator === "Login" ? "/login" : "/register"}`)
                }
                className={`${
                  navigator === "Register"
                    ? "bg-white px-[20px] py-[5px] rounded-[5px] text-moderateBlue font-bold text-[15px]"
                    : "login-btn text-white px-[20px] py-[5px] rounded-[5px] font-bold text-[15px]"
                }`}
              >
                {navigator}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={`${theme.font} font-inter sm:hidden`}>
        {navigations2.map((navigator, index) => (
          <button
            key={index}
            onClick={() =>
              navigate(`${navigator === "Login" ? "/login" : "/register"}`)
            }
            className={`${
              index === navigations2.length - 1 ? "mr-0" : "mr-[4rem]"
            } ${
              navigator === "Register"
                ? "bg-white px-[20px] py-[5px] rounded-[5px] text-moderateBlue font-bold text-[15px]"
                : "login-btn text-white px-[20px] py-[5px] rounded-[5px] font-bold text-[15px]"
            }`}
          >
            {navigator}
          </button>
        ))}
      </div>

      <div className="w-[20rem] h-[25rem] whitecircle absolute left-[-14rem] top-[-3rem] bg-white z-[60]"></div>
    </div>
  );
};

export default Navbar;
