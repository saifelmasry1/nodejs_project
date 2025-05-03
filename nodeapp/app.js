const express = require('express')
const app = express()

const port = process.env.PORT || 3000  // استخدام متغير بيئي للبورت أو 3000 كافتراضي

app.get('/', (req, res) => {
  res.send('Hello, this is my new project')  // الرسالة الجديدة
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
