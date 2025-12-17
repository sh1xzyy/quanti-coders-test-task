import { HelpTypeCard } from "./components/HelpTypeCard/HelpTypeCard";
import { HelpTypesSection } from "./components/HelpTypesSection/HelpTypesSection";
import { PaymentMethod } from "./components/PaymentMethod/PaymentMethod";
import { RegistrationFormSection } from "./components/RegistrationFormSection/RegistrationFormSection";

function App() {
  return (
    <div>
      <HelpTypeCard />
      <PaymentMethod />
      <HelpTypesSection />
      <RegistrationFormSection />
    </div>
  );
}

export default App;
