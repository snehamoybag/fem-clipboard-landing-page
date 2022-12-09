// stylesheet
import '/scss/style.scss';
/*
// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
*/
// remove animation caused horizontal scrollbar
const animationFadeLeft = document.querySelectorAll('[data-aos="fade-left"]');
const animationFadeRight = document.querySelectorAll('[data-aos="fade-right"]');

const overFlowXAnimationEls = [
  animationFadeLeft,
  animationFadeRight,
];

function removeHorizontalScrollBar(elArr){
  // iterate animations array
  for (let i = 0; i < elArr.length; i++) {
    // iterate all the elements as 'querySelectorAll' returns a node list
    for (let j = 0; j < elArr[i].length; j++) {
      elArr[i][j].parentElement.style.overflowX = 'hidden';
    }
  }
}
// remove horizontal scroll bar
removeHorizontalScrollBar(overFlowXAnimationEls);