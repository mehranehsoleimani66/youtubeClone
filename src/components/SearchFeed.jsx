import { Box, Typography } from "@mui/material";
import React from "react";
import { Videos } from ".";

import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90hv", flex: "2" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        search Result For:<span style={{ color: "#f31503" }}>{searchTerm}</span>
        Video
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
