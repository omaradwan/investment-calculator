import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Table({values}){
//   let {initialInvestment,annualInvestment,expectedReturn,duration}=[...values]
let returnData = calculateInvestmentResults({
    initialInvestment: values[0],
    annualInvestment: values[1],
    expectedReturn: values[2],
    duration: values[3],
  });

 const initInvestment=returnData[0].valueEndOfYear-returnData[0].interest-returnData[0].annualInvestment;  
  return(
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {returnData.map((curObj)=>{
                const totalInterest=curObj.valueEndOfYear-curObj.annualInvestment*curObj.year-initInvestment;
                const totalAmountInvested=curObj.valueEndOfYear-totalInterest;
              return  <tr key={curObj.year}>
                  <td>{curObj.year}</td>
                    <td>{formatter.format(curObj.valueEndOfYear)}</td>
                    <td>{formatter.format(curObj.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                    
                </tr>
            })}
        </tbody>

    </table>
  )
}