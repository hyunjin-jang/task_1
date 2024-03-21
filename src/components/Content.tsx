import { styled } from '@mui/material';
import { data_1 } from '../testData/data_1';


const Content = styled('div')({
  height: '310px',
  width: '326px',
  overflowY: 'scroll',
  overflowX: 'hidden'
})

const Overview = styled('div')({
  marginTop: '10px',
  height: '52px',
  width: '326px',
  display: 'flex',
  borderBottom: '1px solid grey',
})

const OverviewItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
})

function Contents() {
  return (
    <Content>
      {data_1.map((data) => (
        <Overview key={data.id}>
          <OverviewItem>
            <span>{data.date}</span>
            <span style={{
              fontSize: '10px',
              backgroundColor: `${data.categori === "在庫管理"? '#427BE9' : '#82BF20'}`,
              padding: '6px 0px',
              borderRadius: '5px',
              color: 'white',
              width: '66px',
              height: '24px',
              textAlign: 'center'
            }}>{data.categori}</span>
          </OverviewItem>
          <OverviewItem style={{
            marginLeft: '17px',
          }}>
            <span style={{
              color: `${data.caution === '資材到着'? '#427BE9' : '#D7092F'}`
            }}>{data.caution}</span>
            <span>{data.content}</span>
          </OverviewItem>
        </Overview>
      ))}
    </Content>
  )
}

export default Contents;