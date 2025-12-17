"use client"
import React from 'react'
import CountUp from 'react-countup';


const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <div className='w-full'>
        
        <CountUp
        // duration={2.72}
        decimals={2}
        decimal=' , '
        prefix='$'
        end={amount}/>
    
    </div>
  )
}

export default AnimatedCounter


// "use client";

// import CountUp from "react-countup";

// const AnimatedCounter = ({ amount }: { amount: number }) => {
//   return (
//     <span className="inline-block w-full">
//       <CountUp
//         end={amount}
//         decimals={2}
//         duration={2.75}
//         decimal=","
//       />
//     </span>
//   );
// };

// export default AnimatedCounter;
