import { useContext } from "react"
import CardContext from "../context/CardContext"

export default function Result() {
  const {result, resultTip, reset} = useContext(CardContext)

  return (
    <>
      <div className="card">
        <div className="result-amount">
          <div className="result">
            <h4>Tip Amount</h4>
            <span>/ person</span>
          </div>
          <div className="res">
            <h1>${resultTip}</h1>
          </div>
        </div>
        <div className="result-total">
          <div className="result">
            <h4>Total</h4>
            <span>/ person</span>
          </div>
          <div className="res">
            <h1>${result} </h1>
          </div>
        </div>
        <div className="btn-res">
          <button onClick={() => reset()}>RESET</button>
        </div>
      </div>
    </>
  )
}