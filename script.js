//your code here
let url = `https://randomuser.me/api/`;
const data = document.querySelector(`#data`);
const show = document.querySelector(`#show`);
const display = document.querySelector(`#display`);

const imag = document.querySelector(`#imag`);
const getBtn = document.querySelector(`#getUser`);
const ageBtn = document.querySelector(`#age`);
const emailBtn = document.querySelector(`#email`);
const phnBtn = document.querySelector(`#phone`);

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    // console.log(res);
    imag.src = res.results[0].picture.large;
    let name = `${res.results[0].name.title}: ${res.results[0].name.first} ${res.results[0].name.last}`;
    show.textContent = name;

    let age = res.results[0].dob.age;
    let email = res.results[0].email;
    let phone = res.results[0].cell;

    data.dataset.age = age;
    data.dataset.email = email;
    data.dataset.phone = phone;

    ageBtn.addEventListener(`click`, () => {
      display.innerHTML = ``;
      display.innerHTML = age;
    });
    emailBtn.addEventListener(`click`, () => {
      display.innerHTML = ``;
      display.innerHTML = email;
    });
    phnBtn.addEventListener(`click`, () => {
      display.innerHTML = ``;
      display.innerHTML = phone;
    });
  });

async function getData(params) {
  display.innerHTML = ``;

  let res = await fetchData(url);
  // console.log(res);

  imag.src = res.results[0].picture.large;
  let name = `${res.results[0].name.title}: ${res.results[0].name.first} ${res.results[0].name.last}`;
  show.textContent = name;

  let age = res.results[0].dob.age;
  let email = res.results[0].email;
  let phone = res.results[0].cell;

  data.dataset.age = age;
  data.dataset.email = email;
  data.dataset.phone = phone;

  // console.log((data.dataset.age = age));
  // console.log(data.dataset);

  // console.log(`getData `, age);
  ageBtn.addEventListener(`click`, () => {
    display.innerHTML = ``;
    display.innerHTML = age;
  });
  emailBtn.addEventListener(`click`, () => {
    display.innerHTML = ``;
    display.innerHTML = email;
  });
  phnBtn.addEventListener(`click`, () => {
    display.innerHTML = ``;
    display.innerHTML = phone;
  });
}

async function fetchData(url) {
  let res = await fetch(url);
  let data = await res.json();

  return data;
}
getBtn.addEventListener(`click`, getData);
