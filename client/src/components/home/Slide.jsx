import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Button, Divider, Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  display: flex;
  padding: 10px 20px;
`;

const Timer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "10px",
  alignItems: "center",
  color: "#7f7f7f",

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    display: "none",
  },
}));

const DealText = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "600",
  lineHeight: "32px",
  marginRight: "25px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "550",
    marginRight: "5px",
  },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  backgroundColor: " #2874f0",
  borderRadius: "2px",
  fontSize: "13px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    padding: "0px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: "150px",

  [theme.breakpoints.down("sm")]: {
    height: "80px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginTop: "5px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));

const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
