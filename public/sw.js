self.addEventListener('install', (_event) => {
    console.log('install....');
});

self.addEventListener('activate', (_event) => {
    console.log('activating...', _event);

    return self.clients.claim()
});

self.addEventListener('fetch', function (_event) {
    console.log('fetching...');
});