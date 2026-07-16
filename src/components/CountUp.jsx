import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({ end = 0, duration = 1200, start = 0, suffix = '' }) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  useEffect(() => {
    let rafId = null;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setValue(current);
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setValue(end);
    };

    const el = ref.current;
    if (!el) {
      rafId = requestAnimationFrame(step);
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            rafId = requestAnimationFrame(step);
            io.disconnect();
          }
        });
      });
      io.observe(el);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, duration, start]);

  return (
    <span ref={ref} className="stat-value">
      {value}
      {suffix}
    </span>
  );
}
