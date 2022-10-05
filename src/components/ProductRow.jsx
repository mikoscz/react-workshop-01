export function ProductRow({ name, price, isAvailable}) {
	return (
		<tr style={{ color: isAvailable ? null : 'red'}}>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	)
}
