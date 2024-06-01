'use client'
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  console.log(`totalcurrentAmount in the animatedCounter: ${amount}`)
  return (
    <div className='w-full'>
      <CountUp
        decimal='.'
        // 'decimals' sets the amount of decimal places for some reason
        decimals={2}
        // 'decimalPlaces' does not set the amount of decimal places, not sure what it's for
        // decimalPlaces={2}
        prefix='$'
        end={1250.35}
      />
    </div>
  )
}

export default AnimatedCounter