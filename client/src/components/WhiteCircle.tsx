import { DarkMode } from "@mui/icons-material";

interface WhiteCircleProps {
  width: string;
  height: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  bg?: string;
  z?: string;
}

const WhiteCircle = ({
  width,
  height,
  top,
  right,
  left,
  bottom,
  bg,
  z,
}: WhiteCircleProps) => {
  return (
    <div
      className={`whitecircle absolute w-[${width}] h-[${height}] bg-${bg} rounded-[50%] left-[${left}] top-[${top}] right-[${right}] bottom-[${bottom}] z-[${z}]`}
    >
      
    </div>
  );
};

export default WhiteCircle;
