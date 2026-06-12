/**
 * Create a summary of shopping cart items.
 * @param {{name: string, price: number, quantity: number}[]} items
 * @returns {{itemCount: number, totalQuantity: number, totalPrice: number}}
 */
function createCartSummary(items) {
  if (items === undefined) {
    throw new Error('Cart cannot be undefined');

  }

  if (!Array.isArray(items)) {
    throw new Error('Cart must be an array');

  }
  for(let i = 0; i < items.length; i++) {
    if (
      items[i].name === undefined ||
      items[i].price === undefined ||
      items[i].quantity === undefined
    ) {
      throw new Error('Each item must have a name, price, and quantity');

    }
    if (
      typeof items[i].price !== 'number' ||
      typeof items[i].quantity !== 'number'
    ) {
      throw new Error('Price and quantity must be numbers');
    }
    if (items[i].price < 0 || items[i].quantity < 0) {
      throw new Error('Price and quantity cannot be negative');
    } 
    }
    return {
      itemCount: items.length,
      totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }

module.exports = createCartSummary;
