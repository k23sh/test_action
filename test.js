const fs = require('fs')
function test(){
  const ev = JSON.parse(
    fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
  )
  const prNum = ev.pull_request.number;
  const branche = ev.head.ref;
  
  console.log('prNum', prNum);
  console.log('branche', branche);
}
test();