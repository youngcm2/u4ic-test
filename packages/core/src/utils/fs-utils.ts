import {promises} from 'node:fs'

export async function directoryExists(path: string): Promise<boolean> {
  return promises.stat(path)
  .then(stat => {
    return stat.isDirectory()
  })
  .catch(error => {
    if (error.code === 'ENOENT') {
      return false
    }

    throw error
  })
}

export async function fileExists(path: string): Promise<boolean> {
  return promises.stat(path)
  .then(stat => {
    return stat.isFile()
  })
  .catch(error => {
    if (error.code === 'ENOENT') {
      return false
    }

    throw error
  })
}

export async function hasGit(path: string): Promise<boolean> {
  const exists = await directoryExists(path)
  if (!exists) {
    return false
  }

  const results = await promises.readdir(path, {withFileTypes: true})

  const directories = results.filter(d => d.isDirectory())
  return directories.some(d => d.name === '.git')
}

