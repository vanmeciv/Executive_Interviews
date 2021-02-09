//Executive Interviews
window.onload = function() {
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.elements.point.radius = 2;
  Chart.defaults.global.elements.point.hoverRadius = 12;
  Chart.defaults.global.elements.point.hoverBorderWidth = 6;
  Chart.defaults.global.elements.point.pointStyle = 'crossRot';
  // Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif;";
  // Chart.defaults.global.legend.position = 'bottom';
  // Chart.defaults.global.legend.backgroundColor = '#000';
//
// //Testing horizontalBar chart
//
//   var barOptions_stacked = {
//       tooltips: {
//           enabled: false
//       },
//       hover :{
//           animationDuration:0
//       },
//       scales: {
//           xAxes: [{
//               ticks: {
//                   beginAtZero:true,
//                   fontFamily: "'Helvetica Neue', sans-serif",
//                   fontSize:11
//               },
//               scaleLabel:{
//                   display:false
//               },
//               gridLines: {
//               },
//               stacked: true
//           }],
//           yAxes: [{
//               gridLines: {
//                   display:false,
//                   color: "#fff",
//                   zeroLineColor: "#fff",
//                   zeroLineWidth: 0
//               },
//               ticks: {
//                   fontFamily: "'Helvetica Neue', sans-serif",
//                   fontSize:11
//               },
//               stacked: true
//           }]
//       },
//       legend:{
//           display:true
//       },
//
//       animation: {
//           onComplete: function () {
//               var chartInstance = this.chart;
//               var ctx = chartInstance.ctx;
//               // ctx.textAlign = "start";
//               // ctx.font = "12px Helvetica Neue";
//               ctx.fillStyle = "#fff";
//
//               Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
//                   var meta = chartInstance.controller.getDatasetMeta(i);
//                   Chart.helpers.each(meta.data.forEach(function (bar, index) {
//                       data = dataset.data[index];
//                       if(i==0){
//                           ctx.fillText(data, 85, bar._model.y+4);
//                       } else {
//                           ctx.fillText(data, bar._model.x-25, bar._model.y+4);
//                       }
//                   }),this)
//               }),this);
//           }
//       },
//       pointLabelFontFamily : "Helvetica Neue",
//       scaleFontFamily : "Helvetica Neue",
//   };
//
//   var ctx = document.getElementById("Chart1");
//   var myChart = new Chart(ctx, {
//       type: 'horizontalBar',
//       data: {
//               labels: ["Statement 1", "Statement 2", "Statement 3", "Statement 4", "Statement 5"],
//
//               datasets: [{
//                   label: "Strongly Disagree",
//                   data: [2, 2, .25, 1, .25],
//                   backgroundColor: "rgba(12,28,85, 1)",
//                   // hoverBackgroundColor: "rgba(149,103,182,1)"
//               },{
//                   label: "Disagree",
//                   data: [.25, .25, .25, 1, .25],
//                   backgroundColor: "rgba(27,31,97, 1)",
//                   // hoverBackgroundColor: "rgba(156,121,174,1)"
//               },{
//                   label: "Neutral",
//                   data: [.25, .25, .25, .25, .25],
//                   backgroundColor: "rgba(50,78,135, 1)",
//                   // hoverBackgroundColor: "rgba(168,145,186,1)"
//               },{
//                   label: "Agree",
//                   data: [.25, .25, 1, .25, 1],
//                   backgroundColor: "rgba(80,134,200, 1)",
//                   // hoverBackgroundColor: "rgba(192,175,208,1)"
//               },{
//                   label: "Strongly Agree",
//                   data: [.25, .25, 1, .25, 1],
//                   backgroundColor: "rgba(115,171,239, 1)",
//                   // hoverBackgroundColor: "rgba(212,195,230,1)"
//               }
//             ]
//       },
//
//       options: barOptions_stacked,
//   });
//

// Risk Taking Chart
  var ctx = document.getElementById("myChartOne");
  var myChartOne = new Chart(ctx, {
      type: 'line',
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
              data: [0,0,0,1,2],
              // backgroundColor: ["green","yellow","black","red","blue"],
              // borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 1,
              fill: false
          },
          {
              label: 'I am afraid to take chances with "risky" ideas in this organization.',
              data: [2,1,0,0,0],
              backgroundColor: "rgba(29,241,13,180)",
              // borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 2,
              fill: false
          },
          {
              label: 'I can take chances here without fear of negative repercussions.',
              data: [0,0,0,1,2],
              // backgroundColor: ["green","yellow","black","red","blue"],
              // borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 3,
              fill: false
          },
          {
              label: 'I am discouraged from experimenting with new ways of solving company problems.',
              data: [3,0,0,0,0],
              // backgroundColor: ["green","yellow","black","red","blue"],
              // borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 4,
              fill: false
          },
          {
              label: 'It is fatal for me to make a mistake.',
              data: [3,0,0,0,0],
              // backgroundColor: ["green","yellow","black","red","blue"],
              // borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

              // Changes this dataset to become a line
              type: 'line',
              // this dataset is drawn on top
              order: 5,
              fill: false
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
        type: 'line',
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
                data: [2,1,0,0,0],
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
                data: [0,0,0,0,3],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'In my department, we are the last to hear about anything.',
                data: [3,0,0,0,0],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'I can go to top management with a problem and be heard.',
                data: [1,0,0,0,2],
                backgroundColor: ["green","yellow","black","red","blue"],
                borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                // Changes this dataset to become a line
                type: 'line',
                // this dataset is drawn on top
                order: 1
            },
            {
                label: 'I believe that senior management is "in touch" with the opinions and thinking of the people who work here.',
                data: [0,0,0,0,3],
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
          type: 'line',
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
                  data: [2,0,1,0,0],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              },
              {
                  label: 'I can use my personal initiative and judgment in carrying out my work.',
                  data: [0,0,0,1,2],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              },
              {
                  label: 'I seldom get a chance to do things without my boss "holding my hand".',
                  data: [3,0,0,0,0],
                  backgroundColor: ["green","yellow","black","red","blue"],
                  borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                  // Changes this dataset to become a line
                  type: 'line',
                  // this dataset is drawn on top
                  order: 1
              },
              {
                  label: 'I am very closely supervised in my work.',
                  data: [1,0,1,0,1],
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
            type: 'line',
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
                    data: [3,0,0,0,0],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                },
                {
                    label: 'At my company, the departments "rise and fall" as one; there is little territorialism here.',
                    data: [0,0,0,0,3],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                },
                {
                    label: 'By and large, the different departments work cooperatively to an unusual degree here.',
                    data: [0,0,0,0,3],
                    backgroundColor: ["green","yellow","black","red","blue"],
                    borderColor: ["#007A36","#FFFFFF","#ffcb00","#0033A0","#ED2939"],

                    // Changes this dataset to become a line
                    type: 'line',
                    // this dataset is drawn on top
                    order: 1
                },
                {
                    label: 'I believe that conflicts between departments get in the way of getting things done.',
                    data: [3,0,0,0,0],
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
