import { HelpTypeCard } from "./components/HelpTypeCard/HelpTypeCard";
import { HelpTypesSection } from "./components/HelpTypesSection/HelpTypesSection";
import { PaymentMethod } from "./components/PaymentMethod/PaymentMethod";

function App() {
  return (
    <div>
      <HelpTypeCard />
      <PaymentMethod />
      <HelpTypesSection />
    </div>
  );
}

export default App;
