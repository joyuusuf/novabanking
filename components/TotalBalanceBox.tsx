import React from 'react'

import { formatAmount } from '@/lib/utils'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

// type TotalBalanceBoxProps = {
//   accounts: any[];
//   totalBanks: number;
//   totalCurrentBalance: number;
// };

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts} />

        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts : {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className='total-balance-label'>
                    Total Current Balance

                </p>

                    <div className='total-balance-amount flex-center gap-2'>
                        <AnimatedCounter amount = {totalCurrentBalance}/>
                        {/* {formatAmount (totalCurrentBalance)} */}
                    </div>

            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox


// import AnimatedCounter from "./AnimatedCounter";

// type TotalBalanceBoxProps = {
//   accounts: any[];
//   totalBanks: number;
//   totalCurrentBalance: number;
// };

// const TotalBalanceBox = ({
//   accounts,
//   totalBanks,
//   totalCurrentBalance,
// }: TotalBalanceBoxProps) => {
//   return (
//     <section className="total-balance">
//       <div className="flex flex-col gap-2">
//         <p className="total-balance-label">Total Balance</p>

//         {/* ✅ CHANGED FROM <p> TO <div> */}
//         <div className="total-balance-amount flex-center gap-2">
//           <AnimatedCounter amount={totalCurrentBalance} />
//         </div>
//       </div>

//       <div className="flex flex-col items-end">
//         <p className="text-14 text-gray-600">Banks</p>
//         <p className="text-16 font-semibold text-gray-900">{totalBanks}</p>
//       </div>
//     </section>
//   );
// };

// export default TotalBalanceBox;
