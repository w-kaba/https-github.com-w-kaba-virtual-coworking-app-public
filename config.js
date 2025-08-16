// Firebase設定ファイル
// このファイルを一度設定すれば、index.html のアップデートに影響されません

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCUp39wJR1IKoHG1ek_NZY0B-2neosi_rg",
  authDomain: "virtual-coworking-app.firebaseapp.com",
  projectId: "virtual-coworking-app",
  storageBucket: "virtual-coworking-app.firebasestorage.app",
  messagingSenderId: "902791047246",
  appId: "1:902791047246:web:f2048e3843c3e70b087b1f",
  measurementId: "G-KRNXH7VD6Y"
};

// 設定確認用（デバッグ）
console.log(‘🔥 Firebase設定が読み込まれました:’, window.FIREBASE_CONFIG.projectId);
