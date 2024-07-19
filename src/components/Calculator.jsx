import { useState } from "react";
import Result from "./Result";
import { useEffect } from "react";
import CardContext from "../context/CardContext";

export default function Calculator() {
  const [bill, setBill] = useState(100)
  const [selectTip, setSelectTip] = useState('')
  const [custom, setCustom] = useState('')
  const [people, setPeople] = useState(3)
  const [resultTip, setResultTip] = useState('')
  const [result, setResult] = useState('')

  console.log(bill, "fatura")
  console.log(selectTip, "yüüzdesi")
  console.log(custom)
  console.log(people, "insan sayısı")
  console.log(resultTip, "bahşiş miktarı")
  console.log(result, "toplam hesap")

  function yuzdeAl(sayi, yuzde) {
    return (sayi * yuzde) / 100;
  }

  const tipCalculator = () => {
    if (custom === "") {
      let seletUpdate = selectTip.replace(/%/g, "")
      let percentage = yuzdeAl(bill, seletUpdate)
      setResultTip(percentage)
      let total = (percentage * people) + bill
      setResult(total)
    } else {
      let percentage2 = yuzdeAl(bill, custom)
      setResultTip(percentage2)
      let total2 = (percentage2 * people) + bill
      setResult(total2)
    }
  }
  useEffect(() => {
    if (bill === '' && people === 0 && (selectTip === "" || custom === '')) {
      console.log(" herhangi biri false")
    } else {
      tipCalculator()
    }
  }, [selectTip, people, bill])

  const data = {
    result,
    resultTip
  }

  return (
    <>
      <CardContext.Provider value={data}>
        <div className="container">
          <div className="row">
            <div className="input-st">
              <h4>Bill</h4>
              <input value={bill} onChange={(e) => setBill(e.target.value)} type="number" placeholder="0" />
            </div>
            <div className="select-tp">
              <h4>Select Tip %</h4>
              <div className="btn">
                <input
                  type="button" value="5%" onClick={(e) => setSelectTip(e.target.value)} />
                <input
                  type="button" value="10%" onClick={(e) => setSelectTip(e.target.value)} />
                <input
                  type="button" value="15%" onClick={(e) => setSelectTip(e.target.value)} />
                <input
                  type="button" value="25%" onClick={(e) => setSelectTip(e.target.value)} />
                <input
                  type="button" value="50%" onClick={(e) => setSelectTip(e.target.value)} />
                <button> <input
                  value={custom} onChange={(e) => setCustom(e.target.value)} type="number" placeholder="Custom" /> </button>
              </div>
            </div>
            <div className="people-number">
              <h4>Number of People</h4>
              <input
                type="number" value={people} onChange={(e) => setPeople(e.target.value)} />
            </div>
          </div>
          <div className="card-item">
            <Result />
          </div>
        </div>
      </CardContext.Provider>
    </>
  )
}