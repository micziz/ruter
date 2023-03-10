import { list } from 'recursive-readdir-async'
import { homedir } from 'os'
import { cwd } from 'process'
import { readFile } from 'fs/promises'


const routeObj = {}
let toRemove = cwd().replace(homedir(), "")

export async function setDir(dir){
    let pathToRemove = dir.replace('.', "")
    const dircontent = await list(dir)
    dircontent.forEach((el) => {
      let fname = el.fullname.replace(toRemove, "").replace(homedir(), "").replace(pathToRemove, "")
      routeObj[el.title] = `${fname}`
    })
    console.log(routeObj)
}

export async function handle(req, res){
  console.log(req.url)
  if (req.url in routeObj){
    await readFile(routeObj[req.url].html)
  }
}