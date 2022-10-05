export function Search({ filterValue, setFilterValue, filterAvailable, setFilterAvailable}) {
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
