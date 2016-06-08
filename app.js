
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

app.directive('workExperience', function(){
  return {
    restrict: 'E',
    templateUrl: 'template/work-experience-template.html',
    link: function(scope, element,attr) {
      scope.work = {};
      scope.work.experience = [
        {
          title: 'Front End Developer',
          company: 'Eleven Wireless',
          location: 'Portland, OR',
          date: 'June 2016 - Present',
          responsibilities: ['Write maintainable and well thought out code.', 'Follow Agile development tactics with daily scrum meetings.', 'Perform front-end fundamentals (CSS/HTML), including responsive design and cross browser compatibility.', 'Develope with the knowledge of JavaScript proficiency including jQuery and front-end frameworks such as AngularJS.']
        },
        {
          title: 'Teacher Assistant',
          company: 'Code Fellows',
          location: 'Portland, OR',
          date: 'April 2016 - May 2016',
          responsibilities: ['Provide technical assistance to students and help them throughout coding courses with HTML, CSS and JavaScript (mainly jQuery and vanilla JavaScript).', 'Graded coding assignments, which involves a lot of debugging and close attention to detail.']
        },
        {
          title: 'Area Director',
          company: 'Skyhawks Youth Sports Camps',
          location: 'OR & WA regional areas',
          date: 'June 2015 - September 2015',
          responsibilities: ['Promoted to director after working as a coach for six weeks.', 'Graded coding assignments, which involves a lot of debugging and close attention to detail.', 'Directed operations for 50+ youth sports camps, which included over 750 children.']
        },
        {
          title: 'Professional Overseas Basketball Player',
          company: 'Sampaense Basket Club',
          location: 'Portugal',
          date: 'September 2014 - May 2015',
          responsibilities: ['Starting power forward for Portuguese D-1 basketball team', 'Named to First Team All-League Rookie Team for 2014-2015 season.']
        }
      ];
    }
  };
});
