import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './component/screen/home';
import NewOrders from './component/screen/newOrders';
import AcceptedOrders from './component/screen/acceptedOrders';
import RejectedOrders from './component/screen/rejectedOrders';
import AddItems from './component/screen/addItems';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add_Items" element={<AddItems />} />
        <Route path="/New_Orders" element={ <NewOrders />} />
        <Route path="/Accepted_Orders" element={ <AcceptedOrders />} />
        <Route path="/Rejected_Orders" element={ <RejectedOrders />} />
      </Routes>
     
    </>
  );
}

export default App;
