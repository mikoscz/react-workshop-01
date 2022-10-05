import { ProductRow } from "./ProductRow.jsx";

export function Category({ category }) {
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
