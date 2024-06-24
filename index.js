const timeElement = document.getElementById('time');
timeElement.innerHTML = moment().format('HH:mm (UTC+10)');