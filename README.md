## ODEV

### Onemli hatirlatma
1. Odevde kod yazmaniz gereken tek dosya odev.js dosyasi, diger dosyalara dokunmayalim.
2. odev.js dosyasi icinde window.mockApiUrl degerini kendi urlinizle degistirin.
Mock api olusturabileceginiz clone linki: https://mockapi.io/clone/5ff193d0db1158001748b15f


## Tasks
1. odev.js dosyasinda bulunan removePet fonksiyonu id parametresi almakta,
aldigi idye sahip olan peti DELETE istegi atarak mockapi atarfindan silelim.
silme basarili olduktan sonra degisikligi gorebilmek icin javascript ile sayfa yenileme islemi yapalim.
- silinen pet elemanini ayrica sayfadan silmenize gerek yok.

2. odev.js dosyasinda bulunan openPetDetail fonksiyonu id parametresi aliyor,
aligi idye sahip olan peti GET istegi atarak mockapi atarfindan getirelim,
getirdigimiz datayi bootstrap modal kullanarak gosterelim.
- atilan istek sadece o idye sahip olan peti getirmeli
- bootstrap modal dokumantasyonu: https://getbootstrap.com/docs/5.0/components/modal/