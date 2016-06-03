function getId(id) {
  return document.getElementById(id);
}

function MyChart(canvas, myData, type, myLabels, myColors,myHoverColors) {
  this.canvas = canvas;
  this.type = type;
  this.mainData = {
    labels: myLabels,
    datasets: [
        {
            data: myData,
            backgroundColor: myColors,
            hoverBackgroundColor: myHoverColors
        }]
      };
}

MyChart.prototype.createChart = function(){
  new Chart(this.canvas,{
    type: this.type,
    data: this.mainData
  });
}

var generalChart = new MyChart(getId('generalChart'), [70,10, 20], 'doughnut', [
    "JavaScript",
    "CSS3",
    "HTML5"
],  [
    "rgba(131, 41, 49, 1)",
    "rgba(158, 151, 226, 1)",
    "rgba(251, 187, 15, 1)"
]);

var meanStackChart = new MyChart(getId('meanStackChart'), [10,20,50,30], 'doughnut', [
    "MongoDB",
    "Express",
    "AngularJS",
    "Node.js"
],  [
    "purple",
    "rgba(251, 100, 4, 1)",
    "rgba(207, 43, 56, 1)",
    "rgba(147, 195, 68, 1)"
]);

var javaScriptChart = new MyChart(getId('additionalJavaScriptChart'), [10,10,70,20,50,70,20,100, 100, 0], 'horizontalBar', [
    "Angular2",
    "TypeScript",
    "jQuery",
    "Socket.io",
    "Handlebars",
    "Git",
    "Happi",
    "Problem Solving",
    "Hard Work",
    "Laziness"
],  [
    "purple",
    "rgba(251, 100, 4, 1)",
    "rgba(207, 43, 56, 1)",
    "rgba(147, 195, 68, 1)",
    "red",
    "yellow",
    "blue",
    "black",
    "pink"
])

generalChart.createChart();
meanStackChart.createChart();
javaScriptChart.createChart();
