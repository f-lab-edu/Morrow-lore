import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getCarts } from '../api/cart/cartAPI';

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
    localStorage.setItem('myCart', JSON.stringify(newCartItems));
    updateCartState(newCartItems);
  };

  const removeProductFromCart = async (productId: number) => {
    let newCartItems = [...cartItems];
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === productId,
    );

    if (existingProductIndex >= 0) {
      const existingProduct = newCartItems[existingProductIndex];
      if (existingProduct.quantity > 1) {
        const updatedProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };
        newCartItems[existingProductIndex] = updatedProduct;
      } else {
        newCartItems = newCartItems.filter((item) => item.id !== productId);
      }
    }

    setCartItems(newCartItems);
    localStorage.setItem('myCart', JSON.stringify(newCartItems));
    updateCartState(newCartItems);
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
