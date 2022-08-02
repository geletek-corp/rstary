/*
    Geletek 2022
    
    Dosya: rstary.js
    
    Açıklama:
        R*Y oyun motorunun ana kütüphanesi
    
    Yapımcı: Muhammed Ali Korkmaz
*/

var VERSION = '0.0.1';

console.log('R*Y Game Engine version ' + VERSION);

var gameCanvas = document.getElementById('r_star_y_cvs');

/*
    tuvalin büyüklüğünü sayfa büyüklüğüne göre ayarla
*/
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight - 5;

/*
    tuvale çizim yapmak için bağlamını alıyoruz
    oyun 2 boyutlu olacağı için parametre olarak
    2d veriyoruz
*/
var context = gameCanvas.getContext('2d');

/*
    Bu sınıf oyun bilgilerini taşır
    oyun adı, çizim fonksiyonu, güncelleme fonksiyonu ve fps
*/
class Game {
    constructor(gameName, render, update, FPS) {
        this.gameName = gameName;
        
        /*
            Çizim ve güncelleme fonksiyonunu durmadan çalıştır
        */
        setInterval(render, 1000/FPS);
        setInterval(update, 1000/60);
        
        /*
            Genişlik ve yükseklik
        */
        this.genişlik = gameCanvas.width;
        this.yükseklik = gameCanvas.height;
    }
}

/*
    Bu obje r*y oyun motorunun fizik, ses, görüntü
    ve giriş motorlarını içinde barındırır
*/
class rStarYClass {
    constructor() {
        this.Görüntü = new rStarYDisplay();
        
        console.log('rStarY class loaded');
    }
}

/*
    Bu sınıf r*y oyun motorunun
    görüntü fonksiyonlarını taşır
*/
class rStarYDisplay {
    constructor() {
        console.log('R*Y Display engine loaded');
    }
    
    /*
        Bu fonksiyon verilen parametrelere göre ekrana içi dolu bir dörtgen çizer
    */
    DoluDörtgenÇiz(x, y, w, h, c) {
        /*
            Rengi ayarlıyoruz
        */
        context.fillStyle = c;
        
        /*
            Dörtgeni çiz
        */
        context.fillRect(x, y, w, h);
    }
    
    /*
        Bu fonksiyon verilen parametrelere göre ekrana içi boş bir dörtgen çizer
    */
    BoşDörtgenÇiz(x, y, w, h, lw, c) {
        /*
            Rengi ayarlıyoruz
        */
        context.strokeStyle = c;
        
        /*
            Kenar kalınlığı
        */
        context.lineWidth = lw;
        
        /*
            Dörtgeni çiz
        */
        context.strokeRect(x, y, w, h);
    }
    
    DaireÇiz(x, y, r, c) {
        /*
            Rengi ayarlıyoruz
        */
        context.fillStyle = c;
        
        /*
            Daireyi çiziyoruz
        */
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, false);
        
        /*
            İçini dolduruyoruz
        */
        context.fill();
    }
    
    ÇemberÇiz(x, y, r, w, c) {
        /*
            Rengi ayarlıyoruz
        */
        context.strokeStyle = c;
        
        /*
            Kenar kalınlığı
        */
        context.lineWidth = w;
        
        /*
            Çemberi çiziyoruz
        */
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI, 10);
        
        context.stroke();
    }
    
    YazıYaz(t, x, y, c, f) {
        /*
            Rengi ayarlıyoruz
        */
        context.fillStyle = c;
        
        /*
            Fontu ayarla
        */
        context.font = f;
        
        /*
            Yazıyı yaz
        */
        context.fillText(t, x, y);
    }
    
    GörüntüÇiz(src, dx, dy, w, h) {
        /*
            Görüntü objesini oluştur
        */
        var img = new Image();
        
        img.src = src;
        
        context.drawImage(img, dx, dy, w, h);
    }
}

var rStarY = new rStarYClass();