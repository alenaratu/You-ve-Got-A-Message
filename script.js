const messages = {
    "orchid": "Hi Zafi! Cheers to your graduation and the new journey ahead, di Mene UNPAD dan semoga kamuu up tiktok terus hehe",
    "hibiscus": "Hi Nana! Semoga di tanggal 28 Mei nanti kamu officially jadi anak FK yaa dan semoga perjalanan kamu kedepannya dipenuhi hal-hal baik :)",
    "lily27": "Hi Sam! First of all terima kasihhh banyakk karena kamu sering nganterin aku sama temen-temen yang lain. Semoga di tanggal 28 Mei kamu officially jadi anak FK yaa dan semogaa kamu bahagia selaluu",
    "tulip": "Hi Rel, my fellow sukabumi peeps :) terima kasihh ya aurel udahh jadii first chairmate akuu, semoga tanggal 28 nantii kamu bisa langsung menjemput jakun yang ada makara merahnya dan semogaa kamu bahagia selaluu",
    "whiterose": "Hi Kesin! Semoga tanggal 28 Mei nanti kamu udah jadii maba psikologi UI yaa dan semogaa perjalanan kamuu kedepannya dipenuhi hal-hal baik. Terima kasihh jugaa udahh bikin MPLS yang kerenn bangett dan memorable bangett bagi aku dan yang lain",
    "lily30": "Hi Khemii! Thank youu udah jadii temen seperjuangan di SMP-SMA dan soon ITB (AAAA TKT DAN EXCITED GASIHH). Pokoknyaa semogaa perjalanan lu kedepannya dipenuhii hal-hal baikk dan dapet jurusan aktuaria yaa!",
    "sunflower": "Hi Lodi! Thank youu udahh menjadii chairmate gua selama 2 tahun inii dan terima kasihh udah melatih mental gua dengan sangat baik 😊 Semoga di tanggal 28 Mei lu dapet kabar baik dan jadii bagian darii SINGA MUDA TEKNIK UI!!!!",
    "peony": "Hi Bellaa! Terima kasihh yaa udahh mulai sering on lagi di grup dan mauu jadii temen baru aku di SMA. Semogaa tanggal 28 Mei nanti kamu officially jadi anak FKG yaaa dan semoga kamuu bahagia selaluu!",
    "lilyp": "Hi putrii! Semoga tanggal 28 Mei nanti kamu dapet kabari baikk dan menjadiii maba FK yayyy. Terima kasihh yaa udah mau menjadii teman akuu, semoga kamu bahagia selalu dan langgeng sama bagass!",
    "lavender": "Hi Azwa! Terima kasihh udah isengin gua teruss dan membuat gua menjadi orang yang lebih waspada 😒, semoga tanggal 28 Mei nanti kamu lolos di pilihan 1 yaa azwa dan semoga kamu isengnya berkurang #peaceandlove",
    "dindeng": "Hi Sultan! Thank you udah ngikutin ke nangor aku jadi ada temennya nihh, good luck yaa din di farmasi dan semogaa kita wujudkan brand skincare itu di masa depann. Anyway kostan gua selalu terbuka kaloo lu butuh temann 😎",
    "poltekim2025": "HI JOLIE TEMANKU DARI SD!!! Jol funfact FI aku ke kamu waktu kelas 3 SD adalah kunciran kamu lucu banget dan rambutnya panjang, so sad tahun ini or awal tahun depan BAKAL PENDEKK 💔. Tapii, hopefully proses kamu buat masuk poltekim dilancarkan yaa and don't forget to be happy!!",
    "polwan2025": "Hi nabilaa! Terima kasihh sudah menjadi partner sekre gua yaa, semogaa proses lu untuk menjadi polwan dilancarkan dan menjadi polisi yang amanah di masa depann 😀, semangatt yaa bil dan jangan lupa undang sholehah di pelantikan lu 😉",
    "easteregg": "Hi Esther! Terima kasihh esther udah banyak berjasa di Z-One, walaupun ternyata lu salah satu komplotan yang bully gua 😿. Semoga lu cepat ter deinfluence dan kembali benar dann semoga tanggal 28 Mei nanti lu bisa lolos pilihan 1 yaaa!",
    "londongirl": "Hi nicill! Thank youuu nicil sudahh menjadii teman baruu akuu darii kelas 11-12, semogaa kamuu bisa dapet scholarships atau grants dan UI jugaaa di tanggal 28 Mei nanti. Good luck for everything nicil and don't forget to be happy!",
    "kayumanis": "Hi tayaa! Terima kasihh yaa udahh menjadii teman ku yang setiaa dan baik di saat yang lainn membully. Walaupun, ternyata ada sisi lain dari diri kamu yang 😲 yaa. TAPII yang aku amaze adalahh kamu pinter bangett tayy dan hardworking, semoga di tanggal 28 Mei nantii kamuu bisa jadi maba TEKPANG IPB YAA!",
    "BORAHAE": "Hi kim naya! Terima kasihh nayaa udahh nemeninn akuu dan kadang aku intilin HAHAHA. Kamu ituu baikk bgtt dann jarang marah?? aku juga baruu tauu ada orang yaa se JIN ituu. Semoga di tanggal 28 Mei nanti kamu bisa lolos pilihan 1 yaa nay!",
    "55": "Hi Erika Sainz! Terima kasihh ya kung sudah menjadii partner kuliner sore sore di paslamm, semogaa semua hal yang lu coba kaya STAN dan UTBK diberikan hasil yang terbaikkk. Good luck erikung dan pls daftar jadi model sih kata gua 😉",
    "sekresejati": "Hi Sanayy! Terima kasihh yaa udahh jadi temen baru akuu di kelas 11-12 inii, gila nay gua selalu amaze kalo lu jadi sekre karena kayaa lu beneran seriuss dan segercep ituu. Selain itu, kamu jugaa gercep videoin momen di kelas 😀, semogaa di tanggal 28 Mei nanti kamu dapet hasill yang terbaik yaaa nayyy!",
  };
  
  function revealPassword() {
    document.getElementById("passwordBox").classList.remove("hidden");
    // Start music
  const music = document.getElementById("bg-music");
  if (music) music.play();
  }
  
  function showMessage() {
    const input = document.getElementById("passwordInput").value;
    const msgDiv = document.getElementById("message");
  
    if (messages[input]) {
      msgDiv.textContent = messages[input];
      msgDiv.classList.remove("hidden");
    } else {
      msgDiv.textContent = "Oops! That password doesn't match anyone I know 😢";
      msgDiv.classList.remove("hidden");
    }
  }
  