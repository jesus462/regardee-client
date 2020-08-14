const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cloudinary: {
				userName: "duu99bl6f",
				brands: [
					"Regardee/Brands/powder-monkey",
					"Regardee/Brands/rigall",
					"Regardee/Brands/melao",
					"Regardee/Brands/arohas",
					"Regardee/Brands/guayabita",
					"Regardee/Brands/ikai"
				]
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			}
		}
	};
};

export default getState;
