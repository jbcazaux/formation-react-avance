import PropTypes from 'prop-types'
import style from './NiceDice.scss'
import cn from 'classnames'

const NiceDice = ({ value }) => {
  const dotsPerColumn = Math.floor(value / 2)

  return (
    <div className={style.dice}>
      <DiceColumn dots={dotsPerColumn} />
      {value % 2 ? <div className={style.dot} /> : null}
      <DiceColumn dots={dotsPerColumn} symetrie />
    </div>
  )
}
NiceDice.propTypes = {
  value: PropTypes.number.isRequired,
}

const DiceColumn = ({ dots, symetrie }) => (
  <div className={cn(style.diceColumn, { [style.symetrie]: symetrie })}>
    {new Array(dots).fill('').map((_, i) => (
      <div key={i} className={style.dot} />
    ))}
  </div>
)

DiceColumn.propTypes = {
  dots: PropTypes.number.isRequired,
  symetrie: PropTypes.bool,
}
export default NiceDice
