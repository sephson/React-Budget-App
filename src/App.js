import React from "react";
import Balance from "./components/Balance";
import InExp from "./components/InExp";
import AddTrans from "./components/AddTrans";
import IncomeList from "./components/IncomeList";
import Expense from "./components/Expense";
import "./App.css";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <main>
      <h1 className="oga">Expense Tracker</h1>
      <div className="App">
        <GlobalState>
          <div className="left_side">
            <Balance />
            <InExp />
          </div>
          <div className="mid_side">
            <AddTrans />
            <div className="trans-list">
              <IncomeList />
              <Expense />
            </div>
          </div>
        </GlobalState>
      </div>
    </main>
  );
}

export default App;
