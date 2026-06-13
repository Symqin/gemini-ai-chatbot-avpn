# MindTree AI

MindTree AI adalah aplikasi web *mental health chatbot* (asisten kesehatan mental virtual) dengan antarmuka yang modern, bersih, dan menenangkan. Aplikasi ini dibangun di atas **Node.js**, **Express**, dan mengintegrasikan model kecerdasan buatan **Google Gemini 2.5 Flash** untuk memberikan dukungan konseling psikologis yang empatik dan responsif.

![MindTree AI Banner](https://img.shields.io/badge/Gemini-2.5_Flash-blue?style=for-the-badge&logo=google) ![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=nodedotjs)

## Fitur Utama

- **UI/UX Profesional & Calming**: Menggunakan palet warna *Sage Green* yang menenangkan, font modern (Inter), dan desain gelembung obrolan yang estetis.
- **Dukungan Markdown**: Jawaban dari AI secara otomatis dirender menggunakan format Markdown (huruf tebal, poin-poin, blok kode) berkat integrasi library `marked.js`.
- **Typing Indicator**: Terdapat animasi *typing* halus untuk pengalaman obrolan yang lebih natural.
- **Konseling Berbasis AI**: Prompt backend telah dioptimalkan agar AI berperan sebagai konselor kesehatan mental yang hangat, suportif, dan menggunakan bahasa Indonesia yang santai tapi profesional.

## Prasyarat

Pastikan Anda telah menginstal beberapa alat berikut sebelum menjalankan proyek ini:
- [Node.js](https://nodejs.org/) (Versi terbaru atau LTS)
- Akun Google dan **Gemini API Key** yang bisa didapatkan melalui [Google AI Studio](https://aistudio.google.com/).

## Instalasi & Menjalankan Aplikasi

1. **Clone Repository**  
   Buka terminal Anda dan clone repositori ini:
   ```bash
   git clone https://github.com/Symqin/gemini-ai-chatbot.git
   cd gemini-ai-chatbot
   ```

2. **Instal Dependencies**  
   Jalankan perintah berikut untuk menginstal semua *library* yang dibutuhkan:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment**  
   Buat file bernama `.env` di direktori utama project (sejajar dengan `package.json`). Tambahkan API Key Anda di dalamnya:
   ```env
   GEMINI_API_KEY=masukkan_api_key_gemini_anda_disini
   ```

4. **Jalankan Server**  
   Gunakan perintah berikut untuk menyalakan server lokal:
   ```bash
   npm start
   ```

5. **Buka Aplikasi**  
   Server akan berjalan secara otomatis. Buka browser Anda (Chrome/Safari/Edge) dan akses URL berikut untuk mulai berinteraksi dengan MindTree AI:
   **http://localhost:3000**

## API Endpoint Reference

Jika Anda ingin menguji API secara langsung (misal: menggunakan Postman atau diintegrasikan ke frontend lain), Anda bisa memanggil endpoint berikut:

### `POST /api/chat`
Endpoint ini menerima riwayat obrolan (*conversation history*) dan mengembalikan respons dari Gemini AI.

- **Headers:** `Content-Type: application/json`
- **Body Request (JSON):**
  Kirimkan *payload* array `conversation` dengan `role` (berupa `"user"` atau `"model"`) dan `text`.
  ```json
  {
    "conversation": [
      { "role": "user", "text": "Saya sedang merasa sangat cemas hari ini." }
    ]
  }
  ```

- **Contoh Response Sukses (200 OK):**
  ```json
  {
    "result": "Halo. Saya mengerti bahwa kecemasan bisa sangat membebani..."
  }
  ```

---
*Dibuat untuk mendukung kesehatan mental yang lebih baik.*
