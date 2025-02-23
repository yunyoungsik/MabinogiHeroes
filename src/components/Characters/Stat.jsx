const Stat = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center w-full min-h-main mt-[66px]">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section className="w-full pt-[20px] bg-white">
      <h2 className="font-bold px-5 text-[1.2rem]">능력치</h2>
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
            className={`border-solid border-basicGrey/20 ${index === 0 ? 'bg-white border-y' : 'border-b bg-basicGrey/10'}`}
          >
            <ul>
              {data.slice(start, end).map((stat, idx) => (
                <li
                  className="h-[2rem] flex items-center justify-between px-5"
                  key={idx}
                >
                  <p className="text-basicGrey">{stat.stat_name || '-'}</p>
                  <p className="font-bold text-basicBlack/60">{stat.stat_value || 0}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stat;