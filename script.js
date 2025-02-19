
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }




  $(document).ready(function () {
    function countUp(element, start, end, duration) {
      let range = end - start;
      let increment = end > start ? 1 : -1;
      let stepTime = Math.abs(Math.floor(duration / range));
      let current = start;
      let timer = setInterval(function () {
        current += increment;
        $(element).text(current);
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    function triggerCountUp(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).find('.count').each(function () {
            let $this = $(this);
            let endValue = parseInt($this.text());
            $this.text(0);
            countUp(this, 0, endValue, 1000);
          });
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }

    // Initialize Intersection Observer
    const observer = new IntersectionObserver(triggerCountUp, { threshold: 0.5 });

    // Observe the section containing the counters
    $('.our-work-section').each(function () {
      observer.observe(this);
    });
  });



