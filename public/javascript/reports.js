// async function getSomething(event) {
//     event.preventDefault();

//     const title = document.querySelector('#new-category').value.trim();
//     console.log(title);

//     const response = await fetch('/api/category', {
//         method: 'POST',
//         body: JSON.stringify({
//             name: title
//         }),
//         headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert(response.statusText);
//     }

// }

// document.querySelector('.view-transaction').addEventListener('submit', getSomething);
// document.querySelector('.generate-graph').addEventListener('submit', import google graph);

// import { GoogleCharts } from "google-charts";

const generateGraph = async () => {
  const res = await fetch("http://localhost:3001/api/expenses");
  const data = await res.json();
  const names = data.map((item) => item.name);
  const values = data.map((item) => item.value);

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: names,
      datasets: [
        {
          label: "My First Dataset",
          data: values,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });
};

window.generateGraph = generateGraph;
//Load the charts library with a callback
// GoogleCharts.load(drawChart);

// function drawChart() {
//   // Standard google charts functionality is available as GoogleCharts.api after load
//   const data = GoogleCharts.api.visualization.arrayToDataTable([
//     ["Chart thing", "Chart amount"],
//     ["Lorem ipsum", 60],
//     ["Dolor sit", 22],
//     ["Sit amet", 18],
//   ]);
//   const pie_1_chart = new GoogleCharts.api.visualization.PieChart(
//     document.getElementById("piechart_3d")
//   );
//   pie_1_chart.draw(data);
// }
