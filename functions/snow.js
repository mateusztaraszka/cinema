export function snow() {
  let amount = 10;
  let page = document.getElementById('page');
  for (let i = 0; i < amount; i++) {
    let snowflake = document.createElement('img')
    let container = document.createElement('i')
    snowflake.src = "https://www.svgrepo.com/show/222584/snowflake-snow.svg";

    let size = Math.random() * 100;
    let positionX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -15;

    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';

    container.style.left = positionX + 'px';
    container.classList.add('snowflake')
    container.appendChild(snowflake)
    container.style.animationDelay = delay + 's';

    container.style.pointerEvents = 'none';

    page.appendChild(container);
  }
}