async function generateGraph() {
  const sessionUserId = document.querySelector("#user_id").value;
  let dataValue = []
  let dataName = []

  fetch("/api/expenses").then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
          let expenseUserId = data[i].user_id 
          if (expenseUserId == sessionUserId) {
            dataName.push(data[i].name)
            dataValue.push(data[i].value)
          }
        }

        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: dataName,
            datasets: [
              {
                label: "My First Dataset",
                data: dataValue,
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

      })
    }
  })

}

document
  .querySelector(".generate-graph")
  .addEventListener("click", generateGraph);
