
window.onload = function() {
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.elements.point.radius = 2;
  Chart.defaults.global.elements.point.hoverRadius = 12;
  Chart.defaults.global.elements.point.hoverBorderWidth = 6;
  Chart.defaults.global.elements.point.pointStyle = 'crossRot';
  // Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif;";
  Chart.defaults.global.legend.position = 'bottom';
  Chart.defaults.global.legend.backgroundColor = '#000';

// Risk Taking Chart
  var ctx = document.getElementById("myChartOne");
  var myChartOne = new Chart(ctx, {
      type: 'bar',
      data: {
          datasets: [
          //   {
          //     label: 'I am encouraged to speak my mind about the way I think things should be done in the firm.',
          //     data: [0,0,0,1,1],
          //     hidden: false,
          //     backgroundColor: ["red","blue","green","purple","#FFD200"],
          //     borderColor: ["white","white","white","white","white"],
          //
          //     // this dataset is drawn below
          //     order: 2
          // },
          {
              label: 'I am encouraged to speak my mind about the way I think things should be done in the firm.',
              data: [0,0,0,1,1],
              backgroundColor: ["green","yellow","black","red","blue"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          },
          {
              label: 'I am afraid to take chances with "risky" ideas in this organization.',
              data: [1,1,0,0,0],
              backgroundColor: ["green","yellow","black","red","blue"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          },
          {
              label: 'I can take chances here without fear of negative repercussions.',
              data: [0,0,0,1,1],
              backgroundColor: ["green","yellow","black","red","blue"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          },
          {
              label: 'I am discouraged from experimenting with new ways of solving company problems.',
              data: [2,0,0,0,0],
              backgroundColor: ["green","yellow","black","red","blue"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          },
          {
              label: 'It is fatal for me to make a mistake.',
              data: [2,0,0,0,0],
              backgroundColor: ["green","yellow","black","red","blue"],
              borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1
          }],
          labels: ["Strongly Disagree","Disagree","Neither Nor","Agree","Strongly Agree"]},
      options: {
              responsive: true,
      				title: {
      					display: true,
                padding: -3,
                fontColor: '#000',
                fontSize: 18,
                text: ["Risk Taking"]
      				},
              legend: {
                display: true,
                labels: {
                    fontColor: '#000',
                    // fontStyle: 'bold'
                }
              },
      				scales: {
      					yAxes: [{
      						ticks: {
      							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
      							suggestedMin: 1,

      							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
      							suggestedMax: 5,
                    stepSize: 1,
                    showLines: true,
                    lineHeight: 4,
                    padding: 10,
                    fontColor: '#000',
                    fontSize: 12,
                    fontStyle: 'bold',
                    beginAtZero: true,
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
                    suggestedMax: 5,
                    stepSize: 1,
                    showLines: true,
                    padding: 2,
                    minRotation: 60,
                    maxRotation: 60,
                    fontColor: '#000',
                    fontSize: 12,
                    fontStyle: 'bold',
                  }
                }]
      				}
      			}

  });

  // Information Access Chart
    var ctx = document.getElementById("myChartTwo");
    var myChartTwo = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [
            //   {
            //     label: 'I am encouraged to speak my mind about the way I think things should be done in the firm.',
            //     data: [0,0,0,1,1],
            //     hidden: false,
            //     backgroundColor: ["red","blue","green","purple","#FFD200"],
            //     borderColor: ["white","white","white","white","white"],
            //
            //     // this dataset is drawn below
            //     order: 2
            // },
            {
                label: 'I get very little information about what other people are doing.',
                data: [1,1,0,0,0],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'It is difficult for me to approach senior management with a concern.',
                data: [2,0,0,0,0],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'I am up-to-date on what is going on in the organization.',
                data: [0,0,0,0,2],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'In my department, we are the last to hear about anything.',
                data: [2,0,0,0,0],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'I can go to top management with a problem and be heard.',
                data: [1,0,0,0,1],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'I believe that senior management is "in touch" with the opinions and thinking of the people who work here.',
                data: [0,0,0,0,2],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            }],
            labels: ["Strongly Disagree","Disagree","Neither Nor","Agree","Strongly Agree"]},
        options: {
                responsive: true,
        				title: {
        					display: true,
                  padding: -3,
                  fontColor: '#000',
                  fontSize: 18,
                  text: ["Information Access"]
        				},
                legend: {
                  display: true,
                  labels: {
                      fontColor: '#000',
                      // fontStyle: 'bold'
                  }
                },
        				scales: {
        					yAxes: [{
        						ticks: {
        							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
        							suggestedMin: 1,

        							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
        							suggestedMax: 5,
                      stepSize: 1,
                      showLines: true,
                      lineHeight: 4,
                      padding: 10,
                      fontColor: '#000',
                      fontSize: 12,
                      fontStyle: 'bold',
                      beginAtZero: true,
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
                      suggestedMax: 5,
                      stepSize: 1,
                      showLines: true,
                      padding: 2,
                      minRotation: 60,
                      maxRotation: 60,
                      fontColor: '#000',
                      fontSize: 12,
                      fontStyle: 'bold',
                    }
                  }]
        				}
        			}

    });
    // Autonomy Chart
      var ctx = document.getElementById("myChartThree");
      var myChartThree = new Chart(ctx, {
          type: 'bar',
          data: {
              datasets: [
              //   {
              //     label: 'I am encouraged to speak my mind about the way I think things should be done in the firm.',
              //     data: [0,0,0,1,1],
              //     hidden: false,
              //     backgroundColor: ["red","blue","green","purple","#FFD200"],
              //     borderColor: ["white","white","white","white","white"],
              //
              //     // this dataset is drawn below
              //     order: 2
              // },
              {
                  label: 'I am managed by my boss too tightly.',
                  data: [1,0,1,0,0],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              },
              {
                  label: 'I can use my personal initiative and judgment in carrying out my work.',
                  data: [0,0,0,1,1],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              },
              {
                  label: 'I seldom get a chance to do things without my boss "holding my hand".',
                  data: [2,0,0,0,0],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              },
              {
                  label: 'I am very closely supervised in my work.',
                  data: [1,0,1,0,0],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              }],
              labels: ["Strongly Disagree","Disagree","Neither Nor","Agree","Strongly Agree"]},
          options: {
                  responsive: true,
          				title: {
          					display: true,
                    padding: -3,
                    fontColor: '#000',
                    fontSize: 18,
                    text: ["Autonomy"]
          				},
                  legend: {
                    display: true,
                    labels: {
                        fontColor: '#000',
                        // fontStyle: 'bold'
                    }
                  },
          				scales: {
          					yAxes: [{
          						ticks: {
          							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
          							suggestedMin: 1,

          							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
          							suggestedMax: 5,
                        stepSize: 1,
                        showLines: true,
                        lineHeight: 4,
                        padding: 10,
                        fontColor: '#000',
                        fontSize: 12,
                        fontStyle: 'bold',
                        beginAtZero: true,
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
                        suggestedMax: 5,
                        stepSize: 1,
                        showLines: true,
                        padding: 2,
                        minRotation: 60,
                        maxRotation: 60,
                        fontColor: '#000',
                        fontSize: 12,
                        fontStyle: 'bold',
                      }
                    }]
          				}
          			}

      });

      // Company Landscape Chart
        var ctx = document.getElementById("myChartFour");
        var myChartFour = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [
                //   {
                //     label: 'I am encouraged to speak my mind about the way I think things should be done in the firm.',
                //     data: [0,0,0,1,1],
                //     hidden: false,
                //     backgroundColor: ["red","blue","green","purple","#FFD200"],
                //     borderColor: ["white","white","white","white","white"],
                //
                //     // this dataset is drawn below
                //     order: 2
                // },
                {
                    label: 'Turf struggles among departments are common here.',
                    data: [2,0,0,0,0],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                },
                {
                    label: 'At my company, the departments "rise and fall" as one; there is little territorialism here.',
                    data: [0,0,0,0,2],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                },
                {
                    label: 'By and large, the different departments work cooperatively to an unusual degree here.',
                    data: [0,0,0,0,2],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                },
                {
                    label: 'I believe that conflicts between departments get in the way of getting things done.',
                    data: [2,0,0,0,0],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                }],
                labels: ["Strongly Disagree","Disagree","Neither Nor","Agree","Strongly Agree"]},
            options: {
                    responsive: true,
            				title: {
            					display: true,
                      padding: -3,
                      fontColor: '#000',
                      fontSize: 18,
                      text: ["Company Landscape"]
            				},
                    legend: {
                      display: true,
                      labels: {
                          fontColor: '#000',
                          // fontStyle: 'bold'
                      }
                    },
            				scales: {
            					yAxes: [{
            						ticks: {
            							// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
            							suggestedMin: 1,

            							// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
            							suggestedMax: 5,
                          stepSize: 1,
                          showLines: true,
                          lineHeight: 4,
                          padding: 10,
                          fontColor: '#000',
                          fontSize: 12,
                          fontStyle: 'bold',
                          beginAtZero: true,
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
                          suggestedMax: 5,
                          stepSize: 1,
                          showLines: true,
                          padding: 2,
                          minRotation: 60,
                          maxRotation: 60,
                          fontColor: '#000',
                          fontSize: 12,
                          fontStyle: 'bold',
                        }
                      }]
            				}
            			}

        });

//
// // Likert Total Results Chart
// new Chart(document.getElementById("myChartFive"), {
//     type: 'radar',
//     data: {
//       labels: ["Strongly Disgree", "Disagree", "Neither Agree nor Disagree", "Agree", "Strongly Agree"],
//       datasets: [
//         {
//           label: "Risk Taking",
//           fill: true,
//           backgroundColor: "rgba(179,181,198,0.2)",
//           borderColor: "#000",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(179,181,198,1)",
//           data: [3,0,0,0,2]
//         },
//         {
//           label: "Information Access",
//           fill: true,
//           backgroundColor: "rgba(255,99,132,0.2)",
//           borderColor: "#000",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(255,99,132,1)",
//           pointBorderColor: "#fff",
//           data: [4,0,0,0,2]
//         },
//         {
//           label: "Autonomy",
//           fill: true,
//           backgroundColor: "rgba(179,181,198,0.2)",
//           borderColor: "#000",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(179,181,198,1)",
//           data: [3,0,0,0,2]
//         },
//         {
//           label: "Company Landscape",
//           fill: true,
//           backgroundColor: "rgba(179,181,198,0.2)",
//           borderColor: "#000",
//           pointBorderColor: "#fff",
//           pointBackgroundColor: "rgba(179,181,198,1)",
//           data: [2,0,0,0,2]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Likert'
//       }
//     }
// });

};
