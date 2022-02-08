const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minuts=document.getElementById('minuts');
const seconds=document.getElementById('seconds');
const countdown=document.getElementById('countdown');

const now=new Date();

const timeexam=new Date('june 15 2022 09:00:00');
function timedown()
{
	const now=new Date();
	const diff=timeexam - now;
const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minuts.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

}
setInterval(timedown,1000);