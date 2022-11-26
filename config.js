//-- MODULE EXTERNAL
import {
	watchFile,
	unwatchFile,
	readFileSync
} from 'fs'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'
global.set = {
	desc: 'readsw',
	browser: 'Firefox',
	wm: '@irwan_x_yans',
	pack: `IG`,
	auth: '@irwan_x_yans',
	owner: [
		['628882611841', 'F', true, 'Pemilik WA Ini', 'irwanxnxx@gmail.com', 'magelang.id', 'Bot Developer']
	],
	mod: JSON.parse(readFileSync('./src/mods.json')),
	APIs: {
		// API Prefix
		// name: 'https://website'
		nrtm: 'https://nurutomo.herokuapp.com',
		bg: 'http://bochil.ddns.net',
		xteam: 'https://api.xteam.xyz',
		LeysCoder: 'https://leyscoders-api.herokuapp.com'
	},
	APIKeys: {
		// APIKey Here
		// 'https://website': 'apikey'
		'https://api.xteam.xyz': 'd90a9e986e18778b',
		'https://leyscoders-api.herokuapp.com': 'dappakntlll'
	},
}
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})