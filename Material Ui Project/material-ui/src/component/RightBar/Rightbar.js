import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const Rightbar = () => {
  const StyledBox = styled(Box)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });
  return (
    <StyledBox flex={2} >
      <div>
        Rightbar
      </div>
    </StyledBox>
  )
}

export default Rightbar
