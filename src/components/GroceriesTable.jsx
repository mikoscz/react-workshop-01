import { Category } from "./Category.jsx";
import { Header } from "./Header.jsx";

export function GroceriesTable({ products }) {
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
