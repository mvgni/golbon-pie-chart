
var options = {
    series: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
    chart: {
    width: 800,
    type: 'donut',
    plotOptions: {
      pie: {
        size: 200
      }
    }
    
  },
  colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
  fill: {
    type: 'image',
    opacity: 0.85,
    image: {
       src: ['../assets/img/1.png', '../assets/img/2.jpg', '../assets/img/3.jpg', '../assets/img/4.png', '../assets/img/5.jpg'],
      width: 25,
      imagedHeight: 25
    },
  },
  stroke: {
    width: 4
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: ['#111']
    },
    background: {
      enabled: true,
      foreColor: '#fff',
      borderWidth: 0
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  
  
  
  ((wedges) => {
    let share = 360 / wedges;
    let i = 0;
    for (i; i < wedges; i++) {
      let pie = document.querySelector(".pie");
      let wedge = document.createElement("button");
      let inner = document.createElement("span");
      inner.className = "text";
      let text = document.createTextNode(i + 1);
      wedge.style.setProperty(
        "transform",
        `rotate(${i * share}deg) skewY(${share - 90}deg)`
      );
      inner.style.setProperty(
        "transform",
        `skewY(${-(share - 90)}deg) rotate(${share / 2}deg)`
      );
      inner.appendChild(text);
      wedge.appendChild(inner);
      pie.appendChild(wedge);
    }
  })(8);


$('.menuopt').click(() => {
  console.log('click')
})
  