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
    this.elements.addBtn = document.querySelector("button");
    this.elements.section = document.querySelector("section");
  },

  createItem(div, span, input) {
    this.createElement.div = document.createElement(div);
    this.createElement.span = document.createElement(span);
    this.createElement.inputCheckbox = document.createElement(input);
    this.createElement.inputCheckbox.setAttribute("type", "checkbox");

    this.createElement.span.textContent = this.getInputValue();

    this.createElement.div.append(
      this.createElement.span,
      this.createElement.inputCheckbox
    );

    this.elements.section.append(this.createElement.div);
    this.elements.input.value = "";

    this.items.push({ ...this.createElement });
    console.log(this.items);

    this.deleteItem();
  },

  addItem() {
    this.setElements();
    this.elements.addBtn.addEventListener("click", () => {
      this.createItem("div", "span", "input");
    });
  },
  
  //fix this function
  deleteItem() {
    if (this.items.length) {
      this.items[0].div.addEventListener(
        "click",
        this.deleteItemHandler.bind(this)
      );
    }
  },
  
  //fix this function
  deleteItemHandler() {
    const del = [];
    if (this.items.length) {
      for (const item of this.items) {
        if (item.inputCheckbox.checked === true) {
          del.push(item.div);
        }
      }

      console.log(del);

      for (const d of del) {
        d.remove();
      }

      del.splice(0);
    }
  },

  init() {
    this.addItem();
  },
};

todoList.init();
