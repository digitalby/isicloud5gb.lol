function copyLink(btn) {
  navigator.clipboard.writeText('https://isicloud5gb.lol').then(() => {
    btn.classList.add('copied');
    btn.querySelector('span').textContent = 'Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.querySelector('span').textContent = 'Copy Link';
    }, 2000);
  });
}

const YES_CLIPS = [
  '001_clip_03_w1.mp3',
  '002_clip_03_w2.mp3',
  '004_clip_04_w2.mp3',
  '005_clip_04_w3.mp3',
  '006_clip_05_w1.mp3',
  '007_clip_05_w2.mp3',
  '008_clip_05_w3.mp3',
  '011_clip_06_w2.mp3',
  '012_clip_06_w3.mp3',
  '013_clip_06_w4.mp3',
  '040_clip_21_w1.mp3',
  '041_clip_21_w2.mp3',
  '042_clip_21_w3.mp3',
  '043_clip_22_w1.mp3',
  '044_clip_22_w2.mp3',
  '045_clip_22_w3.mp3',
  '046_clip_22_w4.mp3',
  '051_clip_23_w2.mp3',
];

function playYesSound() {
  var audio = document.getElementById('yes-audio');
  var clip = YES_CLIPS[Math.floor(Math.random() * YES_CLIPS.length)];
  audio.src = '/audio/clips/' + clip;
  audio.play().catch(function() {});
}
