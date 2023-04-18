import { useContext, useState } from "react";
import {
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from "../styles";
import { ThemeStyles } from "../App";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import { sidBarProps } from "../constants";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  isHideSidebar: boolean;
}

export let hideSideBar: boolean = false;

const SideBar = () => {
  const theme: any = useContext(ThemeStyles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isHideSideBar, setIsHideSideBar] =
    useState<SideBarProps["isHideSidebar"]>(false);

  return (
    <div
      className={`sidebar ${styles.flexColBetween} ${
        theme.background1
      } py-[2rem] ${
        isHideSideBar ? "basis-[3%]" : "basis-[15%]"
      } mdsm:basis-[3%] ${
        isHideSideBar ? "px-[0.5rem]" : "px-[2rem]"
      } mdsm:px-[0.5rem] relative`}
    >
      <div className={`${styles.flexColCenter} gap-[0.5rem]`}>
        <div
          className={`${styles.flexStart} gap-[1rem] w-[100%] cursor-pointer`}
          onClick={() => navigate("/")}
        >
          <img
            src={`${
              theme.mode === "light" ? "../clurk1.svg" : "../clurk2.svg"
            }`}
            alt="logo"
            className={`${
              isHideSideBar ? "w-[100%]" : "w-[25%]"
            } mdsm:w-[100%]`}
          />
          <h2
            className={`sidebar-prop ${
              isHideSideBar && "hidden"
            } font-inter font-bold text-[27px] mdsm:hidden ${theme.font3}`}
          >
            Blath
          </h2>
        </div>

        <div className="flex self-end mdsm:hidden">
          <IconButton
            onClick={() => {
              setIsHideSideBar((prev) => !prev);
              hideSideBar = isHideSideBar;
            }}
          >
            {isHideSideBar ? (
              <ArrowCircleRightOutlined
                sx={{
                  fontSize: "200%",
                  color: `${theme.mode === "light" ? "#ffffff" : "#dcdcdc"}`,
                }}
              />
            ) : (
              <ArrowCircleLeftOutlined
                sx={{
                  fontSize: "200%",
                  color: `${theme.mode === "light" ? "#ffffff" : "#dcdcdc"}`,
                }}
              />
            )}
          </IconButton>
        </div>

        <div
          className={`w-[100%] ${styles.flexColCenter} ${theme.font3} gap-[0.75rem]`}
        >
          <h2 className="flex font-lexend font-bold text-[20px] self-start">
            Menu
          </h2>

          <div className={`${styles.flexColCenter} w-[100%] z-[40]`}>
            {sidBarProps.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`${styles.flexStart} w-[100%]`}
              >
                <IconButton sx={{ color: "#fff" }}>{item.icon}</IconButton>

                {!isHideSideBar && (
                  <h3
                    className={`sidebar-prop ${theme.font3} font-lexend ml-[2rem] cursor-pointer w-[100%] mdsm:hidden`}
                  >
                    {item.title}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${theme.font3} ${styles.flexCenter} gap-[0.75rem]`}>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.mode === "light" ? (
            <DarkMode
              sx={{ color: `${theme.mode === "light" ? "#fff" : "#dcdcdc"}` }}
            />
          ) : (
            <LightMode sx={{ color: "#fff" }} />
          )}
        </IconButton>

        <h3
          className={`mode font-inter font-bold mode ${
            isHideSideBar && "hidden"
          } mdsm:hidden`}
        >{`Switch to ${theme.mode === "light" ? "Darkmode" : "Lightmode"}`}</h3>
      </div>
    </div>
  );
};

export default SideBar;
