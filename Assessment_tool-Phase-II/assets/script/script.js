// sidebar start
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display= "none";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display= "block";
  }
// sidebar end

// chart start
// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
//       }
//     }
//   }
// };
// const data = {
//   labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
//   datasets: [
//     {
//       label: 'Dataset',
//       data: Utils.numbers({count: 6, min: -100, max: 100}),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//       pointStyle: 'circle',
//       pointRadius: 10,
//       pointHoverRadius: 15
//     }
//   ]
// };
// const actions = [
//   {
//     name: 'pointStyle: circle (default)',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'circle';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: cross',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'cross';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: crossRot',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'crossRot';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: dash',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'dash';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: line',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'line';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: rect',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'rect';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: rectRounded',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'rectRounded';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: rectRot',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'rectRot';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: star',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'star';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: triangle',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = 'triangle';
//       });
//       chart.update();
//     }
//   },
//   {
//     name: 'pointStyle: false',
//     handler: (chart) => {
//       chart.data.datasets.forEach(dataset => {
//         dataset.pointStyle = false;
//       });
//       chart.update();
//     }
//   }
// ];



