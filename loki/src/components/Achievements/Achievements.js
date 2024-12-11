// Achievements.js
import React, { useEffect } from 'react';
import './Achievements.css';

const Achievements = () => {
  // Counter Animation Effect
  useEffect(() => {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-number');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
      <div className="container">
        <div className="row d-md-flex justify-content-center align-items-center">
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="1">0</strong>
                <span>Achievements</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="13">0</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="500">0</strong>
                <span>Cups of tea</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ftco-section ftco-hireme img margin-top" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="row justify-content-center">
          <div className="col-md-7 ftco-animate text-center">
            <h2>More projects on<span> Github</span></h2>
            <div className="heading">
              <h4>I love to solve coding problems & making websites</h4>
              <p><a href="https://github.com/lokendra6267" className="btn btn-primary py-3 px-5">GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
