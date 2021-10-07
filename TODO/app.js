const todoList = {
  items: [],

  elements: {
    input: null,
    addBtn: null,
    section: null,
  },

  createElement: {
    div: null,
    span: null,
    inputCheckbox: null,
    value: null,
  },

  getInputValue() {
    this.createElement.value = this.elements.input.value;
    return this.elements.input.value;
  },

  setElements() {
    this.elements.input = document.querySelector("#text");
    this.elements.addBtn = document.querySelector(".add-btn");
    this.elements.section = document.querySelector("section");
  },

  createItem(div, span, input) {
    this.createElement.div = document.createElement(div);
    this.createElement.span = document.createElement(span);
    this.createElement.inputCheckbox = document.createElement(input);
    this.createElement.inputCheckbox.setAttribute("type", "checkbox");

    this.createElement.span.textContent = this.getInputValue();

    //font awsome
    const fontA = document.createElement("i");
    fontA.classList.add("far");
    fontA.classList.add("fa-trash-alt");

    this.createElement.div.append(this.createElement.span, fontA);

    //using for checkbox
    // this.createElement.div.append(this.createElement.span, this.createElement.inputCheckbox);

    this.elements.section.append(this.createElement.div);
    this.elements.input.value = "";

    //saving value of adding by user
    this.items.push(this.createElement.value);
    console.log(this.items);

    this.deleteItem();
  },

  addItem() {
    this.setElements();
    this.elements.addBtn.addEventListener("click", () => {
      this.createItem("div", "span", "input");
    });
  },

  deleteItem() {
    if (this.items.length) {
      //using event delegation approach
      const section = document.querySelector("section");

      //using checkbox
      // section.addEventListener("click", (e) => {
      //   if (e.target.checked === true) {
      //     setTimeout(() => {
      //       e.target.closest("div").remove();
      //     }, 200);
      //   }
      // });

      //font awsome
      section.addEventListener("click", (e) => {
        setTimeout(() => {
          e.target.closest("div").remove();
        }, 200);
      });
    }
  },

  init() {
    this.addItem();
  },
};

todoList.init();
