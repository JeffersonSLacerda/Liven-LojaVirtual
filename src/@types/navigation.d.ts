import { IProduct } from "../screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Detail: {
        productId: number; 
      };
      Cart: {
        productId: number;
        amount?: number;
      };
    }
  }
}