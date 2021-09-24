const a = 2;

function createWrapper(isTrue, element, city) {
  const div = document.createElement("div");
  div.classList.add(`blog-list__city-wrapper--${city}`);
  div.appendChild(element);
  console.log(div);
}

function appendCity(cityElement, isNewCity, city) {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(cityElement);

  if (isNewCity) {
    createWrapper(isNewCity, fragment, city);
  } else {
    document.querySelector(`blog-list__city-wrapper--${city}`);
  }
}

function createCityElement(city, isLast, cityName) {
  const fragment = document.createDocumentFragment();
  const divWrapper = document.createElement("div");
  const divCityWrapper = document.createElement("div");
  const cityHeading = document.createElement("h5");

  if (isLast) {
    const cityName = city.dataset.city;
    cityHeading.innerText = cityName;
    divWrapper.appendChild(cityHeading);
    fragment.appendChild(divWrapper);
  }
  divCityWrapper.appendChild(city);
  fragment.appendChild(divCityWrapper);

  appendCity(fragment, isLast, cityName);
}

function createCityGrid(DOMblock) {}

for (let index = 0; index < sortedCityArr.length; index++) {
  if (
    sortedCityArr[index].dataset.city === sortedCityArr[index + 1].dataset.city
  ) {
    createCityElement(
      sortedCityArr[index],
      false,
      sortedCityArr[index].dataset.city
    );
  }
  if (
    sortedCityArr[index].dataset.city !== sortedCityArr[index + 1].dataset.city
  ) {
    createCityElement(
      sortedCityArr[index],
      true,
      sortedCityArr[index].dataset.city
    );
  }
}
