import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./DoughnutChart"

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  console.log(`totalCurrentBalance in the totalbalancebox: ${totalCurrentBalance}`)
  return (
    <section className='total-balance'>
      <div className="total-balance-chart">
        <DoughnutChart
          accounts={accounts}
        />
      </div>
      {/* below is the original class name for the following line.
      saving it just in case i'm wrong about my styling fix */}
      {/* <div className="flex flex-col gap-6 max-w-[120px]"> */}
      <div className="flex flex-col gap-6 w-full">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter
              amount={totalCurrentBalance}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox