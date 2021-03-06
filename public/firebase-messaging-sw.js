/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js')

if (firebase.messaging.isSupported()) {
    firebase.initializeApp({
        apiKey: 'AIzaSyDexo38QT1UX1U9oC-GZT-VBhnezU8mCmg',
        authDomain: 'assignment-1-e2c42.firebaseapp.com',
        projectId: 'assignment-1-e2c42',
        storageBucket: 'assignment-1-e2c42.appspot.com',
        messagingSenderId: '935346554286',
        appId: '1:935346554286:web:110845cc05a7cb2e99b43f',
    })

    const messaging = firebase.messaging()
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('../firebase-messaging-sw.js')
            .then((registration) => {
                // eslint-disable-next-line no-console
                console.log(
                    'Registration successful, scope is:',
                    registration.scope
                )
                messaging.getToken({
                    vapidKey:
                        // eslint-disable-next-line max-len
                        'BGhXg7U9kVPQRPcX3c5RKGJY7kAJIe6N62e0gocSYEjT7Fd_LgIDumMzHoGLaRthKCD3oVwz_6nicTKOUSAWEpo',
                    serviceWorkerRegistration: registration,
                })
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log('Service worker registration failed, error:', err)
            })
    }
    messaging.setBackgroundMessageHandler((payload) => {
        // eslint-disable-next-line no-console
        console.log(
            '[firebase-messaging-sw.js] Received background message ',
            payload
        )
        // Customize notification here
        const notificationTitle = 'Notification Service'
        const notificationOptions = {
            body: 'you have some new notifications.',
            icon: '/firebase-logo.png',
        }

        return self.registration.showNotification(
            notificationTitle,
            notificationOptions
        )
    })
}
