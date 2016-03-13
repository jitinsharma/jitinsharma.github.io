/**
 * Created by jitin on 10-07-2015.
 */

app.controller('MainController', ['$scope',
function($scope){
    $scope.pageTitle = 'Jitin Sharma';
    $scope.footerText = 'Made with angular & materialize. View at';
    $scope.menu =
        {
            'home': 'Home',
            'about': 'About Me',
            'resume': 'Resume',
            'blog': 'Blog'
        };
    $scope.homeCardData= 'Change is good';
    $scope.homeButtons = [
        {
            'value': 'About',
            'source':'#/about'
        },
        {
            'value': 'Resume',
            'source':'#/resume'
        }
    ];
    $scope.aboutPage = {
        'header':'About Me',
        'intro':'Hi, I am Jitin Sharma',
        'contact':'Contact',
        'socialText':'Get Social',
        'gitText':'or Get Geeky'
    };
    $scope.aboutDetails= [
        {
            'header': 'Location: Bangalore',
            'details':'Sweet combination of weather and traffic made in heaven',
            'imagePath':'images/dark-canvas.png'
        },
        {
            'header': 'Hobbies',
            'details':'I like video games :| and TV, cricket, programming, sleeping & other stuff',
            'imagePath':'images/dark-canvas.png'
        }
    ];
    $scope.resumePage = {
        'header':'Professional Life in a nutshell',
        'future':'To infinity and beyond',
        'download':'Download Resume'
    };
    $scope.resumeDetails = [
        {
            'year': '2014 - present',
            'icon': 'work',
            'location': 'Bengaluru',
            'detail': 'Software Engineer at Amadeus Software Labs'
        },
        {
            'year': '2010 - 2014',
            'icon': 'school',
            'location': 'New Delhi',
            'detail': 'BTech(ECE) Delhi Technological University'
        },
        {
            'year': '2008 - 2010',
            'icon': 'school',
            'location': 'New Delhi',
            'detail': '10th- 12th, Modern Public School'
        }
    ];
}]);
