import { setDir, handle } from "./index.js";
import { createServer } from 'http'

await setDir('./test')

createServer((req, res) => {
    handle(req, res)
}).listen(3000)