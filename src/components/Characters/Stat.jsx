const Stat = ({ data }) => {
  if (!data) {
    return (
      <div
        className="flex items-center justify-center w-full min-h-main"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span
          className="animate-spin rounded-full h-8 w-8 border-t-2 border-customOrange300/80"
          aria-label="로딩 중"
        ></span>
      </div>
    );
  }

  return (
    <section className="w-full pt-[20px] bg-white" aria-labelledby="stat-section-title">
      <h2 id="stat-section-title" className="font-bold px-5 text-[1.2rem]">
        능력치
      </h2>
      <ul className="text-[0.75rem]">
        {[
          [0, 3],
          [3, 8],
          [8, 10],
          [12, 15],
          [10, 12],
          [15, 18],
        ].map(([start, end], index) => (
          <li
            key={index}
            className={`border-solid border-customGrey500/20 ${
              index === 0 ? 'bg-white border-y' : 'border-b bg-customGrey500/10'
            }`}
          >
            {data.slice(start, end).map((stat) => (
              <div
                className="h-[2rem] flex items-center justify-between px-3 md:px-5"
                key={stat.stat_name}
                role="listitem"
              >
                <p className="text-customGrey500">{stat.stat_name || '-'}</p>
                <p className="font-bold text-customGrey500">{stat.stat_value || 0}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stat;
