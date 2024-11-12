import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";

function Body() {
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        );
        setPopularMovie(response.data.results[5]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchPopularMovie();
  }, []);

  return (
    <Box sx={{ flex: 1, p: 2, position: "relative" }}>
      <Typography
        variant="h4"
        sx={{ position: "relative", marginLeft: "560px" }}
        gutterBottom
      >
        MOVIES
      </Typography>

      

      {/* TMDB Popular Movie */}
      {popularMovie && (
        <Paper
          elevation={10}
          sx={{
            width: 250,
            height: 430,
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            marginLeft: "500px",
            bgcolor: 'black'
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`}
            alt={popularMovie.title}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "10px", color: 'gold' }}>
            {popularMovie.title}
          </Typography>
          <Rating
            name="tmdb-rating"
            value={popularMovie.vote_average / 2}
            precision={0.5}
            readOnly
            sx={{top: '15px', marginLeft: '20px'}}
          />
        </Paper>
      )}

      <Box
        sx={{
          position: "relative",
          top: "50px",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 250,
            height: 430,
          },
        }}
      >

        
            

     </Box>   
  
    </Box>
  );
}





export default Body;
