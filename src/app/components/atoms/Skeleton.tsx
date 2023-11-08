import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export default function CustomSkeleton() {
  return (
    <Box style={{ width: '100%', maxHeight: 500 }}>
      <Skeleton height={'80px'} />
      {[...new Array(10)].map((a, b) => (
        <Skeleton key={b} height={'30px'} animation="wave" />
      ))}
      <Skeleton height={'80px'} animation={false} />
    </Box>
  )
}
