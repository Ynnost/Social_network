import React from "react";
import { store } from "./store/store";

const StoreContext = React.createContext(store);

export default StoreContext;
