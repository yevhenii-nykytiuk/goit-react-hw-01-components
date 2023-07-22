import {RandomColors} from './RandomColors';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({title, stats}) => {
 return (

<section className={css.statistics} key={stats.id}>

  

  {title && <h2 class={css.title}>{title}</h2>}
  
  <ul className={css.statList}>
  
  {stats.map(({id, label, percentage}) => (
    <li className={css.item} key={id}>
     <span className={css.label}>{label}</span>
     <span className={css.percentage}>{percentage}%</span>
    </li>

  ))}
   

 </ul>
 
</section>
 )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}