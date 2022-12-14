import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    const res = await fetch("http://localhost:5000/transaction");
    const { data } = await res.json();
    console.log(data);
    setTransactions(data);
  };

  return (
    <div>
      <AppBar />
      <Container>
        <TransactionForm fetchTransaction={fetchTransaction} />
        <TransactionsList
          transactions={transactions}
          fetchTransaction={fetchTransaction}
        />
      </Container>
      <br />
    </div>
  );
}

export default App;
