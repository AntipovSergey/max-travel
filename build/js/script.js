// Селект
const defaulSelect = () => {
  const elements = document.querySelectorAll('.form__select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      shouldSort: false,
    });
  });
}

defaulSelect();
