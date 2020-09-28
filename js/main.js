$(function() {

  var Page = (function() {

    var $nav = $('#nav-dots > span'),
      slitslider = $('#slider').slitslider({
        onBeforeChange: function(slide, pos) {

          $nav.removeClass('nav-dot-current');
          $nav.eq(pos).addClass('nav-dot-current');

        }
      }),

      init = function() {

        initEvents();

      },
      initEvents = function() {

        $nav.each(function(i) {

          $(this).on('click', function(event) {

            var $dot = $(this);

            if (!slitslider.isActive()) {

              $nav.removeClass('nav-dot-current');
              $dot.addClass('nav-dot-current');

            }

            slitslider.jump(i + 1);
            return false;

          });

        });

      };

    return {
      init: init
    };

  })();

  Page.init();

  /**
   * Notes:
   *
   * example how to add items:
   */

  /*

  var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

  // call the plugin's add method
  ss.add($items);

  */


});

// TIME LINE  https://www.jqueryscript.net/time-clock/Dynamic-Animated-Timeline-Slider.html
var data = [{
  date: 'Mar. 15, 1933',
  content: 'Born in Brooklyn, NY'
}, {
  date: '1954',
  content: 'Graduated with a B.A. in government at Cornell'
}, {
  date: '1956-58',
  content: 'Harvard Law School'
}, {
  date: '1959',
  content: 'Columbia Law School'
}, {
  date: '1973-80',
  content: 'General counsel for the ACLU'
}, {
  date: '1980-93',
  content: 'Appointed to the US Court of Appeals by Jimmy Carter'
}, {
  date: '1993',
  content: 'Appointed to the US Supreme Court by Bill Clinton'
},  {
  date: '1999',
  content: 'Given the American Bar Association’s Thurgood Marshall Award'
}, {
  date: '2002',
  content: "Inducted into the National Women's Hallf of fame"
}, {
  date: '2010',
  content: "American Bar Association's medal recipient"
}, {
  date: 'Sep. 18, 2020',
  content: 'Passes away due to complications from metastatic pancreas cancer'
}];



$("#my-timeline").roadmap(data, {
	eventsPerSlide: 5,
	slide: 1,
	rootClass: 'roadmap',
	prevArrow: '<',
	nextArrow: '>',
	orientation: 'auto',
	onBuild: function() {
		console.log('on build event');
	},
	eventTemplate: '<div class="event">' +
			'<div class="event__date">####DATE###</div>' +
			'<div class="event__content">####CONTENT###</div>' +
		'</div>'
});



// QUIZ: https://www.jqueryscript.net/other/Dynamic-Quiz.html
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Is jQuery required for this plugin?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
    },
    {
      'q': 'How do you use it?',
      'options': [
        'Include jQuery, that\'s it!',
        'Include jQuery and the plugin javascript.',
        'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'The plugin can be configured to require a perfect score.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
      'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});
