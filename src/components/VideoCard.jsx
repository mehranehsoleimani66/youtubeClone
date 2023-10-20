import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { VideoId },
    snippet
  }
}) => (
  <Card
    sx={{
      width: { md: "300px", sm: "358px", xs: "100%" },
      boxShadow: "none",
      borderRadius: 0,
      //i added this css
      marginLeft: "0"
    }}
  >
    <Link to={VideoId ? `/video/${VideoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { md: "300px", sm: "358px", xs: "100%" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
      <Link to={VideoId ? `/video/${VideoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.demoChannelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ color: "gray", fontSize: 12, ml: "5" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);
export default VideoCard;
