var miRuleta = new Winwheel({
    numSegments: 15,
    outerRadius: 170,
    segments: [
      { fillStyle: "#ffeb3b", text: "JavaScript" },
      { fillStyle: "#304ffe", text: "Pyhton" },
      { fillStyle: "#3949ab", text: "PHP" },
      { fillStyle: "#00bcd4", text: "Go" },
      { fillStyle: "#e91e63", text: "Ruby" },
      { fillStyle: "#ffeb3b", text: "JavaScript" },
      { fillStyle: "#304ffe", text: "Pyhton" },
      { fillStyle: "#3949ab", text: "PHP" },
      { fillStyle: "#00bcd4", text: "Go" },
      { fillStyle: "#e91e63", text: "Ruby" },
      { fillStyle: "#ffeb3b", text: "JavaScript" },
      { fillStyle: "#304ffe", text: "Pyhton" },
      { fillStyle: "#3949ab", text: "PHP" },
      { fillStyle: "#00bcd4", text: "Go" },
      { fillStyle: "#e91e63", text: "Ruby" }
    ],
    animation: {
      type: "spinToStop",
      duration: 5,
      callbackFinished: "mensaje()",
      callbackAfter: "dibujarIndicador()"
    }
  });
  
  dibujarIndicador();
  
  function mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    alert("Elemento seleccionado: " + SegmentoSeleccionado.text);
  
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
  }
  
  function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = "navy";
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(170, 10);
    ctx.lineTo(230, 10);
    ctx.lineTo(200, 70);
    ctx.lineTo(170, 10);
    ctx.stroke();
    ctx.fill();
  }
  