const audio = document.getElementById("audioRec");
const buttonClick = document.getElementById("playPauseButton");
const player = document.getElementById("player");
const video = document.getElementById("myVideo");


let buttonClicked = () => {
    if(audio.paused){
        audio.play();
        video.play();
        buttonClick.innerHTML = `<svg class="playPauseIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
      </svg>`
        // coverImg.style.animation = "rotation 6s infinite linear"
        
        if (player.classList.contains('hidden')) {
          player.classList.remove('hidden');
          setTimeout(function () {
            player.classList.remove('visuallyhidden');
          }, 3);
        } else {
          player.classList.add('visuallyhidden'); 

          player.addEventListener('transitionend', function(e) {
            // video.classList.add('hidden');
            }, {
              capture: false,
              once: true,
              passive: false
            });
        }
    }else{
        audio.pause();
        video.pause();
        player.classList.remove('hidden');
          setTimeout(function () {
            player.classList.remove('visuallyhidden');
          }, 3);
        
        buttonClick.innerHTML = `<svg
          class="playPauseIcon"
          onclick="buttonClicked()"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-play-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
          />
        </svg>`
          
    }    
}
