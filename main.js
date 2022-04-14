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

function ChangeT() {
  const Bthemes = document.getElementById('th-switch').classList
  const Mcolor = document.getElementById('main-color').classList

  if (Bthemes.contains('th-1')) {
    Bthemes.replace('th-1', 'th-2')
    if (Bthemes.contains('th-2')) {
      Mcolor.replace('th-s-1', 'th-s-2')
    }
  } else if (Bthemes.contains('th-2')) {
    Bthemes.replace('th-2', 'th-3')
    if (Bthemes.contains('th-3')) {
      Mcolor.replace('th-s-2', 'th-s-3')
    }
  } else if (Bthemes.contains('th-3')) {
    Bthemes.replace('th-3', 'th-1')
    if (Bthemes.contains('th-1')) {
      Mcolor.replace('th-s-3', 'th-s-1')
    }
  }
}
