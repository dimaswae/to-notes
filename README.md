# ToNotes

**ToNotes** adalah aplikasi web sederhana yang menggabungkan fitur **To-Do List** dan **Notes** dalam satu interface.  
aplikasi ini bertujuan membantu pengelolaan tugas dan pencatatan secara efektif dan intuitif.

still under development

---

## 🔍 Fitur

- Tambah dan hapus *To-Do* (task)  
- Tandai *To-Do* sebagai selesai (mark done)  
- Tambah dan hapus *Notes* (judul + konten catatan)  
- Navigasi antar bagian *To-Do* dan *Notes* menggunakan tombol/tab  
- Data disimpan di **localStorage**, sehingga data tetap aman saat refresh halaman  
- Tema warna lengkap: biru laut + nuansa pastel  
- Responsif dan ringan agar bisa berjalan di perangkat mobile maupun desktop  

---

## 📂 Struktur Proyek
to-notes/
│── index.html
│── style.css
│── script.js
│── granite.js # skrip tambahan untuk penggunaan IBM Granite via Replicate
│── package.json
│── package-lock.json
│── .gitignore
│── README.md


Deskripsi file:

- **index.html** → tampilan utama aplikasi; navigasi dan wadah untuk To-Do & Notes  
- **style.css** → style / desain UI, warna, layout, responsive styling  
- **script.js** → logika aplikasi (toggle antara To-Do/Notes, operasi CRUD)  
- **granite.js** → skrip opsional untuk generate kode dengan IBM Granite (via Replicate API)  
- **.gitignore** → file agar beberapa file/folder yang tidak perlu tidak ikut ke kontrol versi  
- **package.json / package-lock.json** → konfigurasi Node.js jika menggunakan npm, dependency untuk granite.js  
- **README.md** → dokumentasi proyek ini  

---

## 🛠️ Cara Menjalankan Proyek

1. Clone repositori ini:

   ```bash
   git clone https://github.com/dimaswae/to-notes.git
   cd to-notes
   
2. Buka file index.html di browser. Atau jika menggunakan VS Code, bisa pakai extension Live Server agar mudah dilihat live dan otomatis refresh


## 🔮 Rencana Pengembangan

- Menambahkan fitur edit untuk Notes & To-Do
- Menambah fitur search / filter untuk Notes & To-Do
- Menambah kategori/tag untuk catatan agar lebih terorganisir
- Implementasi dark mode agar tampilan lebih nyaman di kondisi low-light
- Menambah validasi dan UI feedback (misalnya: alert / snackbar saat berhasil / gagal)

## 📋 Lisensi

Lisensi: MIT
(Free to use, modify, distribute. Sertakan atribusi jika dibagikan kembali.)

## 🧠 AI / IBM Granite Support

Proyek ini mendukung integrasi dengan IBM Granite Instruct model (via Replicate) untuk:
- generate boilerplate HTML/CSS/JS
- bantu refactor atau optimasi kode jika dibutuhkan
- membuat dokumentasi atau README tambahan
- eksperimen fitur baru lewat prompt AI

Jika kamu menggunakan granite.js, pastikan API key aman, dan perhatikan model-nya tersedia di Replicate.
