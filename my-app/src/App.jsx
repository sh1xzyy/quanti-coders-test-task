import { HelpTypesSection } from "./components/HelpTypesSection/HelpTypesSection";
import { PaymentMethod } from "./components/PaymentMethod/PaymentMethod";
import { RegistrationFormSection } from "./components/RegistrationFormSection/RegistrationFormSection";

function App() {
  return (
    <div>
      <RegistrationFormSection />
      <PaymentMethod />
      <HelpTypesSection />
    </div>
  );
}

export default App;
