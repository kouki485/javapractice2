const btn = document.querySelector('button');
btn.addEventListener('click',notify);

function notify(){
    switch (Notification.permission) {
        case 'default':
            Notification.requestPermission();
            break;
        case 'granted':
            new Notification('hello');
            break;
        case 'denied':
            alert('denied');
            break;
    }
}