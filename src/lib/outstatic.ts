/* import { load } from 'outstatic/server'

let outstatic: any

export async function getDocuments(collection: string, fields: string[]) {
  if (!outstatic) {
    outstatic = await load()
  }
  return outstatic.getDocuments(collection, fields)
}

export async function getDocumentPaths(collection: string) {
  if (!outstatic) {
    outstatic = await load()
  }
  return outstatic.getDocumentPaths(collection)
}

export async function getDocumentBySlug(collection: string, slug: string, fields: string[]) {
  if (!outstatic) {
    outstatic = await load()
  }
  return outstatic.getDocumentBySlug(collection, slug, fields)
}/*  */