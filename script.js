document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 تم تحميل السكريبت!");

    // الحصول على العناصر من الـ HTML
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");
    const filters = document.querySelectorAll(".filter");
    const placesList = document.getElementById("places-list");
    const resetButton = document.getElementById("reset-btn");

    // قائمة الأماكن مع التفاصيل مثل الفئة والصورة
    const places = [
        { name: "The Walk  مجمع ذا ووك", category: "shopping", image: "https://b.top4top.io/p_3388xlab51.png" },
        { name: "The assima Mall مجمع العاصمه", category: "shopping", image: "https://a.top4top.io/p_3367byr431.jpg" },
        { name: "Avenues Mall الافنيوز", category: "shopping", image: "https://d.top4top.io/p_3354b51dl1.jpg" }, 
        { name: "Al Hamra Mall مجمع برج الحمرا ", category: "shopping", image: "https://i.top4top.io/p_33676o1kb1.jpg" },
        { name: "Marina Mallمجمع مرينا ", category: "shopping", image: "https://a.top4top.io/p_3367najhi1.jpg" },       
        { name: "Andalus Mall مجمع الاندلس ", category: "shopping", image: "https://f.top4top.io/p_3367qu4mu1.jpg" },
        { name: "The Gate Mall مجمع ذا جيت ", category: "shopping", image: "https://d.top4top.io/p_3367ob6v91.jpg" },        
        { name: "360 Mall ", category: "shopping", image: "https://i.top4top.io/p_3367ndo0c1.jpg" },

        { name: "starbucks Coffee ستاربكس", category: "cafe", image: "https://a.top4top.io/p_33884g7c12.png" },
        { name: " ΔRΔBICΔ ارابيكا ", category: "cafe", image: "https://b.top4top.io/p_3388sgy9k3.png" },
        { name: " caribou كاريبو ", category: "cafe", image: "https://g.top4top.io/p_3388hzsqc1.jpg" },
        { name: " pick yo بك يو", category: "cafe", image: "https://c.top4top.io/p_3388w3ghg4.png" },
        { name: " Toby’s Estate توبيز ", category: "cafe", image: "https://a.top4top.io/p_3367z8w881.jpg" },
        { name: " Bartone بارتون", category: "cafe", image: "https://j.top4top.io/p_3388zrq552.png"},
        { name: " vol.1 فوليوم", category: "cafe", image: "https://i.top4top.io/p_3388hssrb1.png"},
        { name: " CAFF كاف" , category: "cafe", image: "https://e.top4top.io/p_33886ki9s1.jpg"},

        { name: "Le Notre مطعم لو نوتر", category: "restaurant", image: "https://l.top4top.io/p_3368aqg131.png" },
        { name: "Freej Swaileh مطعم فريج صويلح", category: "restaurant", image: "https://j.top4top.io/p_3368g45ga1.png" },
        { name: " Mais Alghanim مطعم ميس الغانم", category: "restaurant", image: " https://i.top4top.io/p_3368twdgi1.png" },
        { name: " Babel مطعم بابل", category: "restaurant", image: " https://k.top4top.io/p_3368kyvjc1.jpeg" },
        { name: "Ora Blu مطعم أورا بلو", category: "restaurant", image: " https://a.top4top.io/p_3368wz83n1.jpeg" },
        { name: "Winter Wonderlandونتر وندرلاند ", category: "festival", image: "https://b.top4top.io/p_334716em72.jpg" },
        { name: "caboria مطعم كابوريا", category: "restaurant", image: "https://g.top4top.io/p_3388hzsqc1.jpg" },
        { name: "Title مطعم تايتل", category: "restaurant", image: "https://g.top4top.io/p_3395uwiqx1.png" },

        { name: "eventat Kuwait", category: "event", image: "https://h.top4top.io/p_3394nqy951.png" },
        { name: "The Arena Kuwait", category: "event", image: "https://e.top4top.io/p_3394ag9ga1.png" },
        { name: "list Kuwait", category: "event", image: "https://l.top4top.io/p_3394v6dmh1.jpg" },
        { name: "Visit Kuwait", category: "event", image: "https://b.top4top.io/p_33945tkyj1.jpg" },

        { name: "Cinescape Cinemaسنسكيب", category: "cinema", image: "https://c.top4top.io/p_33476cu8a1.jpg" },
        { name: "vox cinema فوكس سينما  ", category: "cinema", image: "https://j.top4top.io/p_33540mchj1.jpg" }, 
        { name: "Grand Cinemaجراند ", category: "cinema", image: "https://j.top4top.io/p_33954nw2h2.jpg" },
        { name: "Sky cinema سكاي", category: "cinema", image: "https://e.top4top.io/p_3395823uy2.jpg" },
        { name: "Ozone cinema اوزون", category: "cinema", image: "https://i.top4top.io/p_33952v0ns1.jpg" }, 





       ];



      
      
       function displayPlaces(filteredPlaces) {
        placesList.innerHTML = "";
    
        if (filteredPlaces.length === 0) {
            placesList.innerHTML = `
                <div style="background:#ffe5e5; color:#b30000; padding:10px; border:1px solid #ff0000; border-radius:5px; margin-top:10px;">
                    ⚠️ لا توجد أماكن مطابقة!
                </div>
            `;
            return;
        }
    
        filteredPlaces.forEach(place => {
            const placeElement = document.createElement("div");
            placeElement.classList.add("place");
            placeElement.innerHTML = `
                <img src="${place.image}" alt="${place.name}">
                <h3>${place.name}</h3>
            `;

            placeElement.addEventListener("click", function () {
                if (place.name.includes("Avenues")) {
                    window.location.href = "avenues.html";
                } else if (place.name.includes("360 Mall")) {
                    window.location.href = "360.html";
                } else if (place.name.includes("The assima Mall")) {
                    window.location.href = "The assima Mall.html";
                } else if (place.name.includes("Al Hamra Mall")) {
                    window.location.href = "Al Hamra Mall.html";
                } else if (place.name.includes("Marina Mall")) {
                    window.location.href = "Marina Mall.html";
                } else if (place.name.includes("Andalus Mall")) {
                    window.location.href = "Andalus Mall.html";        
                } else if (place.name.includes("The Gate Mall")) {
                    window.location.href = "The Gate Mall.html";
                } else if (place.name.includes("The Walk")) {
                    window.location.href = "The Walk.html";

                } else if (place.name.includes("Bartone")) {
                    window.location.href = "Bartone.html";
                } else if (place.name.includes("pick yo")) {
                    window.location.href = "pick yo.html";
                } else if (place.name.includes("Toby’s Estate")) {
                    window.location.href = "Toby’s Estate.html";
                } else if (place.name.includes("vol.1")) {
                    window.location.href = "vol.1.html";
                } else if (place.name.includes("starbucks")) {
                    window.location.href = "starbucks.html";
                } else if (place.name.includes("ΔRΔBICΔ")) {
                    window.location.href = "ΔRΔBICΔ.html";
                } else if (place.name.includes("CAFF")) {
                     window.location.href = "CAFF.html";
                } else if (place.name.includes("caribou ")) {
                    window.location.href = "caribou.html";
                
                    
                } else if (place.name.includes("Le Notre")) {
                    window.location.href = "Le Notre.html";
                } else if (place.name.includes("Freej Swaileh")) {
                    window.location.href = "Freej Swaileh.html";
                } else if (place.name.includes("Mais Alghanim")) {
                    window.location.href = "Mais Alghanim.html";
                } else if (place.name.includes("Babel")) {
                    window.location.href = "Babel.html";
                } else if (place.name.includes("Ora Blu")) {
                    window.location.href = "Ora Blu.html";
                } else if (place.name.includes("Title")) {
                    window.location.href = "Title.html";                    
                } else if (place.name.includes("caboria")) {
                        window.location.href = "caboria.html";
                    } else if (place.name.includes("Winter Wonderland")) {
                        window.location.href = "Winter Wonderland.html";
                                
                    } else if (place.name.includes("eventat Kuwait")) {
                        window.location.href = "eventat Kuwait.html";
                    } else if (place.name.includes("The Arena Kuwait")) {
                        window.location.href = "The Arena Kuwait.html";
                    } else if (place.name.includes("list Kuwait")) {
                        window.location.href = "list Kuwait.html";
                    } else if (place.name.includes("Visit Kuwait")) {
                        window.location.href = "Visit Kuwait.html";


                    } else if (place.name.includes("Cinescape Cinema")) {
                        window.location.href = "Cinescape Cinema.html";
                    } else if (place.name.includes("vox cinema")) {
                        window.location.href = "vox cinema.html";
                    } else if (place.name.includes("Grand Cinema")) {
                        window.location.href = "Grand Cinema.html";
                    } else if (place.name.includes("Sky cinema")) {
                        window.location.href = "Sky cinema.html";
                    } else if (place.name.includes("Ozone cinema")) {
                        window.location.href = "Ozone cinema.html";


                } else {
                    const url = `details.html?name=${encodeURIComponent(place.name)}&image=${encodeURIComponent(place.image)}&location=${encodeURIComponent(place.address || '')}&contact=${encodeURIComponent(place.phone || '')}&description=${encodeURIComponent(place.description || '')}&map=${encodeURIComponent(place.map || '')}`;
                    window.location.href = url;
                }
            });

            placesList.appendChild(placeElement);
        });
    }


    // البحث عند الضغط على زر البحث
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchTerm));
        displayPlaces(filteredPlaces);
        resetButton.style.display = "block";
    });

    // البحث عند الضغط على Enter في مربع الإدخال
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchButton.click(); // يحاكي ضغط الزر
        }
    });

    // التصفية عند الضغط على زر الفلتر (مطاعم، مقاهي، إلخ)
    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            filters.forEach(btn => btn.classList.remove("active")); // إزالة التفعيل من جميع الأزرار
            this.classList.add("active"); // تفعيل الزر الحالي

            const category = this.getAttribute("data-category");
            const filteredPlaces = places.filter(place => place.category === category);
            displayPlaces(filteredPlaces);
            resetButton.style.display = "block";
        });
    });

    // زر إعادة التصفية يعيد إظهار كل الأماكن ويزيل التفعيل من الفلاتر
    resetButton.addEventListener("click", function () {
        displayPlaces(places);
        filters.forEach(btn => btn.classList.remove("active"));
        resetButton.style.display = "none";
    });

    // عرض جميع الأماكن عند بداية تشغيل الصفحة
    displayPlaces(places);
});






