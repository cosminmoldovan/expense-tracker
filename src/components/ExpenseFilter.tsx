import React from 'react'
import { categories } from "../Data";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
    <select className="form-select" onChange={(event)=>onSelectCategory(event?.target.value)}>
        <option value="">All categories</option>
        {categories.map(categrory => <option key={categrory} value={categrory}>{categrory}</option>)}
    </select>
  )
}

export default ExpenseFilter