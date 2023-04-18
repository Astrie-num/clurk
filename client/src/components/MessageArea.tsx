import { IconButton, InputBase, TextField } from "@mui/material";
import { useContext, useState } from "react";
import styles from "../styles";
import {
  AttachFileOutlined,
  MicOutlined,
  Send,
  Face,
} from "@mui/icons-material";
import { ThemeStyles } from "../App";

interface MessageProps {
  message: string;
}

const MessageArea = () => {
  const [message, setMessage] = useState<MessageProps["message"]>("");

  const theme: any = useContext(ThemeStyles);

  return (
    <div className={`${styles.flexCenter} w-[100%] h-[100%]`}>
      <div className={`${styles.flexCenter} h-[100%] gap-[0.25rem] w-[100%]`}>
        <div>
          <IconButton sx={{ background: "#255277", borderRadius: "0.4em" }}>
            <AttachFileOutlined sx={{ color: "#dcdcdc" }} />
          </IconButton>
        </div>

        <div className={`w-[100%] h-[100%] font-lexend relative`}>
          <InputBase
            placeholder="write message ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              width: "100%",
              height: "100%",
              border: "none",
              padding: "0 1rem",
              color: `${theme.mode === "light" ? "#0c0d0d" : "#dcdcdc"}`
            }}
          />

          <div
            className={`absolute right-[1rem] top-[0.8em] ${styles.flexCenter} gap-[1em]`}
          >
            <IconButton>
              <Face
                sx={{
                  color: `${theme.mode === "light" ? "#17181a" : "#dcdcdc"}`,
                }}
              />
            </IconButton>

            <IconButton>
              <MicOutlined
                sx={{
                  color: `${theme.mode === "light" ? "#17181a" : "#dcdcdc"}`,
                }}
              />
            </IconButton>

            <IconButton>
              <Send
                sx={{
                  color: "#004ca5",
                }}
              />
            </IconButton>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
