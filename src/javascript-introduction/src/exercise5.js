// Функция которая принимает первым аргументом время начала встречи в виде строки, второй аргумент - продолжительность в минутах.
// Вернуть должна true/false смотря на то,выходит ли время и продолжительность встречи за рамки рабочего дня.
const dayStart = '07:30';
const dayEnd = '17:45';
function scheduleMeeting(startTime, durationMinutes) {
  const timeToMinutes = time => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const startTimeNum = timeToMinutes(startTime);
  const endTime = startTimeNum + durationMinutes;
  const totalStartDay = timeToMinutes(dayStart);
  const totalEndDay = timeToMinutes(dayEnd);
  if (startTimeNum >= totalStartDay && endTime <= totalEndDay) {
    return true;
  } else {
    return false;
  }
}
console.log('Exercise 05');
console.log(scheduleMeeting('07:30', 15));
console.log(scheduleMeeting('07:15', 30));
console.log(scheduleMeeting('7:30', 30));
console.log(scheduleMeeting('11:30', 60));
console.log(scheduleMeeting('17:00', 45));
console.log(scheduleMeeting('17:30', 30));
console.log(scheduleMeeting('18:00', 15));
