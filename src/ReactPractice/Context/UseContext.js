import React from "react";

const UserContext = React.createContext();

const PropsProvider = UserContext.Provider;
const PropsReciever = UserContext.Consumer;

export { PropsProvider, PropsReciever };
