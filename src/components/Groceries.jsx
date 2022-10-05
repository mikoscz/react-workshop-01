import { useState } from "react";
import { Search } from "./Search.jsx";
import { GroceriesTable } from "./GroceriesTable.jsx";

export function Groceries({ products }) {
	const [filterValue, setFilterValue] = useState('')
	const [filterAvailable, setFilterAvailable] = useState(false)

	const filteredProducts = products.filter(product => {
		return product.name.toLowerCase().includes(filterValue.toLowerCase());
	});

	const filtered = filteredProducts.filter(product => {
		if (filterAvailable) {
			return product.stocked;
		}

		return true
	});

	return (
		<>
			<Search
				filterValue={filterValue}
				setFilterValue={setFilterValue}
				filterAvailable={filterAvailable}
				setFilterAvailable={setFilterAvailable}
			/>
			<GroceriesTable products={filtered}/>
		</>
	)
}
