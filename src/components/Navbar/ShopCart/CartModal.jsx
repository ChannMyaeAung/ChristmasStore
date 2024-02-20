import CartItems from "./CartItems";

export default function CartModal({ setIsOpen }) {
  return (
    <div className="p-4 space-y-12 bg-neutral-200">
      <div className="flex items-center justify-between text-lg ">
        <h2 className="font-semibold">Your cart</h2>
        <button
          className="transition-all hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          &#10006;
        </button>
      </div>

      <div>
        <CartItems />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-1 border-t border-b border-red-500">
          <span>Subtotal</span>
          <span>$0.00</span>
        </div>
        <button className="w-full px-4 py-2 text-sm text-center text-white bg-red-500 rounded-lg shadow-md whitespace-nowrap">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
