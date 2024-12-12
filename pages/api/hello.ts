import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process';



type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
