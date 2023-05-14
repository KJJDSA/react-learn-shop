import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import items from './items.json'
import DataGrid from "./dataGrid";
import CustomHeader from "./customHeader"
import Detail from "./detail";
import {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";

function App() {
    let [data, setData] = useState(items);
    return (
        <div className="App">
            <CustomHeader></CustomHeader>
            <Routes>
                <Route path={'/'} element={<DataGrid items={data} setData={setData}></DataGrid>}></Route>
                <Route path={"/detail/:id"} element={
                    <Detail ></Detail>
                }></Route>
                <Route path={"/cart"} element={<div>장바구니임</div>}></Route>
            </Routes>
        </div>
  );
}


export default App;

