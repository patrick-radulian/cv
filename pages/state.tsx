import React, { createContext, ReactChild, useContext } from 'react';

type AppState = {
    theme: string,
    setTheme: (theme: string) => void
}

const AppContext = React.createContext<AppState>({
    theme: "light",
    setTheme: () => {}
});

interface IAppProps {
    children: any
}

export function AppWrapper(props: IAppProps) {
    let sharedState: AppState = {
        theme: "light",
        setTheme: () => {}
    }

    return (
        <AppContext.Provider value={sharedState}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}