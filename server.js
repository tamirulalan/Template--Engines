const express =require('express')

const app =express()


const fs = require('fs') // this engine requires the fs module
app.engine('ntl', (filePath, options, callback) => { // define the template engine
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple template engine
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', `<h1>${options.message}</h1>`) .replace('#content#','<div>'+ options.content + '</div>')
      .replace('#img#', `<img src=${options.img} + 'width="300" height="400">"`)
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'ntl') // register the template engine
app.listen(3000, ()=>{
    console.log('Listning.....')
})


app.get('/', (req, res) => {
    res.render('index', { title: 'WC', message: 'World Cup 2022 Round of 16 Schedule: Qualifying Teams, Match Streaming', content: 'he schedule for the World Cup knockout round is beginning to fall into places as more teams qualify and advance past the group stage into the round of 16. The USMNT punched its ticket forward with a 1-0 win over Iran on Tuesday, which it needed to advance after tying its first two games against England and Wales. USA will face Netherlands, the Group A winner, on Saturday, Dec. 3. England, which finished first in Group B ahead of the USMNT, will face Group A runner-up Senegal on Sunday.' })  
  })
  app.get('/home', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Schedule: Qualifying Teams, Match Streaming', content: 'Watch every match of the knockout round with a complete streaming schedule as teams qualify to advance out of the group stage and into the round of 8.', img: 'https://prosoccerwire.usatoday.com/wp-content/uploads/sites/107/2022/06/AP-2026-FIFA-World-Cup.jpg?w=1024&h=576&crop=1' })  
  })
  app.get('/1', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 1', content: 'USA VS ARGENTINA', img: 'https://th.bing.com/th/id/OIP.XrRJFkRqSF-mfUVQM0yOigHaEK?pid=ImgDet&rs=1' })  
  })
  app.get('/2', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 2', content: 'ENGLAND VS FRANCE', img: 'https://c.ndtvimg.com/2021-09/m8mdb3tg_ngolo-kante-instagram_625x300_30_September_21.jpg?output-quality=80&downsize=1278:*' })  
  })
  app.get('/3', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 3', content: 'BRAZIL VS PORTUGAL', img: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg1MjI3ODI1MTQwMjEzMDE3/imago1003803028h.jpg' })  
  })
  app.get('/4', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 4', content: 'CROCIA VS MEXICO', img: 'https://cdn.vox-cdn.com/thumbor/8bOduhPHY0tww-HbG2a6BO0BTG8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22049891/1229658491.jpg' })  
  })
  app.get('/5', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 5', content: 'MOROCO VS GERMENY', img: 'https://static01.nyt.com/images/2018/06/06/sports/06morocco-web3/merlin_137061057_a717e5be-9ee2-4724-aee5-4c8ca3a547ac-articleLarge.jpg?quality=75&auto=webp&disable=upscale' })  
  })
  app.get('/6', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 6', content: 'SPAIN VS ETHIOPIA', img: 'https://img.chelseafc.com//image/upload/f_auto,q_auto:best,f_auto,q_90,w_1440,c_fill,g_faces/chat-hub/fan-chat-app/Azpi-GettyImages-1338534383.jpg' })  
  })
  app.get('/7', (req, res) => {
    res.render('index1', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 7', content: 'GEHANA VS CANADA', img: 'https://media.gettyimages.com/id/71186382/photo/michael-essien-of-ghana-in-action-during-the-fifa-world-cup-germany-2006-group-e-match-between.jpg?s=612x612&w=gi&k=20&c=U9DHJCVJG51S2ODPRske9k8Js4IpK7Kzowjt52518is=' })  
  })
  app.get('/8', (req, res) => {
    res.render('index', { title: 'WC', message: 'World Cup 2022 Round of 8 Group 8', content: 'JAPAN VS CHINA' })  
  })

