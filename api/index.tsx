import { Frog } from 'frog'
import { neynar } from 'frog/hubs'
import { parseEther } from 'viem'

export const app = new Frog({
  hub: neynar({ apiKey: process.env.NEYNAR_API_KEY as string }),
  title: 'TALON Frame',
})

const BOOST_AMOUNT = '0.0001'
const DEVELOPER_ADDRESS = '0x872bD846596Cc1aEde8Fd800997d242e3473fA83'

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ display: 'flex', fontSize: 60, color: 'white' }}>
        TALON Dashboard
      </div>
    ),
    intents: [
      <c.Button action="/checkin">Check-in</c.Button>,
      <c.Button.Transaction target="/boost">Boost</c.Button.Transaction>
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
