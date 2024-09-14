import { OstServerOptions } from 'outstatic'

const ost: OstServerOptions = {
  contentPath: 'content',
  basePath: '/admin',
}

export async function GET(request: Request) {
  return ost.handleRequest(request)
}

export async function POST(request: Request) {
  return ost.handleRequest(request)
}

export async function PUT(request: Request) {
  return ost.handleRequest(request)
}

export async function DELETE(request: Request) {
  return ost.handleRequest(request)
}