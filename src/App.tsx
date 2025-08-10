import MainApp from "./components/MainApp";
import { StoreProvider } from "./store/Store";

function App() {
  return (
    <StoreProvider>
      <MainApp />
    </StoreProvider>
  )
}

export default App;