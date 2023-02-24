let popOver = false;
let proyectControl = false;
let closeIconControl = true;
let element;
let messageControl = false;

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("phone").innerHTML = data.results[0].phone;
    document.getElementById("gender").innerHTML = data.results[0].gender;
    document.getElementById("city").innerHTML = data.results[0].location.city;
    document.getElementById("flip-card_city").innerHTML =
      data.results[0].location.city;
    document.getElementById("email").innerHTML = data.results[0].email;
    document.getElementById("flip-card_name", "name").innerHTML =
      data.results[0].name.first;
    document.getElementById("name").innerHTML = data.results[0].name.first;
    document.getElementById("last").innerHTML = data.results[0].name.last;
    imageUrl = data.results[0].picture.large;
    element = document.getElementById("photo");
    element.style.backgroundImage = `url(${imageUrl})`;
    const popUp = () => {
      let element = document.getElementById("pop-up");
      if (popOver == false) {
        popOver = true;
        element.style.display = "block";
      }
    };
    document.getElementById("personal-data").onclick = popUp;
    const dataCloser = () => {
      if (popOver == true) {
        element = document.getElementById("pop-up");
        popOver = false;
        element.style.display = "none";
      }
    };
    document
      .getElementById("icon-data_close")
      .addEventListener("click", dataCloser);

    const messageDisplay = () => {
      let element = document.getElementById("leave-message_header");
      if (messageControl == false) {
        messageControl == true;
        element.style.display = "block";
      } else {
        messageControl = false;
        element.style.display = "none";
      }
    };
    document.getElementById("message-header_button").addEventListener('click', messageDisplay);

    const proyectDisplay = () => {
      let element = document.getElementById("proyects");
      if (proyectControl == false) {
        proyectControl = true;
        element.style.display = "block";
      }
    };
    const closer = () => {
      if (proyectControl == true) {
        let element = document.getElementById("proyects");
        proyectControl = false;
        element.style.display = "none";
      }
    };
    document.getElementById("icon-close").addEventListener("click", closer);

    document.getElementById("contact-button").onclick = formControl;
    document.getElementById("header-proyect_button").onclick = proyectDisplay;
    const satisfaction = () => {
      element = document.getElementById("satisfaction-button");
      element.style.width = element.offsetWidth + "px";
      element.innerHTML = "Gracias por su consideración";
      element.style.backgroundColor = "#2CD506";
      element.style.textShadow = "black 0.1em 0.1em 0.2em";
      element.style.transition = "width 5s ease-in-out";
      setTimeout(() => {
        element.style.width = "auto";
      }, 10);
    };

    document
      .getElementById("satisfaction-button")
      .addEventListener("click", satisfaction);
  })
  .catch((error) => console.log(error));

formOpen = false;
const formControl = () => {
  let form = document.getElementById("myModal");
  if (formOpen == false) {
    formOpen = true;
    form.style.display = "block";
  } else {
    formOpen = false;
    form.style.display = "none";
  }
};
