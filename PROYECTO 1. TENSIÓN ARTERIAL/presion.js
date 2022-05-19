// Función Interpretación de Presión Arterial

function checkPressure () {
  const pS = document.getElementById("pS").value
  const pD = document.getElementById("pD").value
  let result

  /* funcion para comparar valores */
  function compareValues(value,min,max) {
    return (value > min && value < max)
  }

  /* pD = 40 - 149 pS = 60 - 200 pS > pD*/
  const valid = compareValues(pD, 40,149) && compareValues(pS,60,200) && pS > pD

  if (valid) {
    /* Presion minima normal 90 pS 60 pD*/ /* Presion maxima normal 129 pS 79 pD */
    result = comparePressure(pS,60,129) && compareValues(pD,60,79)
  }
  result ? console.log('presion normal') : console.log('presion abnormal')
}