// Firebase конфігурація для проекту krok-d6d2c
const firebaseConfig = {
    apiKey:            "AIzaSyCbjcd1JwAJAMLs9vRSTzeiBr0zWCv08bc",
    authDomain:        "krok-d6d2c.firebaseapp.com",
    projectId:         "krok-d6d2c",
    storageBucket:     "krok-d6d2c.firebasestorage.app",
    messagingSenderId: "16217162790",
    appId:             "1:16217162790:web:6c9e68b97f83188ff152e7"
};

// Ініціалізація Firebase та Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
