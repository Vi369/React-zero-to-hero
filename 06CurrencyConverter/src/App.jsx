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

//   const bgImg = "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  return (
    <>
      <div className='w-full flex bg-[#414141]'>
        <div className=' w-1/2 flex flex-col items-center justify-center gap-10'>
        <h1 className=' text-4xl font-bold text-blue-50'>Chai aur Code</h1>
        <img className=' rounded-lg ' src="https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="hitesh choudhary" />

        </div>

        <div
        className=" bg-[#313131] w-1/2 h-screen flex flex-col  justify-center items-center gap-10   " //
        // style={{
        //     backgroundImage: `url(${bgImg})`,
        // }}
        
    >
        <h1 className=' text-4xl font-bold text-blue-50'>Currency Converter</h1>
        <div className="w-1/2">
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
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-800 text-white px-2 py-0.5"
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
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white px-4 py-3 rounded-lg">
                        Convert {`${from.toUpperCase()} to ${toFeild.toUpperCase()}`}
                    </button>
                </form>
            </div>
        </div>
    </div>
      </div>
   
    </>
);
}

export default App;
