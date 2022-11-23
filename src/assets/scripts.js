$(function() {
	$('.start-screen').on('click', '.element', function() {
		var element = $(this).attr('data-element');

		$('.start-screen').hide();
		$('.element-screen[data-element="' + element +'"]')
			.addClass('is-visible');
		$('body').addClass(element);
	});

	$('button').click(function() {
		var audio = $(this).find('audio').get(0);
		var shouldPlay = audio.paused;

		pauseAllAudio();

		if (shouldPlay) {
			$(this)
				.addClass('is-playing')
				.removeClass('is-no-longer-playing');

			audio.currentTime = 0;
			audio.volume = .05; // debug

			try {
				audio.play();
			} catch (e) {
				//
			}

			setTimeout(function() {
				audio.play();
			}, 25);
		}
	});

	function pauseAllAudio() {
		$('.is-playing')
			.removeClass('is-playing')
			.addClass('is-no-longer-playing')
			.find('audio').each(function() {
				$(this).get(0).pause();
			});
	}
});
