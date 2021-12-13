
/* var options = {
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
  })(8); */

$('.popup').hide()
function popupClick(slice) {
  /* let checked = $('input:checked')
  let arrItem = $(checked).attr('id')
  console.log(arrItem) */
  
  if(slice == 'operations') {
    $('.popup').show()
    $('.popup_head').text('operations')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'technology') {
    $('.popup').show()
    $('.popup_head').text('technology')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'marketing') {
    $('.popup').show()
    $('.popup_head').text('marketing')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'purchasing') {
    $('.popup').show()
    $('.popup_head').text('purchasing')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'resourcelibrary') {
    $('.popup').show()
    $('.popup_head').text('resource library')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'sales') {
    $('.popup').show()
    $('.popup_head').text('sales')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'peopleplanning') {
    $('.popup').show()
    $('.popup_head').text('people and planning')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'finance') {
    $('.popup').show()
    $('.popup_head').text('finance')
    $('.popup_subtext').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim suscipit voluptates adipisci voluptatem labore, dolorem facere eius quae porro.')
  }
  else if(slice == 'unsel') {
    $('.popup').hide()
    $('.popup_head').text('')
    $('.popup_subtext').text('')
  }

  
}
  