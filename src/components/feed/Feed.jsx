import { Box } from '@mui/material'
import React from 'react'
import CardFeed from '../custom/CardFeed'

const Feed = () => {
  return (
    <Box  flex={3} p={2}>
      <CardFeed/>
      <CardFeed/>
      <CardFeed/>
      <CardFeed/>
      <CardFeed/>
      <CardFeed/>
      <CardFeed/>
    </Box>
  )
}

export default Feed
