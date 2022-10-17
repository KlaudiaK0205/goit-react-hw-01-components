import Stats from './statistics.module.css'

export const UserStats = ({ title, stats }) => {
  return (
    <section className={Stats.statistics}>
          { title && <h2 class={Stats.title}>{title}</h2>}
      <ul className={Stats.statsList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={Stats.item} key={id}>
            <span className={Stats.label}>{label}</span>
            <span className={Stats.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// DONE