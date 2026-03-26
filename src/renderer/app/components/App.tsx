import { Workspace } from "@/renderer/features/workspace/Workspace"
import { store } from "@/renderer/store/store"
import { Provider } from "react-redux"

export const App = () => {
    return (
        <Provider store={store}>
            <Workspace />
        </Provider>
    )
}