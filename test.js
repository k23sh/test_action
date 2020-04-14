const fs = require('fs')
function test(){
  const ev = JSON.parse(
    fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
  )
  const prNum = ev.pull_request.number
  console.log('prNum', prNum);
  console.log('ev', JSON.stringify(ev));
}
test();