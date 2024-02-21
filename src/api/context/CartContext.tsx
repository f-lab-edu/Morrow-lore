import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getCart } from '../cart/getCart';

interface CartContextType {
  cartNum: number;
  setCartNum: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carts = await getCart();
        setCartNum(carts.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cartNum]);

  return (
    <CartContext.Provider value={{ cartNum, setCartNum }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
