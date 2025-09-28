function calculation() {
  let a = document.getElementById("bmiCalc");
  let b = document.getElementById("status");
  let c = document.getElementById("advice");

  height = document.getElementById("height").value;
  weight = document.getElementById("weight").value;
  fetch(`http://127.0.0.1:8000/search?height=${height}&weight=${weight}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.bmi);

      if (data.bmi < 18.5) {
        a.innerHTML = `your bmi is ${data.bmi} `;
        b.innerHTML = `status: ${data.status}`;
        c.innerHTML = `you need to gain weight ${data.needToGain} kg`;
      } else if (data.bmi >= 18.5 && data.bmi <= 24.9) {
        a.innerHTML = `your bmi is ${data.bmi} and you are healthy`;
        b.innerHTML = `status: ${data.status}`;
        c.innerHTML = "You are doing great, keep it up!";
      } else if (data.bmi > 24.9) {
        a.innerHTML = `your bmi is ${data.bmi} `;
        b.innerHTML = `status: ${data.status}`;
        c.innerHTML = `you need to lose ${data.needToLose} kg to be healthy`;
      }
    })
    .catch((error) => console.log("Error:", error));
}

fetch("http://127.0.0.1:8000/records")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
  });

function loadRecords() {
  fetch("http://127.0.0.1:8000/records")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let rows = "";
      data.forEach((r) => {
        rows += `<tr>
          <td>${r.id}</td>
          <td>${r.height}</td>
          <td>${r.weight}</td>
          <td>${r.bmi}</td>
          <td>${r.status}</td>
          
        </tr>`;
      });
      document.getElementById("records").innerHTML = rows;
    });
}
