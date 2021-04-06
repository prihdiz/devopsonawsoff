const port = 8080

app.get('/', (req, res) => {
  res.send('Hello 23BPM - A melhor turma')
})

app.listen(port, () => {
