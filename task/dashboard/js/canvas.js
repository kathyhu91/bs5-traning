(() => {
    const chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',
      brown: 'rgb(101, 67, 33)',
      pink: 'rgb(207, 47, 116)',
      magenta: 'rgb(103, 65, 114)',
    };
    var randomScalingFactor = function () {
      return Math.round(Math.random() * 2000000);
    };

    const pieCtx = document.getElementById('pie-chart').getContext('2d');
    const barCtx = document.getElementById('bar-chart').getContext('2d');

    const config = {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
          ],
          backgroundColor: [
            chartColors.red,
            chartColors.orange,
            chartColors.yellow,
            chartColors.green,
            chartColors.blue,
            chartColors.purple,
          ],
          label: 'Bakery Item'
        }],
        labels: [
            'Baguette',
            'Sourdough',
           ' Focaccia',
            'Ciabatta',
            'Pretzel',
            'Brioche',
        ]
      },
      options: {
        responsive: true
      }
    };
    const barConfig = {
      type: 'bar',
      data: {
        datasets: [{
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
          ],
          backgroundColor: [
            chartColors.red,
            chartColors.orange,
            chartColors.yellow,
            chartColors.green,
            chartColors.blue,
            chartColors.purple,
            chartColors.brown,
            chartColors.pink,
            chartColors.magenta,
          ],
          label: 'Sourdough Sale'
        }],
        labels: [
          'Jun',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ]
      },
      options: {
        responsive: true
      }
    };
    const pieChart = new Chart(pieCtx, config);
    const barChart = new Chart(barCtx, barConfig);
  })();