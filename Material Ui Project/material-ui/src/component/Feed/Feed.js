import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react';
import Post from '../post/Post';


const Feed = () => {
  const StyledBox = styled(Box)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
    alignItems:'center'
  });
  return (
    <StyledBox flex={4}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </StyledBox>
  )
}

export default Feed
