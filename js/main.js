let btn = document.getElementById("oblicz");
btn.addEventListener("click", pensja);

function pensja(e) {
  let dane = document.querySelectorAll('div[id^="pracownik"]');
  let pracownicy = document.querySelectorAll(".pracownik");
  let godziny = document.querySelectorAll(".czas");
  let stawki = document.querySelectorAll(".stawka");
  let wyplaty = document.querySelectorAll(".wyplata");

  for (let i = 0; i < dane.length; i++) {
    let sum = godziny[i].value * stawki[i].value;
    if (godziny[i].value > 160) {
      sum += (godziny[i].value - 160) * (stawki[i].value * 2);
      pracownicy[i].setAttribute("style", "background-color:greenyellow;");
    }

    if (godziny[i].value < 100) {
      pracownicy[i].setAttribute("style", "background-color:red");
    }
    wyplaty[i].innerHTML = sum;
  }

  let arraySorted = [];

  for (i = 0; i < pracownicy.length; i++) {
    elementy = {
      name: pracownicy[i].innerText,
      time: parseFloat(godziny[i].value),
    };
    arraySorted.push(elementy);
    arraySorted.sort((a, b) => {
      return b.time - a.time;
    });
    arraySorted.length = 3;
  }

  let top3 = document.createElement("ul");

  for (let i = 0; i < arraySorted.length; i++) {
    let li = document.createElement("li");
    li.classList.add("lista");
    li.innerHTML = arraySorted[i].name + " = " + arraySorted[i].time + " h";
    top3.appendChild(li);
  }

  top3.firstChild.classList.add("top");
  top3.lastChild.classList.add("last");

  let best = document.getElementById("najlepsi-pracownicy");

  if (best.hasChildNodes() === true) {
    best.firstElementChild.remove();
  }

  best.appendChild(top3);
}
