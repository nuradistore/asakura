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
        domain: 'suikaxbrock.privateserverr.web.id',
        apiKey: 'ptla_YCWoxLSPDbE7cG1CWqkMgsjUZvD7hx9JUVEfMBvUbK9',
        apiToken: 'ptlc_pxM7FN735wcGZlM3haM0ayQkVwXzVYJmRFwrMkTWU3e',
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
        serverIp: '165.245.184.96',
        port: '3000',
        usernamePrefix: 'as'
    },
    
    // 3. WHATSAPP CONFIG
    whatsapp: {
        adminNumber: '6283112108527'
    },
    
    // 4. SYSTEM SETTINGS
    settings: {
        paymentTimeout: 15,
        testMode: false,
        autoCreateAccount: true,
        debugMode: true,
        useDigiflazzQR: true
    }
};

// ======================================================
// ===== VALIDASI & SAFETY CHECKS =====
// ======================================================

// Validasi config saat load
function validateConfig() {
    const errors = [];
    
    // Cek Digiflazz config
    if (!SYSTEM_CONFIG.digiflazz.username || SYSTEM_CONFIG.digiflazz.username === 'brock') {
        errors.push('Digiflazz username belum diatur');
    }
    
    if (!SYSTEM_CONFIG.digiflazz.apiKey || SYSTEM_CONFIG.digiflazz.apiKey.includes('apiKey')) {
        errors.push('Digiflazz API key belum diatur');
    }
    
    // Cek Panel config
    if (!SYSTEM_CONFIG.panel.domain || SYSTEM_CONFIG.panel.domain.includes('example.com')) {
        errors.push('Panel domain belum diatur');
    }
    
    if (!SYSTEM_CONFIG.panel.apiKey || SYSTEM_CONFIG.panel.apiKey.includes('API_KEY')) {
        errors.push('Panel API key belum diatur');
    }
    
    if (!SYSTEM_CONFIG.panel.apiToken || SYSTEM_CONFIG.panel.apiToken.includes('API_TOKEN')) {
        errors.push('Panel API token belum diatur');
    }
    
    // Cek WhatsApp admin
    if (!SYSTEM_CONFIG.whatsapp.adminNumber || SYSTEM_CONFIG.whatsapp.adminNumber === '6281234567890') {
        errors.push('Nomor WhatsApp admin belum diatur');
    }
    
    // Cek IP server
    if (!SYSTEM_CONFIG.panel.serverIp || SYSTEM_CONFIG.panel.serverIp === '123.456.789.0') {
        errors.push('Server IP belum diatur dengan IP asli');
    }
    
    return errors;
}

// Tambahkan validasi ke object config
SYSTEM_CONFIG.validate = function() {
    const errors = validateConfig();
    
    if (errors.length > 0) {
        console.warn('⚠️ PERINGATAN KONFIGURASI:');
        errors.forEach(error => console.warn(`❌ ${error}`));
        
        if (SYSTEM_CONFIG.settings.debugMode) {
            alert(`PERINGATAN KONFIGURASI:\n\n${errors.join('\n')}\n\nSistem akan berjalan dalam mode testing.`);
        }
        
        // Auto enable test mode jika config belum lengkap
        SYSTEM_CONFIG.settings.testMode = true;
        return false;
    }
    
    return true;
};

// Cek apakah config valid
SYSTEM_CONFIG.isValid = SYSTEM_CONFIG.validate();

// ======================================================
// ===== UTILITY FUNCTIONS =====
// ======================================================

// Helper untuk format WhatsApp number
SYSTEM_CONFIG.formatWhatsApp = function(number) {
    if (!number) return '';
    
    // Hapus semua karakter non-digit
    let cleaned = number.toString().replace(/\D/g, '');
    
    // Jika dimulai dengan 0, ganti dengan 62
    if (cleaned.startsWith('0')) {
        cleaned = '62' + cleaned.substring(1);
    }
    
    // Jika tidak dimulai dengan 62, tambahkan
    if (!cleaned.startsWith('62')) {
        cleaned = '62' + cleaned;
    }
    
    return cleaned;
};

// Helper untuk validasi WhatsApp
SYSTEM_CONFIG.isValidWhatsApp = function(number) {
    const formatted = this.formatWhatsApp(number);
    return /^62\d{9,}$/.test(formatted);
};

// Helper untuk generate signature Digiflazz
SYSTEM_CONFIG.generateDigiflazzSignature = function(refId) {
    // Generate MD5 hash: username + apiKey + refId
    const str = this.digiflazz.username + this.digiflazz.apiKey + refId;
    
    // Simple MD5 implementation (gunakan library MD5 di production)
    function md5(str) {
        // Fallback simple hash untuk testing
        if (SYSTEM_CONFIG.settings.testMode) {
            return 'test_signature_' + Date.now();
        }
        
        // Di production, gunakan library MD5 yang proper
        console.warn('⚠️ Implement MD5 properly in production!');
        return btoa(str).substring(0, 32);
    }
    
    return md5(str);
};

// ======================================================
// ===== LOGGING =====
// ======================================================

console.log('🚀 Asakura Store Config Loaded!');
console.log('🔑 Digiflazz Username:', SYSTEM_CONFIG.digiflazz.username);
console.log('🌐 Domain Panel:', SYSTEM_CONFIG.panel.domain);
console.log('📱 WhatsApp Admin:', SYSTEM_CONFIG.whatsapp.adminNumber);
console.log('⚙️ Mode Testing:', SYSTEM_CONFIG.settings.testMode ? 'AKTIF' : 'NON-AKTIF');
console.log('🤖 Auto Create:', SYSTEM_CONFIG.settings.autoCreateAccount ? 'AKTIF' : 'NON-AKTIF');
console.log('✅ Config Valid:', SYSTEM_CONFIG.isValid ? 'YA' : 'TIDAK (Mode Testing)');

// Warning untuk production
if (!SYSTEM_CONFIG.isValid && !SYSTEM_CONFIG.settings.testMode) {
    console.error('❌ KONFIGURASI TIDAK LENGKAP!');
    console.error('Sistem tidak akan bekerja dengan baik di production.');
}

// Export untuk penggunaan global
if (typeof window !== 'undefined') {
    window.SYSTEM_CONFIG = SYSTEM_CONFIG;
}