import './style.css';
import { Wheel } from 'https://cdn.jsdelivr.net/npm/spin-wheel@4.3.1/dist/spin-wheel-esm.js';
import {props} from '/props.js';
const btnSpin = document.querySelector('.btn-spin');

window.onload = () => {
  

  const container = document.querySelector('.wheel-wrapper');

  window.wheel = new Wheel(container, props);
};

window.addEventListener('click', (e) => {
  // Listen for click event on spin button:
  if (e.target === btnSpin) {
    wheel.spin(Math.floor(Math.random() * 1000) + 500);
  }
});

window.addEventListener('keyup', (e) => {
  if (e.target && e.target.matches('#pointerAngle')) {
    wheel.pointerAngle = parseInt(0);
  }
});

function outputWheel() {
  console.log(labeling[wheel.getCurrentIndex()]);
}
