import { Box, Grid, Hidden, Typography } from "@mui/material"
import { data_1 } from "../testData/data_1";

const InfomationsList = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        height: 408,
        width: 366,
        bgcolor: 'white',
        borderRadius: '10px',
        textAlign: 'left',
      }}
    >
      <Typography sx={{
        marginBottom: '10px',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: 600,
      }}
      >
        お知らせ
      </Typography>

      {data_1.map((data, i) => {
        return (
          <Grid container spacing={2} sx={{
            marginRight: 'auto',
            marginLeft: 'auto',
            borderBottom: 1,
            paddingBottom: '10px',
            width: 326,
          }}
          >
            <Grid item xs={3} sx={{
              paddingTop: '100px',
            }}
            >
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: '12px'
              }}
              >
                {data.date}
              </Typography>
              <Typography sx={{
                backgroundColor: 'tomato',
                borderRadius: '5px',
                width: '66px',
                height: '24px',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '10px',
                color: 'white'
              }}>
                {data.categori}
              </Typography>
            </Grid>

            <Grid item xs={9}>
              <Typography sx={{
                fontFamily: 'Inter',
                fontSize: '12px',
              }}>
                {data.content}
              </Typography>
            </Grid>
          </Grid>
        )
      })}
    </Box>
  )
}

export default InfomationsList;