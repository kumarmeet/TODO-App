const todoList = {
  items: [],

  elements: {
    input: null,
    addBtn: null,
    section: null,
    time: null,
  },

  createElement: {
    div: null,
    span: null,
    iTag: null,
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
    this.elements.time = document.querySelector("h4");
  },

  setTimeAndDate() {
    const t_d = new Date().toDateString();
    this.elements.time.textContent = t_d;
  },

  createItem(div, span, i) {
    this.createElement.div = document.createElement(div);
    this.createElement.span = document.createElement(span);
    this.createElement.iTag = document.createElement(i);

    this.createElement.span.textContent = this.getInputValue();

    this.createElement.iTag.classList.add("far", "fa-trash-alt");

    //empty input won't adding any items
    if (this.createElement.value) {
      this.createElement.div.append(
        this.createElement.span,
        this.createElement.iTag
      );

      this.elements.section.append(this.createElement.div);
      //saving value of adding by user
      this.items.push(this.createElement.value);

      console.log(this.items);

      this.elements.input.value = "";
    }
    this.deleteItem();
  },

  addItem() {
    this.setElements();

    this.elements.addBtn.addEventListener("click", () => {
      this.createItem("div", "span", "i", "h4");
    });
  },

  deleteItem() {
    if (this.items.length) {
      //using event delegation approach

      document.querySelector("section").addEventListener("click", (e) => {
        setTimeout(() => {
          if (e.target.classList.contains("far")) {
            e.target.closest("div").remove();
          }
        }, 150);
      });
    }
  },

  init() {
    this.addItem();
    this.setTimeAndDate();
  },
};

todoList.init();
