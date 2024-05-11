document.addEventListener('DOMContentLoaded', function() {
    // Profil Fotoğrafını Büyüt
    document.getElementById('about-img').addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });

    // İletişim Bilgilerini Göster/Gizle
    const contactInfo = document.getElementById('contact-info');
    document.getElementById('toggle-contact').addEventListener('click', function() {
        contactInfo.style.display = (contactInfo.style.display === 'none' ? 'block' : 'none');
    });

    // İlgi Alanlarına Göre İçerik Filtreleme
    document.querySelectorAll('#interests li').forEach(item => {
        item.addEventListener('click', function() {
            alert('İlgi alanı hakkında daha fazla bilgi yükleniyor: ' + this.textContent);
        });
    });

    // Sayfa Yüklenirken Animasyon
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 3000); // 3 saniye sonra yükleme animasyonunu gizle
    }

    // Sonraki Resim İçin Dinleyici
    const images = [
        { src: 'image1.jpg', alt: 'Ankara, ATG Girişim-23 Etkinliği', info: 'Ankara, ATG Girişim-23 Etkinliği' },
        { src: 'image2.jpg', alt: 'Ankara, Atakule', info: 'Ankara, Atakule' },
        { src: 'image3.jpg', alt: 'Ankara, Tesla', info: 'Ankara, Tesla' },
        { src: 'image4.jpg', alt: 'Ankara, ATO Congressium Verimlilik ve Teknoloji Fuarı', info: 'Ankara, ATO Congressium Verimlilik ve Teknoloji Fuarı' },
    ];
    let currentImageIndex = 0;
    document.getElementById('next-image').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const imageElement = document.getElementById('slider-image');
        const infoElement = document.getElementById('image-info');
        imageElement.src = images[currentImageIndex].src;
        imageElement.alt = images[currentImageIndex].alt;
        infoElement.textContent = images[currentImageIndex].info;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('header, section, footer, button').forEach(elem => {
            elem.classList.toggle('dark-mode');
        });
    });
});