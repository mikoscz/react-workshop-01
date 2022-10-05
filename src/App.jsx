import './App.css'
import { useState } from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Drinks", price: "$5", stocked: true, name: "Tyskie" }
];

function Groceries({ products }) {
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

function Search({ filterValue, setFilterValue, filterAvailable, setFilterAvailable}) {
	return (
		<div>
			<input 
				type="text" 
				placeholder="..." 
				value={filterValue}
				onChange={(event) => setFilterValue(event.target.value)}
			/>	
			
			<div>
				<label>
					<input 
						type="checkbox" 
						checked={filterAvailable}
						onChange={(event) => setFilterAvailable(event.target.checked)}
					/>
					Only show products in stock
				</label>
			</div>
		</div>
	)
}

function Header() {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
		</thead>
	)
}

function GroceriesTable({ products }) {
	const uniqCategoryNames = [...new Set(products.map(product => product.category))];
	const categories = uniqCategoryNames.map(category => {
		return {
			name: category,
			products: products.filter(product => product.category === category)
		}
	});

	return (
		<table>
			<Header />

			<tbody>
				{categories.map(category => 
					<Category key={category.name} category={category} />
				)}
			</tbody>
		</table>
	)
}

function Category({ category }) {
	return (
		<>
			<tr>
				<td colSpan="2">{category.name}</td>
			</tr>

			{category.products.map(product =>
				<ProductRow 
					key={product.name} 
					name={product.name} 
					price={product.price}
					isAvailable={product.stocked}
				/>
			)}
		</>
	)
}

function ProductRow({ name, price, isAvailable}) {
	return (
		<tr style={{ color: isAvailable ? null : 'red'}}>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	)
}

function App() {
	return (
		<>
			<Groceries products={PRODUCTS} />
		</>
	)
}

export default App
