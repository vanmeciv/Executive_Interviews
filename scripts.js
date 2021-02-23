//Executive Interviews
window.onload = function() {
  Chart.defaults.global.elements.rectangle.borderWidth = 2;
  Chart.defaults.global.elements.point.radius = 0;
  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.global.elements.point.hoverRadius = 0;
  // Chart.defaults.global.elements.point.hoverBorderWidth = 3;
  Chart.defaults.global.defaultFontSize = 14;
  // Chart.defaults.global.elements.point.pointStyle = 'crossRot';
  // Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif;";
  // Chart.defaults.global.legend.position = 'bottom';
  // Chart.defaults.global.legend.backgroundColor = '#000';

var labels = ["Strongly Disgree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
var data = [0,0,0,1,5]



// Likert Total Results Chart
new Chart(document.getElementById("myChartFive"), {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "I am encouraged to speak my mind about the way I think things should be done in the firm.",
          fill: true,
          backgroundColor: "rgb(0, 128, 0, .5)", //green
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(0, 128, 0, .5)", //green
          data: [0,0,0,1,5]
        },
        {
          label: 'I am afraid to take chances with "risky" ideas in this organization.',
          fill: true,
          backgroundColor: "rgb(0, 0, 255, .5)", //blue
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(0, 0, 255, .5)", //blue
          data: [3,2,1,0,0]
        },
        {
          label: "I can take chances here without fear of negative repercussions.",
          fill: true,
          backgroundColor: "rgb(255, 0, 0, .5)", //red
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 0, 0, .5)", //red
          data: [0,0,0,2,4]
        },
        {
          label: "I am discouraged from experimenting with new ways of solving company problems.",
          fill: true,
          backgroundColor: "rgb(255, 255, 0, .5)", //red
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 255, 0, .5)", //red
          data: [4,2,0,0,0]
        },
        {
          label: "It is fatal for me to make a mistake.",
          fill: true,
          backgroundColor: "rgb(128, 0, 128, .5", //purple
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(128, 0, 128, .5", //purple
          data: [4,2,0,0,0]
        }
      ]
    },
    options: {
      elements: {
        line: {
          tension: .05
        }
      },
      tooltips: {
        enabled: false,
      },
      scale:{
        ticks:{
          stepSize: 1,
          min: -1,
          max: 5,
          fontSize: 22,
        }
      },
      hover: {
        mode: null,
      },
      title: {
        display: true,
        text: 'Risk Taking'
      },
    }
});


// Likert Total Results Chart
new Chart(document.getElementById("myChartSix"), {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "I get very little information about what other people are doing",
          fill: true,
          backgroundColor: "rgb(0, 128, 0, .5)", //green
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(0, 128, 0, .5)", //green
          data: [2,4,0,0,0]
        },
        {
          label: 'It is difficult for me to approach senior management with a concern.',
          fill: true,
          backgroundColor: "rgb(0, 0, 255, .5)", //blue
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(0, 0, 255, .5)", //blue
          pointBorderColor: "#fff",
          data: [3,3,0,0,0]
        },
        {
          label: "I am up-to-date on what is going on in the organization.",
          fill: true,
          backgroundColor: "rgb(255, 0, 0, .5)", //red
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [0,0,0,2,4]
        },
        {
          label: "In my department, we are the last to hear about anything.",
          fill: true,
          backgroundColor: ["rgb(255, 255, 0, .5)"], //yellow
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(255, 255, 0, .5)"], //yellow
          data: [5,1,0,0,0]
        },
        {
          label: "I can go to top management with a problem and be heard.",
          fill: true,
          backgroundColor: ["rgb(128, 0, 128, .5"], //purple
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(128, 0, 128, .5"], //purple
          data: [1,0,0,1,4]
        },
        {
          label: 'I believe that senior management is "in touch" with the opinions and thinking of the people who work here.',
          fill: true,
          backgroundColor: ["rgb(211, 84, 0, .5"], //orange
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(211, 84, 0, .5"], //orange
          data: [0,0,0,3,3]
        }
      ]
    },
    options: {
      elements: {
        line: {
          tension: .05
        }
      },
      tooltips: {
        enabled: false,
      },
      scale:{
        ticks:{
          stepSize: 1,
          min: -1,
          max: 5,
          fontSize: 22,
        }
      },
      hover: {
        mode: null,
      },
      title: {
        display: true,
        text: 'Risk Taking'
      },
    }
});

// Likert Total Results Chart
new Chart(document.getElementById("myChartSeven"), {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "I am managed by my boss too tightly.",
          fill: true,
          backgroundColor: ["rgb(0, 128, 0, .5)"], //green
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(0, 128, 0, .5)"], //green
          data: [3,2,1,0,0]
        },
        {
          label: 'I can use my personal initiative and judgment in carrying out my work.',
          fill: true,
          backgroundColor: ["rgb(0, 0, 255, .5)"], //blue
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(0, 0, 255, .5)"], //blue
          pointBorderColor: "#fff",
          data: [0,0,0,2,4]
        },
        {
          label: 'I seldom get a chance to do things without my boss "holding my hand".',
          fill: true,
          backgroundColor: ["rgb(255, 0, 0, .5)"], //red
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(255, 0, 0, .5)"], //red
          data: [4,2,0,0,0]
        },
        {
          label: "I am very closely supervised in my work.",
          fill: true,
          backgroundColor: ["rgb(255, 255, 0, .5)"], //yellow
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(255, 255, 0, .5)"], //yellow
          data: [2,1,1,1,1]
        },
      ]
    },
    options: {
      elements: {
        line: {
          tension: .05
        }
      },
      tooltips: {
        enabled: false,
      },
      scale:{
        ticks:{
          stepSize: 1,
          min: -1,
          max: 5,
          fontSize: 22,
        }
      },
      hover: {
        mode: null,
      },
      title: {
        display: true,
        text: 'Risk Taking'
      },
    }
});

// Likert Total Results Chart
new Chart(document.getElementById("myChartEight"), {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Turf struggles among departments are common here.",
          fill: true,
          backgroundColor: ["rgb(0, 128, 0, .5)"], //green
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(0, 128, 0, .5)"], //green
          data: [3,2,0,1,0]
        },
        {
          label: 'At my company, the departments "rise and fall" as one; there is little territorialism here.',
          fill: true,
          backgroundColor: ["rgb(0, 0, 255, .5)"], //blue
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(0, 0, 255, .5)"], //blue
          pointBorderColor: "#fff",
          data: [0,1,1,1,3]
        },
        {
          label: "By and large, the different departments work cooperatively to an unusual degree here.",
          fill: true,
          backgroundColor: ["rgb(255, 0, 0, .5)"], //red
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(255, 0, 0, .5)"], //red
          data: [0,0,0,1,3]
        },
        {
          label: "I believe that conflicts between departments get in the way of getting things done.",
          fill: true,
          backgroundColor: ["rgb(255, 255, 0, .5)"], //yellow
          borderColor: "#000",
          pointBorderColor: "#fff",
          pointBackgroundColor: ["rgb(255, 255, 0, .5)"], //yellow
          data: [3,1,0,2,0]
        },
      ]
    },
    options: {
      elements: {
        line: {
          tension: .05
        }
      },
      tooltips: {
        enabled: false,
      },
      scale:{
        ticks:{
          stepSize: 1,
          min: -1,
          max: 5,
          fontSize: 22,
        }
      },
      hover: {
        mode: null,
      },
      title: {
        display: true,
        text: 'Risk Taking'
      },
    }
});
};
