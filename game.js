/*
    Geletek 2022
    
    Dosya: game.js
    
    Açıklama:
        R*Y oyun motorunun deneme oyunu
    
    Yapımcı: Muhammed Ali Korkmaz
*/

function render() {
    rStarY.Görüntü.DoluDörtgenÇiz(0, 0, game.genişlik, game.yükseklik, '#000000');
    rStarY.Görüntü.BoşDörtgenÇiz(10, 10, 100, 100, 30, '#00ff00');
    rStarY.Görüntü.DaireÇiz(10, 10, 10, '#ff0000');
    rStarY.Görüntü.ÇemberÇiz(200, 200, 100, 10, '#00ffff');
    rStarY.Görüntü.YazıYaz('merhaba', 100, 100, '#ff00ff', '48px sans-serif');
    rStarY.Görüntü.GörüntüÇiz('image.png', 50, 50, 100, 100);
}

function update() {
    
}

const game = new Game('PONG', render, update, 60);