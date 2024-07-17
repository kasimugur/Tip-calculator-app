export default function Result() {
  return (
    <>
      <div className="card">
        <div className="result-amount">
          <div className="result">
            <h4>Tip Amount</h4>
            <span>/ person</span>
          </div>
          <div className="res">
            <h1>$0.00</h1>
          </div>
        </div>
        <div className="result-total">
          <div className="result">
            <h4>Total</h4>
            <span>/ person</span>
          </div>
          <div className="res">
            <h1>$0.00</h1>
          </div>
        </div>
        <div className="btn">
          <button>RESET</button>
        </div>
      </div>
    </>
  )
}