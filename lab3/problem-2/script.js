const button = document.getElementById("start");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const time = document.getElementById("time");

const generateSecond = (hr, min, sec) => {
  const h = parseInt(hr);
  const m = parseInt(min);
  const s = parseInt(sec);
  return (
    (isNaN(h) ? 0 : h) * 3600 + (isNaN(m) ? 0 : m) * 60 + (isNaN(s) ? 0 : s)
  );
};

let subscription = null;

rxjs
  .fromEvent(button, "click")
  .pipe(
    rxjs.throttleTime(1000),
    rxjs.switchMap(() => {
      if (subscription) {
        subscription.unsubscribe();
        subscription = null;
      }

      const t = generateSecond(hours.value, minutes.value, seconds.value);

      return rxjs.timer(0, 1000).pipe(rxjs.take(t + 1));
    }),
  )
  .subscribe(
    (x) => {
      time.innerText = new Date(
        (generateSecond(hours.value, minutes.value, seconds.value) - x) * 1000,
      )
        .toISOString()
        .substring(11, 19);
    },
    null,
    () => {
      console.log("Countdown complete");
      // Optionally, you can perform any cleanup or additional logic here
    },
  );
