import { Workspace } from "@/features/workspace/Workspace"
import { store } from "@/store/store"
import { Provider } from "react-redux"

export const App = () => {
    return (
        <Provider store={store}>
            <Workspace />
        </Provider>
    )
}