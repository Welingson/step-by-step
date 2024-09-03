import { FinalizeOrderStepsContextProvider } from "./context/OrderStepsContext";
import { Router } from "./routes";

export function App() {
  return (
    <FinalizeOrderStepsContextProvider>
      <Router />
    </FinalizeOrderStepsContextProvider>
  );
}
