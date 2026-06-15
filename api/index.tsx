import { Frog, Button } from 'frog'
import { neynar } from 'frog/hubs'
import { parseEther } from 'viem'

export const app = new Frog({
  hub: neynar({ apiKey: 'NEYNAR_API_KEY' }),
})

const BOOST_AMOUNT = '0.0001'
const DEVELOPER_ADDRESS = '0x872bD846596Cc1aEde8Fd800997d242e3473fA83'

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '60px' }}>TALON Dashboard</h1>
        <p style={{ fontSize: '30px' }}>Collect points and secure your VIP access.</p>
      </div>
    ),
    intents: [
      <Button action="/checkin">Daily Check-in (+10)</Button>,
      <Button.Transaction target="/boost">Boost Score (+50 for 0.0001 ETH)</Button.Transaction>
    ],
  })
})

app.transaction('/boost', (c) => {
  return c.contract({
    abi: [], 
    chainId: 'eip155:8453',
    functionName: 'transfer',
    to: DEVELOPER_ADDRESS as `0x${string}`,
    value: parseEther(BOOST_AMOUNT),
  })
})

export default app
