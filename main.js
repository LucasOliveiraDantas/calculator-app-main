function valor(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      document.getElementById('output-result').value = ''
    }
    if (
      valor === '+' ||
      valor === '-' ||
      valor === '*' ||
      valor === '/' ||
      valor === '.'
    ) {
      document.getElementById('output-result').value += valor
    }
    if (valor === '=') {
      var valor_campo = eval(document.getElementById('output-result').value)
      document.getElementById('output-result').value = valor_campo
    }
    if (valor === 'd') {
      var result = document.getElementById('output-result').value
      var del = result.slice(0, -1)
      document.getElementById('output-result').value = del
    }
  } else if (tipo === 'value') {
    document.getElementById('output-result').value += valor
  }
}
