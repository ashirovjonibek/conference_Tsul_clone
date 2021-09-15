let dataStatic=[
    {
        "id": "homeNav",
        "uz":"Bosh sahifa",
        "ru": "Главная страница",
        "en": "Home"
    },
    {
        "id": "aboutNav",
        "uz":"Biz haqimizda",
        "ru": "O нас",
        "en": "About"
    },
    {
        "id": "speakerNav",
        "uz":"Nutq so'zlovchilar",
        "ru": "Оратор",
        "en": "Speakers"
    },
    {
        "id": "scheduleNav",
        "uz":"Jadval",
        "ru": "Расписание",
        "en": "Schedule"
    },
    {
        "id": "venueNav",
        "uz":"Manzil",
        "ru": "Адрес",
        "en": "Venue"
    },
    {
        "id": "galleryNav",
        "uz":"Galereya",
        "ru": "Галерея",
        "en": "Gallery"
    },
    {
        "id": "contactNav",
        "uz":"Bog'lanish",
        "ru": "Kонтакт",
        "en": "Contact"
    },
    {
        "id": "holidayBigtext",
        "uz":"Toshkent davlat yuridik universiteti ",
        "ru": "30 лет Ташкентский государственный юридический университет",
        "en": "Tashkent State University of Law is 30 years old"
    },
    {
        "id": "holidayDate",
        "uz":"16-17 Sentyabr, Hyatt mehmonhonasi, Toshkent",
        "ru": "16-17 сентября, Гостиница Hyatt, Ташкент",
        "en": "16-17 September, Hyatt Regency, Tashkent"
    },
    {
        "id": "aboutTheEvent",
        "uz":"Marosim haqida",
        "ru": "О церемонии",
        "en": "About The Event"
    },
    {
        "id": "aboutTheEvent2",
        "uz":"Marosim haqida",
        "ru": "О церемонии",
        "en": "About The Event"
    },
    {
        "id": "eventInfo",
        "uz":"Toshkent Davlat Yuridik Universitetining 30 yoshiga bag'ishlangan marosim.",
        "ru": "Церемония, посвященная 30-летию Ташкентского государственного юридического университета.",
        "en": "Ceremony dedicated to the 30th anniversary of Tashkent State Law University."
    },
    {
        "id": "where",
        "uz":"Marosim o'tkaziladigan joy",
        "ru": "Место проведения церемонии",
        "en": "where"
    },
    {
        "id": "1",
        "uz":"Hyatt mehmonhonasi, Toshkent",
        "ru": "Гостиница Hyatt, Ташкент",
        "en": "Hyatt Regency, Tashkent"
    },
    {
        "id": "2",
        "uz":"Hyatt mehmonhonasi, Toshkent",
        "ru": "Гостиница Hyatt, Ташкент",
        "en": "Hyatt Regency, Tashkent"
    },
    {
        "id": "3",
        "uz":"Hyatt mehmonhonasi, Toshkent",
        "ru": "Гостиница Hyatt, Ташкент",
        "en": "Hyatt Regency, Tashkent"
    },
];
function staticWords(lang) {
    dataStatic.map((item) => {
        $("#" + item.id).text(item[lang])
    });
}
