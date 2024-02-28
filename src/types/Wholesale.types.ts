export interface IWholesale {
    email: string;
  }
  
  export interface IWholesaleState {
    status: "idle" | "success" | "loading" | "failed";
    error: unknown;
    data: IWholesale[];
  }
  