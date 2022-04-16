function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'd') {
      var del = document.getElementById('output-result').value
      document.getElementById('output-result').value = del.slice(0, -1)
    } else if (
      valor === '+' ||
      valor === '-' ||
      valor === '*' ||
      valor === '/'
    ) {
      document.getElementById('output-result').value += valor
    } else if (valor === 'c') {
      document.getElementById('output-result').value = ''
    } else if (valor === 'r') {
      var result = eval(document.getElementById('output-result').value)
      document.getElementById('output-result').value = result
    }
  } else if (tipo === 'valor') {
    document.getElementById('output-result').value += valor
  }
}
