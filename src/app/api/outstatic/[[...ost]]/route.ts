/* import { OstServer } from 'outstatic/server'

export { GET, POST, PUT, DELETE } from './[[...ost]]'

export const runtime = 'edge'

export async function GET(request: Request) {
  const ost = new OstServer({
    contentPath: 'content',
    basePath: '/admin',
  })
  return ost.handleRequest(request)
}
 */

import { OutstaticApi } from 'outstatic'
 
export const GET = OutstaticApi.GET
 
export const POST = OutstaticApi.POST