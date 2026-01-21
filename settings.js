// ===== KONFIGURASI SYSTEM ASAKURA STORE =====
// ======================================================
// File ini berisi konfigurasi API dan pengaturan sistem
// Edit dengan data Anda yang sebenarnya

const SYSTEM_CONFIG = {
    // 1. DIGIFLAZZ CONFIG (Untuk pembayaran QRIS)
    digiflazz: {
        username: 'brock',
        apiKey: 'rg_bd8156aadc73ea483b4d41f2a8dc4a',
        skuCodes: {
            'Panel 1 GB': 'panel1gb',
            'Panel 2 GB': 'panel2gb',
            'Panel 3 GB': 'panel3gb',
            'Panel 4 GB': 'panel4gb',
            'Unlimited 1 Bulan': 'unlimited1',
            'Unlimited 2 Bulan': 'unlimited2',
            'Unlimited 3 Bulan': 'unlimited3',
            'Unlimited 4 Bulan': 'unlimited4'
        },
        prices: {
            'panel1gb': 5000,
            'panel2gb': 12000,
            'panel3gb': 19800,
            'panel4gb': 24500,
            'unlimited1': 30000,
            'unlimited2': 42000,
            'unlimited3': 50000,
            'unlimited4': 62000
        }
    },
    
    // 2. PANEL SERVER CONFIG (Untuk create akun otomatis)
    panel: {
        domain: 'asakura.my.id',
        apiKey: 'ptla_YCWoxLSPDbE7cG1CWqkMgsjUZvD7hx9JUVEfMBvUbK9',        // GANTI!
        apiToken: 'ptlc_pxM7FN735wcGZlM3haM0ayQkVwXzVYJmRFwrMkTWU3e',        // GANTI!
        packageMapping: {
            'Panel 1 GB': '1',
            'Panel 2 GB': '2',
            'Panel 3 GB': '3',
            'Panel 4 GB': '4',
            'Unlimited 1 Bulan': 'unl1',
            'Unlimited 2 Bulan': 'unl2',
            'Unlimited 3 Bulan': 'unl3',
            'Unlimited 4 Bulan': 'unl4'
        },
        serverIp: '123.456.789.0',              // GANTI!
        port: '2083',
        usernamePrefix: 'as'
    },
    
    // 3. WHATSAPP CONFIG
    whatsapp: {
        adminNumber: '6281234567890'            // GANTI!
    },
    
    // 4. SYSTEM SETTINGS
    settings: {
        paymentTimeout: 15,
        testMode: false,                         // FALSE untuk mode REAL
        autoCreateAccount: true,                 // TRUE untuk auto create
        debugMode: true,
        useDigiflazzQR: true
    }
};

// ======================================================
// ===== JANGAN EDIT DI BAWAH INI =====
// ======================================================
console.log('🚀 Asakura Store Config Loaded!');
console.log('🔑 Digiflazz Username:', SYSTEM_CONFIG.digiflazz.username);
console.log('🌐 Domain Panel:', SYSTEM_CONFIG.panel.domain);
console.log('🧪 Mode Testing:', SYSTEM_CONFIG.settings.testMode ? 'AKTIF' : 'NON-AKTIF');
console.log('🤖 Auto Create Account:', SYSTEM_CONFIG.settings.autoCreateAccount ? 'AKTIF' : 'NON-AKTIF');