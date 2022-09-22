//-- MODULE EXTERNAL
import { watchFile, unwatchFile, readFileSync } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//-- BROWSER SESSION
global.desc = `Made by XYZ Team` //ga work keknya
global.browser = `Firefox`

//-- BOT
global.wm = '@irwan_x_yans'
global.multiplier = 69

//-- WM STIKER
global.packname = `IG`
global.author = '@irwan_x_yans'

//-- LIST OWNER
global.owner = [
  ['628882611841', 'F', true, 'Pemilik WA Ini', 'irwanxnxx@gmail.com', 'magelang.id', 'Bot Developer']
]

//-- LIST MODERATOR
global.mods = JSON.parse(readFileSync('./src/mods.json'))

global.APIs = {
  // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
