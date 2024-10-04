import { Fragment, useEffect, useRef, useState } from "react";

const App = () => {
  const labelRef = useRef(null)
  const [inputData, setInputData] = useState("")

  useEffect(() => {
    labelRef.current.innerHTML = inputData
  }, [inputData])

  // Operator Replacer
  const operator_replacer = (operator: string) => {
    if (!inputData || ["+", "-", "*", "/"].includes(inputData[inputData.length - 1])) {
      setInputData(inputData.replace(
        inputData[inputData.length - 1],
        operator
      ))
    } else {
      setInputData(prev => prev += operator)
    }
  };

  // Clear Display
  const clear_display = () => {
    setInputData("")
  };

  // Appending Numbers to Screen
  const setData1 = () => setInputData(prev => prev += "1");
  const setData2 = () => setInputData(prev => prev += "2");
  const setData3 = () => setInputData(prev => prev += "3");
  const setData4 = () => setInputData(prev => prev += "4");
  const setData5 = () => setInputData(prev => prev += "5");
  const setData6 = () => setInputData(prev => prev += "6");
  const setData7 = () => setInputData(prev => prev += "7");
  const setData8 = () => setInputData(prev => prev += "8");
  const setData9 = () => setInputData(prev => prev += "9");

  // Adding Operators to Screen
  const setOperatorPlus = () => operator_replacer("+");
  const setOperatorMinus = () => operator_replacer("-");
  const setOperatorAsterisk = () => operator_replacer("*");
  const setOperatorSlash = () => operator_replacer("/");

  // Equality Operator
  const equality = () => {
    try {
      setInputData("")
      setInputData((prev) => prev += eval(inputData));
      console.log(inputData)
    } catch (error) {
      labelRef.current.innerHTML = "💀 Error! 💀";
    }
  };

  // Extras -> 0, ., 00
  const data_updater = (data: string) => {
    if (
      !inputData ||
      ["+", "-", "*", "/"].includes(inputData[inputData.length - 1])
    ) {
      null;
    } else {
      setInputData(prev => prev += data);
    }
  };

  const setData0 = () => data_updater("0");
  const setData00 = () => data_updater("00");
  const setDataDot = () => data_updater(".");

  return (
    <Fragment>
      <form className="calculator">
        <div className="top">
          <h1>Basic Calculator</h1>
        </div>
        <div className="screen">
          <label id="screen_display" ref={labelRef}></label>
        </div>
        <div className="buttons">
          <div className="button7">
            <button type="button" id="7" onClick={setData7}>
              7
            </button>
          </div>
          <div className="button8">
            <button type="button" id="8" onClick={setData8}>
              8
            </button>
          </div>
          <div className="button9">
            <button type="button" id="9" onClick={setData9}>
              9
            </button>
          </div>
          <div className="button4">
            <button type="button" id="4" onClick={setData4}>
              4
            </button>
          </div>
          <div className="button5">
            <button type="button" id="5" onClick={setData5}>
              5
            </button>
          </div>
          <div className="button6">
            <button type="button" id="6" onClick={setData6}>
              6
            </button>
          </div>
          <div className="button1">
            <button type="button" id="1" onClick={setData1}>
              1
            </button>
          </div>
          <div className="button2">
            <button type="button" id="2" onClick={setData2}>
              2
            </button>
          </div>
          <div className="button3">
            <button type="button" id="3" onClick={setData3}>
              3
            </button>
          </div>
          <div className="button0">
            <button type="button" id="0" onClick={setData0}>
              0
            </button>
          </div>
          <div className="button00">
            <button type="button" id="00" onClick={setData00}>
              00
            </button>
          </div>
          <div className="button_dot">
            <button type="button" id="dot" onClick={setDataDot}>
              .
            </button>
          </div>
          <div className="clear">
            <button type="button" id="clear" onClick={clear_display}>
              C
            </button>
          </div>
          <div className="button_plus">
            <button type="button" id="plus" onClick={setOperatorPlus}>
              +
            </button>
          </div>
          <div className="button_minus">
            <button type="button" id="minus" onClick={setOperatorMinus}>
              -
            </button>
          </div>
          <div className="buttonX">
            <button type="button" id="asterisk" onClick={setOperatorAsterisk}>
              X
            </button>
          </div>
          <div className="button_divide">
            <button type="button" id="slash" onClick={setOperatorSlash}>
              /
            </button>
          </div>
          <div className="button_equal">
            <button type="button" id="equal" onClick={equality}>
              =
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default App;
