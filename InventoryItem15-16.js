function InventoryItem ({name, type, quantity = 0, price = 0})
{
	const lowStockThreshold = 5; 
	const highValueThreshold = 1000; 
	const totalValue = price * quantity; 

	return (
		<div>
			<h2>{name} ({type})</h2>
			{quantity < lowStockThreshold && <Message><span>Low Stock, Only {quantity} left. </span></Message>}
			{totalValue > highValueThreshold && <Message><span>High Value - consider extra protection. </span></Message>}
		</div>
	);
}
