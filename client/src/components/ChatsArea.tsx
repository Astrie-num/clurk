import { useContext, useState } from "react";
import styles from "../styles";
import {
  LocalPhoneOutlined,
  VideoCameraBackOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import UserWidget from "./UserWidget";
import { IconButton } from "@mui/material";
import MessageArea from "./MessageArea";
import { ThemeStyles } from "../App";

const ChatsArea = () => {
  const theme: any = useContext(ThemeStyles);

  return (
    <div className={`${styles.flexColCenter} w-[100%] h-[100%] gap-[1rem]`}>
      <div className={`${styles.flexBetween} w-[100%] h-[10%]`}>
        <UserWidget />

        <div className={`${styles.flexStart} gap-[1rem]`}>
          <IconButton>
            <LocalPhoneOutlined
              sx={{
                color: `${theme.mode === "light" ? "#17181a" : "#dcdcdc"}`,
              }}
            />
          </IconButton>

          <IconButton>
            <VideoCameraBackOutlined
              sx={{
                color: `${theme.mode === "light" ? "#17181a" : "#dcdcdc"}`,
              }}
            />
          </IconButton>

          <IconButton>
            <MoreHorizOutlined
              sx={{
                color: `${theme.mode === "light" ? "#17181a" : "#dcdcdc"}`,
              }}
            />
          </IconButton>
        </div>
      </div>

      <div className={`h-[80%]`}></div>

      <div className={`w-[100%] items-center px-[0.5rem] py-[0.1rem] h-[10%]`}>
        <MessageArea />
      </div>
    </div>
  );
};

export default ChatsArea;
