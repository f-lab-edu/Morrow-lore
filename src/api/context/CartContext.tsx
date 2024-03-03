import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import axios from 'axios';
import { getCarts } from '../cart/getCarts';

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
    try {
      await axios.put('/api/cart', { product });
      const newCartItems = [...cartItems, product];
      setCartItems(newCartItems);
      setCartNum(newCartItems.reduce((acc, item) => acc + item.quantity, 0));
      calculateTotalAmount(newCartItems);
    } catch (error) {
      console.error('장바구니 추가 실패', error);
    }
  };

  const removeProductFromCart = async (productId: number) => {
    try {
      await axios.delete('/api/cart', { data: { productId } });
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId,
      );
      setCartItems(updatedCartItems);
      setCartNum(
        updatedCartItems.reduce((acc, item) => acc + item.quantity, 0),
      );
      calculateTotalAmount(updatedCartItems);
    } catch (error) {
      console.error('장바구니 제거 실패', error);
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
