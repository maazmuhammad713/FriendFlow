import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://friend-flow.vercel.app/assets/hq720.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Knowledge Streams</Typography>
        <Typography color={medium}>
          <a href="https://knowledge.tech/">knowledge.tech</a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Join the bootcamp at our corporate training facility, designed to train
        talent for the Digital Economy
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
