import { useState } from 'react'
import {Input} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
// import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd");
  const [toFeild, SetToFeild] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const Currencyinfo = useCurrencyinfo(from);
  console.log(Currencyinfo)

  const options = Object.keys(Currencyinfo);

  const swap = ()=>{
    setFrom(toFeild)
    SetToFeild(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =()=>{
    setConvertedAmount(amount * Currencyinfo[toFeild])
  }

  const bgImg = "https://images.pexels.com/photos/5466789/pexels-photo-5466789.jpeg?auto=compress&cs=tinysrgb&w=400"
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(${bgImg})`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount = {amount}
                            currencyOptions ={options}
                            onCurrencyChange ={()=> setAmount(amount)} 
                            selectCurrency = {from}
                            onAmountChange={(amount)=> setAmount(amount)}
                              
                            
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="toFeild"
                            amount = {convertedAmount}
                            currencyOptions ={options}
                            onCurrencyChange ={(currency)=> SetToFeild(currency)} 
                            selectCurrency = {toFeild}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {`${from.toUpperCase()} to ${toFeild.toUpperCase()}`}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App;
