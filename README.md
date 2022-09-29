<p align="center"> 
  <img src="https://github.com/irwanx.png" height="130"/> 
  </p> 
  <h3 align="center">Made with ❤️ by</h3> 
  <p align="center"> 
  <a href="https://github.com/irwanx/"><img title="Author" src="https://img.shields.io/badge/author-irwanx-blue?style=for-the-badge&logo=github"></a> 
</p> 
  <p align="center"> 
  <a href="https://github.com/irwanx/followers"><img title="Followers" src="https://img.shields.io/github/followers/irwanx?color=blue&style=flat-square"></a> 
  <a href="https://visitor-badge.glitch.me/badge?page_id=irwanx/xyz-wabot/tree/multi-device"><img title="Viesitor" src="https://visitor-badge.glitch.me/badge?page_id=irwanx/readsw"></a> 
  <a href="https://github.com/irwanx/readsw/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/irwanx/readsw?color=red&style=flat-square"></a> 
  <a href="https://github.com/irwanx/readsw/network/members"><img title="Forks" src="https://img.shields.io/github/forks/irwanx/readsw?color=red&style=flat-square"></a> 
  <a href="https://github.com/irwanx/readsw/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/irwanx/readsw?label=watchers&color=blue&style=flat-square"></a>
  </p>
  
<h1 align="left">AUTO READ STORY WHATSAPP</h1>

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


[![NodeJs](https://img.shields.io/badge/nodejs-v16.17.0-yellow)](https://nodejs.org/en/download)
[![Git](https://img.shields.io/badge/Git-v2.37.3-orange)](https://git-scm.com/downloads)
[![UBUNTU](https://img.shields.io/badge/ubuntu-v20.04-blue)](https://releases.ubuntu.com/impish/)
[![Source](https://img.shields.io/badge/-BochilGaming-black?style=flat&logo=github&logoColor=white&link=https://github.com/BochilGaming/)](https://github.com/BochilGaming)
[![WhatsApp](https://img.shields.io/badge/-WhatsApp-green?style=flat&logo=whatsapp&logoColor=white&link=https://wa.me/628882611841/)](https://wa.me/628882611841)
> **Warning**: This project support for linux and windows!!
<br>

# Necessary Materials
```bash
- install nodejs v16.17.0
- install ffmpeg (not required)
- install imagemagick (not required)
- install git (for windows)
```
# Install & Run
```bash
> git clone https://github.com/irwanx/readsw.git
```
```bash
> cd readsw
```
```bash
> npm i
```
```bash
> node .
```
# Feature
Feature | Status |
-------|-------|
Read Story| OK |
Forwarded Story| OK |

> **Warning**: if you want a forwarded story, then you have to edit the file [in this section](https://github.com/irwanx/readsw/blob/master/plugins/_autorespon.js)
```bash
> let to = ''
```
In line 9 change ' ' to whatsapp jid

Example
```bash
> let to = '62812345xxxx@s.whatsapp.net'
```
Becomes
```bash
> import db from '../lib/database.js'
let handler = m => m

handler.all = async function(m, {
    conn
}) {
    if (m.chat == 'status@broadcast') {
        if (db.data.settings[this.user.jid].getsw) {
            let to = '62812345xxxx@s.whatsapp.net'
            if (to == '') return console.log('[NOTIF STORY] To not found')
            await this.reply(to, `[NOTIF STORY]\nFrom: @${m.sender.split('@')[0]}`, m)
            await this.copyNForward(to, m).catch(e => console.log(e, m))
        }
    }
}
export default handler
```
## Thanks To
- Allah Swt
- [Adiwajshing](https://github.com/Adiwajshing)
- [Amelia Lisa](https://github.com/Ameliascrf)
- [Amiruldev](https://github.com/amiruldev20)
- [Alex](https://instagram.com/alexx_gpakboy)
- [BochilGaming](https://github.com/BochilGaming)
- [Irwanx](https://github.com/irwanx)
- [Nurutomo](https://github.com/Nurutomo)
- Wi-Fi Tetangga
- Ayang(misal)
