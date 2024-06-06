document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items:[
            { id: 1, name: 'nike air force 1 low', img:'shoes-product1.png', price: 1549000 },
            { id: 2, name: 'Nike Sb white black', img:'shoes-product2.png', price: 1549000 },
            { id: 3, name: 'nike af 1 CMFT black', img:'shoes-product3.png', price: 1549000 },
            { id: 4, name: 'Nike SB Force 58 Black White', img:'shoes-product4.png', price: 1549000 },
            { id: 5, name: 'Nike SB Shoes', img:'shoes-product5.png', price: 1549000 },
            { id: 6, name: 'Nike Sb Chron 2.0 Shoe', img:'shoes-product6.png', price: 1549000 },
        ]
    }));
   Alpine.store('shopCart', {
    items:[],
    total: 0,
    quantity: 0,
    add(newItem){

        const cartItem = this.items.find((item) => item.id === newItem.id);

        if(!cartItem){
            this.items.push({...newItem, quantity: 1, total: newItem.price});
            this.quantity++;
            this.total += newItem.price;
        }else{
            this.items = this.items.map((item) => {
                if(item.id !== newItem.id){
                    return item;
                }else{
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
                    this.total += item.price;
                    return item;
                }
            });
        }
    },
    remove(id) {
        const cartItem = this.items.find((item) => item.id === id);

        if(cartItem.quantity > 1){

            this.items = this.items.map((item) => {
                if(item.id !== id){
                    return item
                } else{
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                }
            });
        } else if(cartItem.quantity === 1){
            this.items = this.items.filter((item) => item.id !== id);
            this.quantity--;
            this.total -= cartItem.price;
        }
    }
   })
});

// price
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}