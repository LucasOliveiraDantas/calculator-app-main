function Change_Theme() {
  const BThemes = document.getElementById('switch-theme').classList
  const Mcolor = document.getElementById('main-color').classList

  if (BThemes.contains('th-1')) {
    BThemes.replace('th-1', 'th-2')
    if (BThemes.contains('th-2')) {
      Mcolor.replace('theme-1', 'theme-2')
    }
  } else if (BThemes.contains('th-2')) {
    BThemes.replace('th-2', 'th-3')
    if (BThemes.contains('th-3')) {
      Mcolor.replace('theme-2', 'theme-3')
    }
  } else if (BThemes.contains('th-3')) {
    BThemes.replace('th-3', 'th-1')
    if (BThemes.contains('th-1')) {
      Mcolor.replace('theme-3', 'theme-1')
    }
  }
}
