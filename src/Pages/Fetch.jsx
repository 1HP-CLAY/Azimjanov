const socket = new WebSocket('ws://cmd.web-prj.ru');
socket.onmessage = function(event) {
document.getElementById('userCount').innerText = event.data;
};


setInterval(function() {
    Fetch('ws://cmd.web-prj.ru')
        .then(response => response.json())
        .then(data => {
            document.getElementById('userCount').innerText = data.count;
        });
}, 5000); // обновление каждые 5 секунд





