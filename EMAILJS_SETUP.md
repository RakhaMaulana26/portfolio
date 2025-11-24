# Setup EmailJS untuk Contact Form

Form contact di portfolio Anda sudah diintegrasikan dengan EmailJS. Ikuti langkah-langkah berikut untuk mengaktifkannya:

## Langkah 1: Buat Akun EmailJS (GRATIS)

1. Kunjungi: https://www.emailjs.com/
2. Klik "Sign Up" dan buat akun gratis
3. Verifikasi email Anda

## Langkah 2: Tambahkan Email Service

1. Setelah login, klik "Add New Service"
2. Pilih **Gmail** (karena email Anda menggunakan Gmail)
3. Klik "Connect Account" dan login dengan **rakhamkp@gmail.com**
4. Beri nama service, misalnya: "Portfolio Contact"
5. Copy **Service ID** yang muncul (contoh: service_abc123)

## Langkah 3: Buat Email Template

1. Klik menu "Email Templates"
2. Klik "Create New Template"
3. Edit template dengan format ini:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save template dan copy **Template ID** (contoh: template_xyz789)

## Langkah 4: Dapatkan Public Key

1. Klik menu "Account" (icon profil di pojok kanan atas)
2. Pilih "General" tab
3. Copy **Public Key** (contoh: abcdef123456)

## Langkah 5: Update Kode di App.jsx

Buka file `src/App.jsx` dan cari bagian ini (sekitar baris 30-45):

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Ganti dengan Service ID dari step 2
  'YOUR_TEMPLATE_ID',     // ← Ganti dengan Template ID dari step 3
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'rakhamkp@gmail.com',
  },
  'YOUR_PUBLIC_KEY'       // ← Ganti dengan Public Key dari step 4
)
```

**Contoh setelah diganti:**
```javascript
const result = await emailjs.send(
  'service_abc123',
  'template_xyz789',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'rakhamkp@gmail.com',
  },
  'abcdef123456'
)
```

## Langkah 6: Test Contact Form

1. Jalankan aplikasi: `npm run dev`
2. Buka portfolio di browser
3. Scroll ke section Contact
4. Isi form dan klik "Send Message"
5. Cek email **rakhamkp@gmail.com** untuk menerima pesan

## Fitur yang Sudah Diimplementasikan

✅ Loading state saat mengirim email
✅ Success message setelah email terkirim
✅ Error handling jika gagal kirim
✅ Form disabled saat proses pengiriman
✅ Form auto-clear setelah berhasil kirim
✅ Animasi smooth untuk status message

## Troubleshooting

**Jika email tidak terkirim:**
1. Pastikan Service ID, Template ID, dan Public Key sudah benar
2. Cek console browser untuk error message
3. Pastikan Gmail account sudah terkoneksi dengan benar di EmailJS
4. Cek quota EmailJS (free tier: 200 emails/bulan)

**Jika ada error CORS:**
- Pastikan domain Anda sudah ditambahkan di EmailJS dashboard (untuk production)
- Untuk development (localhost), tidak perlu setting tambahan

## Batas Free Tier EmailJS

- **200 emails per bulan** (cukup untuk portfolio personal)
- Unlimited templates
- Unlimited services
- Email support

Jika butuh lebih, bisa upgrade ke paid plan ($15/bulan untuk 1000 emails).

---

**Email tujuan:** rakhamkp@gmail.com
**Status:** ✅ Ready to configure
**Library:** @emailjs/browser (sudah terinstall)
