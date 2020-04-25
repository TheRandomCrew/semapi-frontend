import React, { createContext } from 'react';

const globalStateContext = createContext();
const globalActionsContext = createContext();

function useGlobalState() {
    const context = React.useContext(globalStateContext);

    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider')
    };
    return context
};

function useGlobalActions() {
    const context = React.useContext(globalActionsContext);

    if (context === undefined) {
        throw new Error('useGlobalActions must be used within a GlobalActionsProvider')
    };
    return context
};

const GlobalStateProvider = globalStateContext.Provider;
const GlobalActionsProvider = globalActionsContext.Provider;

const useGlobalStore = ()=> [useGlobalState(), useGlobalActions()]

export { 
    globalStateContext,
    globalActionsContext,
    GlobalStateProvider,
    GlobalActionsProvider,
    useGlobalState, 
    useGlobalActions,
    useGlobalStore
}