import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channelDetail }) => (
  <Box sx={{ boxShodow: "none", borderRadius: "20px" }}>
    <Link to={`/channel${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItem: "center",
          color: "#fff"
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumBnails?.hight?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "190px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3 "
          }}
        >
          <Typography>
            {channelDetail?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "14", color: "gray", ml: "5px" }}
            />
          </Typography>
        </CardMedia>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
