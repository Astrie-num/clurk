export const themeStyles = (mode: any) => {
  if (mode === "light") {
    return {
      mode: mode,
      font: "text-black",
      font1: "text-lightGray",
      font2: "text-moderateBlue",
      font3: "text-white",
      font4: "text-moderateBlue",
      background: "bg-white",
      background1: "bg-moderateBlue",
      background2: "bg-lightBlue"
    };
  } else {
    return {
      mode: mode,
      font: "text-white",
      font1: "text-lightGray",
      font2: "text-darkBlue",
      font3: "text-lightGray",
      font4: "text-lightGray",
      background: "bg-black",
      background1: "bg-veryDarkBlue",
      background2: "bg-lightBlue"
    };
  }
};
