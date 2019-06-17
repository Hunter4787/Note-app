
const fs = require('fs')
let entry = process.argv.splice(2, process.argv.length)
let obj = []


if ((entry.length === 1) && (entry[0].endsWith(".json"))) {
  obj = JSON.parse(fs.readFileSync("fichier.json"))
  console.log(`printing ${obj.length} note(s)\n`)
  for (let i of obj) console.log(`Title: ${i.title}\nBody: ${i.body}\n`)
}

else if ((entry[0] === 'add') && (entry.length == 1)) {
  console.log(`${process.argv} add \n 
      options: \n 
      --help show help \t \t \t \t [boolean] \n 
      --title, -t title of note \t \t [required] \n
      --body, -b body of note \t \t \t [required] \n
      \n Missing required arguments: title, body`)
}
else if ((entry[0] === 'read') && (entry.length == 1)) {
  console.log(`${process.argv} add \n 
  options: \n 
  --help show help \t \t \t [boolean] \n 
  --title, -t title of note \t \t [required] \n
  \n Missing required arguments: title`)
}
else if ((entry[0] === 'remove') && (entry.length == 1)) 
{
  console.log(`${process.argv} add \n 
       options: \n 
       --help show help \t \t \t [boolean] \n 
       --title, -t title of note \t \t [required] \n
       \n Missing required arguments: title`)
}

else if ((entry[0] === 'add') && (entry.length === 5) && (entry[1] === "--title") && (entry[3] === "--body"))
{
  console.log(`Note created\n--\nTitle: ${entry[2]}\nBody: ${entry[4]}`)
  obj = JSON.parse(fs.readFileSync("fichier.json"))
  obj.push({ title: entry[2], body: entry[4] })
  fs.writeFileSync("fichier.json", JSON.stringify(obj))
}

else if ((entry.length === 3) && (entry[0] === 'read') && (entry[1] === "--title"))
{
  obj = JSON.parse(fs.readFileSync("fichier.json"))
  let f=false
  for (let i of obj) {
    if (i.title === entry[2])
    {
      f = true
      console.log(`Note found\n--\nTitle: ${i.title}\nBody: ${i.body}`)
      break
    }
  }
  if (!f) console.log('Not found')
}

else if ((entry.length === 3) && (entry[0] === 'remove') && (entry[1] === "--title"))
{
  obj = JSON.parse(fs.readFileSync("fichier.json"))
  let filtred = obj.filter((el,i)=>{if (el.title !== entry[2]) return el})
  fs.writeFileSync("fichier.json", JSON.stringify(filtred))
  console.log('note was removed')
}
else if(entry.includes("--help")){
  console.log(`\nadd --title title of note --body body of note\nremove --title title of note\nread --title title of note\n`)
}








