 //       var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       
var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July","August",],
                datasets: [{
                    label: "First dataset",
		data: [100,20,50,125,70,20,150,160],
                    fill: false,
		borderDash: [10,5],
                },
{
                    label: 'Second dataset',
		data: [30,40,60,150,180,240,380,390],
                    fill: false,
                },
{
                    label: "Third dataset",
			data: [10,20,30,125,30,20,10,20],
                    fill: false,
                    borderDash: [5, 5],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Chart.js Line Chart *** Aug/02/2016'
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                    }
                },
                hover: {
                    mode: 'dataset'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            suggestedMin: -10,
                            suggestedMax: 250,
                        }
                    }]
                }
            }
        };

        jQuery.each(config.data.datasets, function(i, dataset) {
            dataset.borderColor = 0x828282;
            dataset.backgroundColor = 0x7f707f;
            dataset.pointBorderColor = 0x606060;
            dataset.pointBackgroundColor = 0x505050;
            dataset.pointBorderWidth = 1;
        });

        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        };

