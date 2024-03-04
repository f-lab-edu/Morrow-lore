import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getCarts } from '../cart/getCarts';
import { deleteCarts } from '../cart/deleteCarts';
import { putCarts } from '../cart/putCarts';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
  sales: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartNum: number;
  totalAmount: number;
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (productId: number) => void;
  calculateTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartNum, setCartNum] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carts = await getCarts();
        updateCartState(carts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const updateCartState = (items: CartItem[]) => {
    setCartItems(items);
    setCartNum(items.reduce((acc, item) => acc + item.quantity, 0));
    setTotalAmount(
      items.reduce(
        (acc, item) =>
          acc + item.price * item.quantity * (1 - item.sales / 100),
        0,
      ),
    );
  };

  const addProductToCart = async (product: CartItem) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );
    let newCartItems = [...cartItems];

    if (existingProductIndex >= 0) {
      const existingProduct = newCartItems[existingProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      newCartItems[existingProductIndex] = updatedProduct;
    } else {
      newCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(newCartItems);
    calculateTotalAmount(newCartItems);

    try {
      const updatedProduct = {
        ...product,
        quantity: newCartItems[existingProductIndex]?.quantity || 1,
      };
      const response = await putCarts(updatedProduct);
      console.log(response.message);
    } catch (error) {
      console.error('장바구니 업데이트 실패', error);
    }
  };

  const removeProductFromCart = async (productId: number) => {
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (!existingProduct || existingProduct.quantity <= 1) {
      await deleteCarts(productId);
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId,
      );
      setCartItems(updatedCartItems);
      calculateTotalAmount(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
      await putCarts({
        ...existingProduct,
        quantity: existingProduct.quantity - 1,
      });
      setCartItems(updatedCartItems);
      calculateTotalAmount(updatedCartItems);
    }
  };

  const calculateTotalAmount = (items: CartItem[]) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity * (1 - item.sales / 100),
      0,
    );
    setTotalAmount(total);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartNum,
        totalAmount,
        addProductToCart,
        removeProductFromCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('CartProvider 안에서만 useCart를 사용할 수 있습니다.');
  }
  return context;
};

export { CartProvider };
