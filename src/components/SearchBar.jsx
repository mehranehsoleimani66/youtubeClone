import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
        pl: 2
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
