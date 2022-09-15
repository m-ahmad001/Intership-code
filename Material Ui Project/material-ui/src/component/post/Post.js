import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Post = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 800, margin:'10px'}}>
        <CardMedia
          component="img"
          height="300"
          image="https://assets-prd.ignimgs.com/2022/08/10/spidermanremastered-performancereview-blogroll-1660170062718.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spider
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> 
    </div>
  )
}

export default Post
