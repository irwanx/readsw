import db from '../lib/database.js'
let handler = m => m

handler.all = async function(m, {
    conn
}) {
    if (m.chat == 'status@broadcast') {
        if (db.data.settings[this.user.jid].getsw) {
            let to = ''
            if (to == '') return console.log('[NOTIF STORY] To not found')
            await this.reply(to, `[NOTIF STORY]\nFrom: @${m.sender.split('@')[0]}`, m)
            await this.copyNForward(to, m).catch(e => console.log(e, m))
        }
    }
}
export default handler