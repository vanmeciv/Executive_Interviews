// Chart 1
window.onload = function() {
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.elements.point.radius = 2;
  Chart.defaults.global.elements.point.hoverRadius = 12;
  Chart.defaults.global.elements.point.hoverBorderWidth = 6;
  Chart.defaults.global.elements.point.pointStyle = 'crossRot';
  // Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif;";
  Chart.defaults.global.legend.position = 'bottom';
  Chart.defaults.global.legend.backgroundColor = '#000';


  var ctx = document.getElementById("mixedChart");
  var mixedChart = new Chart(ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Reported COVID-19 Deaths',
              data: [11831,8697,70,7402,4403],
              hidden: true,
              backgroundColor: ["#D32011","#007229","#cc092f","#d90012","#FFD200"],
              borderColor: ["2AD2B","#FDEF42","#FFFFFF","#FFFFFF","#002395"],

              // this dataset is drawn below
              order: 2
          }, {
              label: '2017 Non-Hygeinic Population',
              data: [3290,731,41,360,233],
              backgroundColor: ["#D32011","#007229","#cc092f","#d90012","#00B9E4"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          }],
          labels: ["Afghanistan","Algeria","Angola","Armenia"]},
      options: {
              responsive: true,
      				title: {
      					display: true,
                padding: -2,
                fontColor: '#000',
                fontSize: 18,
                text: ["Select 'Reported COVID-19 Deaths' in legend for additional layer.","Click or hover over points and bars for tooltip"]
      				},
              legend: {
                display: true,
                labels: {
                    fontColor: '#FF5733',
                    fontStyle: 'bold'
                }
              },
      				scales: {
      					yAxes: [{
      						ticks: {
      							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
      							suggestedMin: 1,

      							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
      							suggestedMax: 25000,
                    stepSize: 5000,
                    showLines: true,
                    padding: 10,
                    fontColor: '#fff',
                    fontSize: 14,
                    fontStyle: 'bold',
                    beginAtZero:true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
      						}
      					}],
                xAxes: [{
                  ticks: {
                    // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                    suggestedMin: 1,

                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                    suggestedMax: 25000,
                    stepSize: 1,
                    showLines: true,
                    padding: 5,
                    minRotation: 90,
                    maxRotation: 90,
                    fontColor: '#fff',
                    fontSize: 14,
                    fontStyle: 'bold',
                  }
                }]
      				}
      			}

  });

};
