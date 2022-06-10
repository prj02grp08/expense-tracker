// const generateGraph = async () => {
async function generateGraph() {
  const res = await fetch("http://localhost:3001/api/expenses");
  const data = await res.json();
  const names = data.map((item) => item.name);
  const values = data.map((item) => item.value);
  console.log(names);
  console.log(values);

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
            "rgb(255, 111, 333)",
            "rgb(255, 111, 3)",
            "rgba(39, 245, 71)",
            "rgba(255, 0, 0)",
            "rgba(0, 100, 0)",
            "rgba(128, 0, 128)",
            "rgba(39, 226, 245)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });
}

document
  .querySelector(".generate-graph")
  .addEventListener("click", generateGraph);

// window.generateGraph = generateGraph;
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
