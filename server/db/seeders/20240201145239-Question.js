"use strict";
// const hero = require("../models/hero");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questions = [
      {
        //что? где ? когда?
        text: "На железных дорогах Японии эту работу выполняют «толкатели». Чем они занимаются?",
        answer: "запихивают людей в вагоны",
        img: "https://kulturologia.ru/files/u17975/tokyo-subway.jpg",
        points: 200,
        theme_id: 1,
      },
      {
        text: "В Юго‑Восточной Азии только эта страна никогда не была ничьей колонией. Недаром её название переводится как «Страна свободных». Назовите её.",
        answer: "тайланд",
        img: "https://pro-agent.kz/userfiles/upload/country/thailand/tailand.jpg",
        points: 400,
        theme_id: 1,
      },
      {
        text: "В акваторию Чёрного моря эти моллюски пришли из Средиземного и Азовского морей. В позапрошлом веке ими не брезговали лишь аджарские бедняки, ныне этот продукт — деликатес. Назовите его.",
        answer: "мидии",
        img: "https://anapacity.com/content/images/midii-chernogo-morya-5.jpg",
        points: 600,
        theme_id: 1,
      },
      {
        text: "Футболистам‑хулиганам судья показывает жёлтую карточку, недисциплинированным игрокам в хоккей на траве — карточку такого цвета. Какого?",
        answer: "зеленого",
        img: "https://img5tv.cdnvideo.ru/webp/shared/files/202306/1_1720501.jpg",
        points: 800,
        theme_id: 1,
      },
      {
        text: "Самые северные памятники Ленину установлены в посёлках Пирамида и Баренцбург. На каком архипелаге они расположены?",
        answer: "шпицберген",
        img: "https://globusturspb.ru/resources/images/mal-lednik.jpg",
        points: 1000,
        theme_id: 1,
      },
      {
        //КАВЕРЗНЫЕ ВОПРОСЫ
        text: "Закончите, пожалуйста, японскую поговорку: „Хороший муж всегда здоров, и его...",
        answer: "нет дома",
        img: "https://wl-adme.cf.tsp.li/resize/728x/webp/234/bad/216df35eaeaa579449e1376237.jpg.webp",
        points: 200,
        theme_id: 2,
      },
      {
        text: "Отгадайте загадку застойных времен: Длинная, зеленая, колбасой пахнет...",
        answer: "электричка из Москвы",
        img: "https://wl-adme.cf.tsp.li/resize/728x/webp/551/fe8/45c58e5e2e98d854648d924967.jpg.webp",
        points: 400,
        theme_id: 2,
      },
      {
        text: "Эти палочки из пластика, вносящие немалый вклад в загрязнение океана, с нынешнего года в Евросоюзе под запретом.",
        answer: "ватные палочки",
        img: "https://wl-adme.cf.tsp.li/resize/728x/webp/8b0/dd9/2dba595d63958b01b609bc6eda.jpg.webp",
        points: 600,
        theme_id: 2,
      },
      {
        text: "Гарвардские ученые, проведя исследование на мышах, доказали, что стресс действительно может вызвать этот эффект.",
        answer: "седина",
        img: "https://wl-adme.cf.tsp.li/resize/728x/webp/9cc/50c/6b363c596aadbdfd3249861ac2.jpg.webp",
        points: 800,
        theme_id: 2,
      },
      {
        text: "Кровососов среди насекомых много, а вот бабочки семейства эребид пьют именно эту жидкость у птиц, оленей и даже крокодилов.",
        answer: "слезы",
        img: "https://wl-adme.cf.tsp.li/resize/728x/webp/87c/be0/94cbd15151a9b79a6982f31c94.jpg.webp",
        points: 1000,
        theme_id: 2,
      },
      {
        // следующая тема ТЕЛЕВИКТОРИНА
        text: "Вопрос из игры «Поле чудес»: что использовали в Китае для глажки белья вместо утюга?",
        answer: "сковороду",
        img: "https://dropi.ru/img/uploads/test/2019-04-02/93166d2c583207773668dc3300a23ad7.webp",
        points: 200,
        theme_id: 3,
      },
      {
        text: "Вопрос игры «Что? Где? Когда?»: какой персонаж детских книг побывал в городе с названием Акапулько? Подсказка: вспомните, как переводится это название.",
        answer: "незнайка",
        img: "https://dropi.ru/img/uploads/test/2019-04-02/246473297d83305205305da6768132d3.webp",
        points: 400,
        theme_id: 3,
      },
      {
        text: "Вопрос из игры «Поле чудес»: в качестве какого мастера знали Менделеева его соседи по улице?",
        answer: "мастер по изготовлению чемоданов",
        img: "https://dropi.ru/img/uploads/test/2019-04-02/e3eed8cd938fc519cd017b7b6902b9df.webp",
        points: 600,
        theme_id: 3,
      },
      {
        text: "Ответьте на вопрос телеигры «Своя игра»: мини-як – порода какого домашнего животного?",
        answer: "морская свинка",
        img: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/svoya-igra10.jpg",
        points: 800,
        theme_id: 3,
      },
      {
        text: "Сложный вопрос игры «Что? Где? Когда»: этот прибор был создан в США в начале 20-х годов, а в 60-е годы объем продаж резко возрос. О чем идет речь?",
        answer: "фен",
        img: "https://dropi.ru/img/uploads/test/2019-04-02/589dcb675b3ca15a69ffe6935175ab5b.webp",
        points: 1000,
        theme_id: 3,
      },
      {
        // тема  Единственные в Мире Государства
        text: "Назовите единственное в мире государство, в котором латинский язык является официальным.",
        answer: "ватикан",
        img: "https://wikiway.com//upload/iblock/65a/Vatikan.jpg",
        points: 200,
        theme_id: 4,
      },
      {
        text: "Назовите единственное в мире государство, названное в честь пустыни.",
        answer: "намибия",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/5352530/pub_6295b57d00cde16d53d0f5f5_6295b7b8b6c7c7598416a2ed/scale_1200",
        points: 400,
        theme_id: 4,
      },
      {
        text: "Назовите единственное в мире государство, которое пересекает тропик Козерога и экватор.",
        answer: "бразилия",
        img: "https://www.erv.ru/upload/medialibrary/5d5/9jmf2t39smsg3xdx76ngymx0tgqf1olx/shutterstock_190431911.jpg",
        points: 600,
        theme_id: 4,
      },
      {
        text: "Назовите единственное в мире государство, чьей официальной религией, «духовным наследием» провозглашен тантрический буддизм.",
        answer: "бутан",
        img: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/%20Bhutan.jpg",
        points: 800,
        theme_id: 4,
      },
      {
        text: "Назовите единственное в мире государство, расположенное сразу в двух парах полушарий Земли: Северном, Южном, Западном и Восточном.",
        answer: "кирибати",
        img: "https://www.krugosvet.ru/sites/krugosvet.ru/files/img08/1008598_fg_kirib.gif",
        points: 1000,
        theme_id: 4,
      },
      {
        // тема ОСТРОУМНЫЕ ВОПРОСЫ
        text: "Это самая крупная клетка живого организма, употребляемая человеком в пищу.",
        answer: "яйцо",
        img: "https://ic.pics.livejournal.com/road_movie/67282882/695406/695406_1000.jpg",
        points: 200,
        theme_id: 5,
      },
      {
        text: "Его составляют 4 зверя, 1 ракообразное, 1 паукообразное, 1 прибор, 1 женщина, 4 мужчины и несколько рыб.",
        answer: "зодиак",
        img: "https://img.freepik.com/free-vector/zodiac-circle-with-horoscope-signs-fish-pisces-scorpio-aquarius-zodiak-aries-virgo-vector-illustration_1284-46992.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699056000&semt=ais",
        points: 400,
        theme_id: 5,
      },
      {
        text: "Это самая яркая звезда, наблюдаемая в небе над Россией зимой",
        answer: "солнце",
        img: "https://www.eprussia.ru/upload/iblock/e40/e40708675683acb0fbad88214447a16a.jpg",
        points: 600,
        theme_id: 5,
      },
      {
        text: "Так назывался ящик, в который во времена царя Алексея Михайловича складывали жалобы на злоупотребления чиновников.",
        answer: "долгий ящик",
        img: "https://sun9-32.userapi.com/impg/MZH1lr9nBVV8Yr7aWfauAZqYKLXzZyN5Js5sPg/-HKqcPc01bc.jpg?size=578x567&quality=96&sign=772774884fab05aa52c8554d282f0e2b&type=album",
        points: 800,
        theme_id: 5,
      },
      {
        text: "Некогда считалось, что инфекция от обладателя этой болезни передается по воздуху на обльшое расстояние, поэтому болезнь называли...",
        answer: "ветрянка",
        img: "https://i.ytimg.com/vi/mXo8K8zQ_gw/maxresdefault.jpg",
        points: 1000,
        theme_id: 5,
      },
      {
        //тема УГАДАЙ МЕЛОДИЮ
        text: "Хорошо с тобой да плохо без тебя...",
        answer: "кукушка",
        img: "https://ns-static.s3.us-east-va.perf.cloud.ovh.us/img/categories/styles/rock_1600x900.jpg",
        points: 200,
        theme_id: 6,
      },
      {
        text: "А у этой известной песни? Кружит Земля, как в детстве карусель",
        answer: "ветер перемен",
        img: "https://aif-s3.aif.ru/images/026/901/724ecfaf4ba73e23e8db34068ed8bd08.JPG",
        points: 400,
        theme_id: 6,
      },
      {
        text: "Знаете название? У каждого из нас на свете есть места…",
        answer: "чистые пруды",
        img: "https://aif-s3.aif.ru/images/026/901/a48cec7761e8d3f9ad470b75713de505.JPG",
        points: 600,
        theme_id: 6,
      },
      {
        text: "А эта песня называется, конечно... Водил меня Серега на выставку Ван Гога",
        answer: "экспонат",
        img: "https://aif-s3.aif.ru/images/026/901/5d4460d86d62959324e7ce73dc270f07.JPG",
        points: 800,
        theme_id: 6,
      },
      {
        text: "Справитесь с этой? Звук поставим на всю…",
        answer: "юность",
        img: "https://www.ixbt.com/img/n1/news/2023/2/4/ixbtmedia_music_without_words_0e62e1c5-037a-4e21-ae22-1800300549b3_large.png",
        points: 1000,
        theme_id: 6,
      },
    ];

    const result = questions.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Questions", result);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};
