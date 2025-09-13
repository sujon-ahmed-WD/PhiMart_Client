
const Cart = ({cartItems,onClear,onRemove}) => {
    return (
        <div>
            <ul>{cartItems.map((item,index) => (
                <li onClick={()=>onRemove(item)} key={index}>{item}</li>))}</ul>
          <button onClick={onClear}  className="px-3 py-2 bg-blue-500 text-white rounded-xl">Clear Cart</button>
        </div>
    );
};

export default Cart;