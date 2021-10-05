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
		console.log(this.items[0]);
	},

	addItem() {
		this.setElements();
		this.elements.addBtn.addEventListener("click", () => {
			this.createItem("div", "span", "input");
		});
	},

	deleteItem() {
		console.log("click");
	},

	deleteItemHandler() {
		if (this.items.length >= 0) {
			this.items[0].div.addEventListener("click", this.deleteItem);
		}
	},

	init() {
		this.addItem();
		this.deleteItemHandler();
	},
};

todoList.init();
