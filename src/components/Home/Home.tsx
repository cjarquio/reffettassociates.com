import "@mantine/core/styles.css";
import { Box } from "@mantine/core";
import StockVideo from "../../../src/assets/videos/executiveStockVideo.mp4";

export const Home: React.FC = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <video width={"100%"} autoPlay muted loop>
        <source src={StockVideo} type="video/mp4" />
      </video>
    </Box>
  );
};

export default Home;
