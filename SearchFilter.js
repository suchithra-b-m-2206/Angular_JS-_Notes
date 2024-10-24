Search filter in AngularJS

As we type in the search textbox, all the columns in the table must be searched and only the matching rows should be displayed. 

Script.js :

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Ben", gender: "Male", salary: 55000, city: "London" },
                { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
                { name: "Mark", gender: "Male", salary: 57000, city: "London" },
                { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
                { name: "Todd", gender: "Male", salary: 60000, city: "London" },
            ];

            $scope.employees = employees;
        });

HtmlPage1.html :

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="Scripts/angular.min.js"></script>
    <script src="Scripts/Script.js"></script>
    <link href="Styles.css" rel="stylesheet" />
</head>
<body ng-app="myModule">
    <div ng-controller="myController">
        Search : <input type="text" placeholder="Search employees"
                        ng-model="searchText" />
        <br /><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees | filter:searchText">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.gender }} </td>
                    <td> {{ employee.salary  }} </td>
                    <td> {{ employee.city  }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>

Styles.css :

body {
    font-family: Arial;
}

table {
    border-collapse: collapse;
}

td {
    border: 1px solid black;
    padding: 5px;
}

th {
    border: 1px solid black;
    padding: 5px;
    text-align: left;
}

At the moment, the search is being done across all columns. If you want to search only one specific column, then change ng-model directive value on the search textbox as shown below. With this change only city column is searched.

<input type="text" ng-model="searchText.city" placeholder="Search employees" />
