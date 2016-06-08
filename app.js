
function MyChart(canvas, myData, type, myLabels, myColors,myMainLabel) {
  this.canvas = canvas;
  this.type = type;
  this.label = myMainLabel || '';
  this.mainData = {
    labels: myLabels,
    datasets: [
      {
        label: this.label,
        data: myData,
        backgroundColor: myColors
      }]
  };
}

MyChart.prototype.createChart = function(){
  new Chart(this.canvas,{
    type: this.type,
    data: this.mainData
  });
};

var app = angular.module('myPortfolio', []);

app.directive('mainNav', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/main-nav-template.html'
  };
});

app.directive('mainBanner', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/main-banner-template.html'
  };
});

app.directive('aboutMe', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/about-me-template.html'
  };
});

app.directive('technicalSkills', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/technical-skills-template.html',
    link: function(scope,element,attr) {
      var arrayOfCanvasCharts = element.find('canvas');
      var generalChart = new MyChart(arrayOfCanvasCharts[0], [70,10, 20], 'doughnut', [
        'JavaScript',
        'CSS3',
        'HTML5'
      ], [
        'rgba(131, 41, 49, 1)',
        'rgba(158, 151, 226, 1)',
        'rgba(251, 187, 15, 1)'
      ]);

      var meanStackChart = new MyChart(arrayOfCanvasCharts[1], [10,20,50,30], 'doughnut', [
        'MongoDB',
        'Express',
        'AngularJS',
        'Node.js'
      ], [
        'purple',
        'rgba(251, 100, 4, 1)',
        'rgba(207, 43, 56, 1)',
        'rgba(147, 195, 68, 1)'
      ]);

      var javaScriptChart = new MyChart(arrayOfCanvasCharts[2], [10,10,70,20,50,70,20,100, 100, 0], 'horizontalBar', [
        'Angular2',
        'TypeScript',
        'jQuery',
        'Socket.io',
        'Handlebars',
        'Git',
        'Happi',
        'Problem Solving',
        'Hard Work',
        'Laziness'
      ], [
        'purple',
        'rgba(251, 100, 4, 1)',
        'rgba(207, 43, 56, 1)',
        'rgba(147, 195, 68, 1)',
        'red',
        'yellow',
        'blue',
        'black',
        'pink'
      ], 'Additional Skills');

      generalChart.createChart();
      meanStackChart.createChart();
      javaScriptChart.createChart();
    }
  };
});

app.directive('myProjects', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/my-projects-template.html',
    link: function(scope,element,attr) {
      scope.my = {};
      scope.my.projects = [
        {
          name: 'Angling For Angular',
          dateBuilt: 'May 2016',
          liveSiteUrl: 'http://angling-for-angular.surge.sh/#/',
          gitHubUrl: 'https://github.com/max33nau/angling-for-angular',
          gitHub: 'https://github.com/max33nau/angling-for-angular',
          imageSrc:'img/projects-img/angling-for-angular-project.png',
          description: 'Tutorial for the basics of AngularJS.'
        },
        {
          name: 'Color Fish',
          dateBuilt: 'May 2016',
          liveSiteUrl: 'https://team-malex.2016.angularattack.io/#/color-fish',
          gitHubUrl: 'https://github.com/max33nau/',
          gitHub:'Private Organization, Go to my github page',
          imageSrc:'img/projects-img/color-fish-project.jpg',
          description: 'Color Palette generator built in Angular 2 and TypeScript.'
        },
        {
          name: 'Relax And Color',
          dateBuilt: 'March 2016',
          liveSiteUrl: 'https://relax-and-color.herokuapp.com/#/home',
          gitHubUrl: 'https://github.com/relaxAndColor',
          gitHub: 'https://github.com/relaxAndColor',
          imageSrc:'img/projects-img/relax-and-color-project.jpg',
          description: 'Brings coloring book to the screen allowing you to color your own custom images.'
        },
        {
          name: 'Settlers Of Candyland',
          dateBuilt: 'December 2016',
          liveSiteUrl: 'http://max33nau.github.io/settlersOfCandyland/',
          gitHubUrl: 'https://github.com/max33nau/settlersOfCandyland',
          gitHub: 'https://github.com/max33nau/settlersOfCandyland',
          imageSrc:'img/projects-img/settlers-of-candyland-project.jpg',
          description: 'Spin off of Settlers of Catan but takes you into the world of Candyland.'
        }
      ];
    },
    controller: ['$scope', function($scope){
      $scope.showProject = 'Angling For Angular';
      $scope.changeProject = function(name) {
        $scope.showProject = name;
      };
    }]
  };
});
