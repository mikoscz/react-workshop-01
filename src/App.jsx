import './App.css'
import { Groceries } from "./components/Groceries.jsx";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Drinks", price: "$5", stocked: true, name: "Tyskie" }
];

function App() {
	return (
		<>
			<Groceries products={PRODUCTS} />
		</>
	)
}

export default App
