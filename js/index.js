document.addEventListener('DOMContentLoaded', () => {

  const accordeon = () => {
    const featureList = document.querySelector('.feature-list');
    const featureLinks = featureList.querySelectorAll('.feature__link');
    const featureSubs = featureList.querySelectorAll('.feature-sub');

    const toggleAccordeon = index => {
      for (let i = 0; i < featureSubs.length; i++) {
        if (i === index) {
          featureLinks[i].classList.toggle('feature__link_active');
          featureSubs[i].classList.toggle('hidden');
        } else {
          featureLinks[i].classList.remove('feature__link_active');
          featureSubs[i].classList.add('hidden');
        }
      }
    };

    featureList.addEventListener('click', e => {
      let target = e.target;

      target = target.closest('.feature__link');

      if (target) {
        featureLinks.forEach((featureLink, index) => {
          if (target === featureLink) {
            toggleAccordeon(index);
          }
        });
      }
    });
  };

  accordeon();

});