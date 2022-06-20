import {
  Routes,
  Route,
} from "react-router-dom";
import CarEdit from "./components/carManagement/CarEdit";
import CarManagement from "./components/carManagement/CarManagement";
import CarRent from "./components/carRent/CarRent";
import Customer from "./components/customer/Customer";
import CustomerManagement from "./components/customerManagement/CustomerManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CarRent />} />
      <Route path="/carManagement" element={<CarManagement />} />
      <Route path="/carManagement/:id" element={<CarEdit />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/customerManagement" element={<CustomerManagement />} />
    </Routes>
  );
}

export default App;
