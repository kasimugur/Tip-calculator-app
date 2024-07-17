import Result from "./Result";

export default function Calculator() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="input-st">
            <h4>Bill</h4>
            <input type="number" placeholder="0" />
          </div>
          <div className="select-tp">
            <h4>Select Tip %</h4>
            <div className="btn">
              <input type="button" value="5%" />
              <input type="button" value="10%" />
              <input type="button" value="15%" />
              <input type="button" value="25%" />
              <input type="button" value="50%" />
              <button> <input type="number" placeholder="Custom" /> </button>
            </div>
          </div>
          <div className="people-number">
            <h4>Number of People</h4>
            <input type="number" placeholder="0" />
          </div>
        </div>
        <div className="card-item">
          <Result />
        </div>
      </div>
    </>
  )
}