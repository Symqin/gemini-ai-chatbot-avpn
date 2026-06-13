# Gemini Chatbot API

Project ini adalah sebuah RESTful API sederhana yang dibangun menggunakan **Node.js** dan **Express** untuk berinteraksi dengan **Google Gemini AI** (model `gemini-3.5-flash`). API ini memungkinkan pengguna untuk mengirim riwayat percakapan dan mendapatkan respons cerdas berbahasa Indonesia dari AI.

## Prasyarat

Sebelum menjalankan project ini, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/)
- Akun Google dan **Gemini API Key** yang bisa didapatkan melalui [Google AI Studio](https://aistudio.google.com/).

## Instalasi

1. Clone atau download repository ini.
2. Buka terminal/command prompt di dalam folder project.
3. Instal semua dependencies dengan menjalankan perintah:
   ```bash
   npm install
   ```
4. Buat sebuah file bernama `.env` di direktori utama project (sejajar dengan `package.json`), dan tambahkan kredensial API Key Anda:
   ```env
   GEMINI_API_KEY=masukkan_api_key_anda_disini
   ```

## Menjalankan Server

Untuk menjalankan server API, gunakan perintah berikut:

```bash
npm start
```

Server akan berjalan dan bisa diakses di `http://localhost:3000`.

## Penggunaan API

### Endpoint Chat

- **URL:** `/api/chat`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

**Body Request (JSON):**

Kirimkan payload JSON yang memuat array `conversation` berisi peran (`role`) dan teks pesan (`text`). Role bisa berupa `"user"` atau `"model"`.

```json
{
  "conversation": [
    { "role": "user", "text": "Apa itu GEMINI API?" }
  ]
}
```

**Contoh Response Sukses (200 OK):**

```json
{
  "result": "GEMINI API adalah sebuah antarmuka pemrograman yang..."
}
```

**Contoh Response Error (500 Internal Server Error / 400 Bad Request):**

```json
{
  "error": "Penjelasan detail mengenai error yang terjadi"
}
```
