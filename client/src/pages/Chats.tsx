import { useState, useContext } from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import UserWidget from "../components/UserWidget";
import ChatsBar from "../components/ChatsBar";
import ChatsArea from "../components/ChatsArea";
import MediaBar from "../components/MediaBar";
import styles from "../styles";
import { ThemeStyles } from "../App";
import { IconButton, useMediaQuery } from "@mui/material";
import {
  LocalPhone,
  Notifications,
  Settings,
  Menu,
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
  Close,
} from "@mui/icons-material";
import { UseMediaQueryOptions } from "@mui/material";

interface ChatsProps {
  isToggleMenu: boolean;
  isHideSideBar: boolean;
  isHideChatsBar: boolean;
  isHideChatsBarOnMobile: boolean;
}

const Chats = () => {
  const theme: any = useContext(ThemeStyles);

  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  const [isToggleMenu, setIsToggleMenu] =
    useState<ChatsProps["isToggleMenu"]>(false);
  const [isHideSideBar, setIsHideSideBar] =
    useState<ChatsProps["isHideSideBar"]>(false);

  const [isHideChatsBar, setIsHideChatsBar] =
    useState<ChatsProps["isHideChatsBar"]>(false);

  const [isHideChatsBarOnMobile, setIsHideChatsBarOnMobile] =
    useState<ChatsProps["isHideChatsBarOnMobile"]>(false);

  return (
    <div className={`flex w-[100%] h-[100%]`}>
      <SideBar />

      <div className={`flex flex-col w-[100%] h-[100%] basis-auto`}>
        <div className={`${styles.flexBetween} w-[100%] px-[1%] relative`}>
          <h2 className={`${theme.font4} font-lexend text-[30px] self-start`}>
            Story
          </h2>

          <div className="hidden mdsm:flex">
            <IconButton onClick={() => setIsToggleMenu((prev) => !prev)}>
              <Menu
                sx={{ color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}` }}
              />
            </IconButton>
          </div>

          {isToggleMenu && (
            <div
              className={`absolute top-[2rem] right-[2rem] ${theme.background1} ${styles.flexColCenter} p-[1rem] gap-[1rem] rounded-[0.75rem]`}
            >
              <IconButton onClick={() => setIsToggleMenu((prev) => !prev)}>
                <Close
                  sx={{ color: `${theme.mode} === "light` ? "#000" : "#fff" }}
                />
              </IconButton>

              <UserWidget />
            </div>
          )}
        </div>
        <div
          className={`${styles.flexBetween} w-[100%] px-[1%] py-[1rem] sm:overflow-scroll`}
        >
          <div
            className={`${styles.flexColCenter} gap-[1rem] w-[78%] mdsm:w-[100%] overflow-scroll`}
          >
            <TopBar />
          </div>

          <div
            className={`${styles.flexCenter} gap-[1rem] w-[22%] mdsm:hidden`}
          >
            <div className={`${styles.flexCenter} gap-[0.75rem]`}>
              <IconButton>
                <LocalPhone
                  sx={{
                    color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                  }}
                />
              </IconButton>

              <IconButton>
                <Notifications
                  sx={{
                    color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                  }}
                />
              </IconButton>

              <IconButton>
                <Settings
                  sx={{
                    color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                  }}
                />
              </IconButton>
            </div>

            <div className="">
              <UserWidget />
            </div>
          </div>
        </div>

        <div className={`flex w-[100%] h-[100%] p-[1%] gap-[0.5rem]`}>
          <div
            className={`chatsbar ${
              isHideChatsBar ? "basis-0" : "basis-[20%]"
            } ${
              isHideChatsBarOnMobile ? "basis-100%" : "basis-0"
            } p-[1rem] h-[100%] relative`}
          >
            {!isHideChatsBar && <ChatsBar />}

            <div className={`absolute bottom-[0.2em] right-[0.4em] sm:hidden`}>
              <IconButton onClick={() => setIsHideChatsBar((prev) => !prev)}>
                {isHideChatsBar ? (
                  <ArrowCircleRightOutlined
                    sx={{
                      color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                    }}
                    titleAccess="Unhide Chats Bar"
                  />
                ) : (
                  <ArrowCircleLeftOutlined
                    sx={{
                      color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                    }}
                    titleAccess="Hide Chats Bar"
                  />
                )}
              </IconButton>
            </div>

            <div
              className={`hidden absolute bottom-[0.2em] right-[0.4em] sm:flex`}
            >
              <IconButton
                onClick={() => setIsHideChatsBarOnMobile((prev) => !prev)}
              >
                {isHideChatsBarOnMobile ? (
                  <ArrowCircleRightOutlined
                    sx={{
                      color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                    }}
                    titleAccess="Unhide Chats Bar"
                  />
                ) : (
                  <ArrowCircleLeftOutlined
                    sx={{
                      color: `${theme.mode === "light" ? "#000" : "#dcdcdc"}`,
                    }}
                    titleAccess="Hide Chats Bar"
                  />
                )}
              </IconButton>
            </div>
          </div>

          <div
            className={`basis-[60%] p-[1rem] h-[100%] ${
              !isHideChatsBarOnMobile ? "basis-100%" : "basis-0 hidden"
            }`}
          >
            <ChatsArea />
          </div>

          <div
            className={`${
              isHideChatsBar ? "basis-[40%]" : "basis-[20%]"
            } p-[1rem] h-[100%] sm:hidden sm:basis-0`}
          >
            <MediaBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
