import {App} from "./App"
import { AppRouter } from "./AppRouter"

export const AppHookContainer = () => {
    return(
        //<ProviderExample>
            <App>
                <AppRouter />
            </App>
       //</ProviderExample>
    )
}