import { useState } from "react";
import Result from "./Result";
import { useEffect } from "react";
import CardContext from "../context/CardContext";

export default function Calculator() {
  const [bill, setBill] = useState('0')
  const [selectTip, setSelectTip] = useState('')
  const [custom, setCustom] = useState('')
  const [people, setPeople] = useState('')
  const [resultTip, setResultTip] = useState('')
  const [result, setResult] = useState('')

  console.log(bill, "fatura")
  console.log(selectTip, "select tip")
  console.log(custom, "custom")

  console.log(people, "insan sayısı")
  console.log(resultTip, "bahşiş miktarı")
  console.log(result, "toplam hesap")

  function yuzdeAl(sayi, yuzde) {
    return (sayi * yuzde) / 100;
  }
  function toplam(yuzde, sayi) {
    return (yuzde * sayi);
  }

  const tipCalculator = () => {
    if (custom === '') {
      let seletUpdate = selectTip.replace(/%/g, "")
      let numberToString = Number(bill)
      let percentage = yuzdeAl(numberToString, Number(seletUpdate))
      setResultTip(percentage)
      let total = toplam(resultTip, people) + numberToString
      setResult(total)
    } else {
      let numberToString = Number(bill)
      let percentage = yuzdeAl(numberToString, custom)
      setResultTip(percentage)
      let total = toplam(resultTip, people) + numberToString
      setResult(total)
    }
  }


  useEffect(() => {setCustom('')}, [selectTip])
  useEffect(() => {setSelectTip('')}, [custom])

  useEffect(() => {
    if (bill === '' && people === 0 && (selectTip === "" || custom === '')) {
      console.log(" herhangi biri false")
    } else {
      tipCalculator()
    }
  }, [bill || people || selectTip || custom])

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