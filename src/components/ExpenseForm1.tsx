import { useRef } from "react";
import { categories } from "../Data";
import {nanoid} from 'nanoid'
import Expense from "../interfaces/Expense";
interface Props {
  onSubmit: (data: Expense) => void;
}


const ExpenseForm = ({onSubmit}: Props) => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      if(descriptionRef.current && amountRef.current && categoryRef.current){
        const formData: Expense = {
          id: nanoid(),
          description: descriptionRef.current.value,
          amount: Number(amountRef.current.value),
          category: categoryRef.current.value,
        };
        onSubmit(formData);
      }
      }}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
         ref={descriptionRef}
          id="desccription"
          type="text"
          className="form-control"
          minLength={3}
          maxLength={50}
          required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          ref={amountRef}
          type="number"
          step={0.01}
          id="amount"
          className="form-control"
          min={0.01}
          max={100_000}
          required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <div className="mb-3">
          <select  ref={categoryRef} id="category" className="form-select" required={true}>
            <option value=""></option>
            {categories.map((categrory) => (
              <option key={categrory} value={categrory}>
                {categrory}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
