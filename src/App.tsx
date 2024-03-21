import { Button, Typography, styled } from '@mui/material';
import './App.css';
import InfomationsList from './components/InfomationsList';
import { useState } from 'react';
import Contents from './components/Content'

const Container = styled('div')({
  height: '408px',
  width: '366px',
  borderRadius: '10px',
  backgroundColor: 'white',
  padding: '20px'
})

const App = () => {
  return (
    <>
      <Container>
        <Typography style={{
          marginBottom: '6px',
          fontWeight: 'bold',
          fontSize: '20px'
        }}>お知らせ</Typography>
        <Contents />
        <div style={{
          textAlign: 'center',
          marginTop: '8px'
        }}>
          <Button style={{
            width: '89px',
            height: '22px',
          }}>もっと見る</Button>
        </div>

      </Container>
      <br />
      <InfomationsList />
    </>
  );
}

export default App;
