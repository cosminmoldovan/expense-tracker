import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Expense from "./interfaces/Expense";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import { nanoid } from "nanoid";
import ExpenseForm1 from "./components/ExpenseForm1";
import { set } from "react-hook-form";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setEspense] = useState<Expense[]>([
    { id: '1', description: "aaa", amount: 3, category: "Utilites" },
    { id: '2', description: "bbb", amount: 4, category: "Utilites" },
    { id: '3', description: "ccc", amount: 7, category: "Groceries" },
  ]);
  const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

  return (
    <div className="App">
      <h3 className="text-center text-primary">Expense Tracker</h3>

      {/* Vriant with html validation and useRef */}
      {/* <div className="mb-5">
        <ExpenseForm1
          onSubmit={(expense)=>{
            setEspense([...expenses, expense])
          } }/>
      </div> */}
      
      {/* !Variant with form hook and zod validatin */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setEspense([...expenses, { ...expense, id: nanoid() }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expense={visibleExpenses}
        onDelete={(id) =>
          setEspense(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
