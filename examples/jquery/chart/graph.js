var doughnutData = [
{
value: 30,
color:"#aaf2fb"
},
{
value: 50,
color: "#ffb6b9"
},
{
value: 120,
color: "#ffe361"
},
{
value: 170,
color: "#fbaa6e"
},
{
value: 70,
color: "#A8BECB"
}
];
 
var myDoughnut = new Chart(document.getElementById("sample").
getContext("2d")).Doughnut(doughnutData);
