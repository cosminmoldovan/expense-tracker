import Expense from "../interfaces/Expense";
interface Props {
  expense: Expense[];
  onDelete: (id: string) => void;
}
const ExpenseList = ({ expense, onDelete }: Props) => {
  if (expense.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expense.map((expanse) => (
          <tr key={expanse.id}>
            <td>{expanse.description}</td>
            <td>${expanse.amount.toFixed(2)}</td>
            <td>{expanse.category}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => onDelete(expanse.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td colSpan={3}>
            $
            {expense
              .reduce((acc, expanse) => acc + expanse.amount, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
