// ======================================================
// ===== KONFIGURASI SYSTEM ASAKURA STORE =====
// ======================================================
// File ini berisi konfigurasi API dan pengaturan sistem
// Edit dengan data Anda yang sebenarnya

const SYSTEM_CONFIG = {
    // 1. DIGIFLAZZ CONFIG (Untuk pembayaran)
    digiflazz: {
        username: 'USERNAME_DIGIFLAZZ_ANDA',      // Ganti dengan username Digiflazz Anda
        apiKey: 'APIKEY_DIGIFLAZZ_ANDA',          // Ganti dengan API Key Digiflazz Anda
        skuCodes: {
            'Panel 1 GB': 'panel1gb',
            'Panel 2 GB': 'panel2gb',
            'Panel 3 GB': 'panel3gb',
            'Panel 4 GB': 'panel4gb',
            'Unlimited 1 Bulan': 'unlimited1',
            'Unlimited 2 Bulan': 'unlimited2',
            'Unlimited 3 Bulan': 'unlimited3',
            'Unlimited 4 Bulan': 'unlimited4'
        }
    },
    
    // 2. PANEL SERVER CONFIG (Untuk create akun otomatis)
    panel: {
        domain: 'asakura.my.id',                // Domain panel Anda
        apiKey: 'API_KEY_PANEL_KAMU',           // API Key dari panel
        apiToken: 'API_TOKEN_PANEL_KAMU',       // API Token dari panel
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
        serverIp: '123.456.789.0',              // IP server panel
        port: '2083',                           // Port cPanel
        usernamePrefix: 'as'                    // Prefix username
    },
    
    // 3. WHATSAPP CONFIG
    whatsapp: {
        adminNumber: '6281234567890'            // Nomor WhatsApp admin
    },
    
    // 4. SYSTEM SETTINGS
    settings: {
        paymentTimeout: 15,                     // Timeout pembayaran (menit)
        testMode: true,                         // Mode testing (true untuk simulasi, false untuk real)
        autoCreateAccount: false,               // Auto create akun di panel (true untuk aktif)
        debugMode: false                        // Mode debug (lihat log di console)
    }
};

// ======================================================
// ===== JANGAN EDIT DI BAWAH INI =====
// ======================================================
console.log('Asakura Store Config Loaded!');
console.log('Domain Panel:', SYSTEM_CONFIG.panel.domain);
console.log('Mode Testing:', SYSTEM_CONFIG.settings.testMode ? 'AKTIF' : 'NON-AKTIF');
