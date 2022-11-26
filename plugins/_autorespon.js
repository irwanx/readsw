import db from '../lib/database.js'
let handler = m => m

handler.all = async function(m) {
    if (m.chat == 'status@broadcast') {
        if (db.data.settings[this.user.jid].autogetsw) {
            let to = ''
            if (to == '') return console.log('[NOTIF STATUS] To not found')
            await this.reply(to, `[NOTIF STATUS] Succes Read Status\nName: ${m.sender.name}\nNumber: @${m.sender.split('@')[0]}`, null)
            await this.copyNForward(to, m).catch(e => console.log(e, m))
            console.log(`[NOTIF STATUS] Succes Read Status\nName: ${m.sender.name}\nNumber: @${m.sender.split('@')[0]}`)
        }
    }
}
export default handler