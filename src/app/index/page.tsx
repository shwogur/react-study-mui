import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function IndexPage() {
  const [count,setCount] = useState(0);
  function handleButtonClick () {
    setCount(prev=>prev+1);
  }

  return (
    <Stack>
      <Typography>Index Page</Typography>
      <Typography variant='h1'>{count}</Typography>
      <Button onClick={handleButtonClick} variant='contained'>Count</Button>
    </Stack>
  );
}
