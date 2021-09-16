let data = [
    {
        id: 1,
        img: "assets/img/speakers/1.jpg",
        name: {
            uz: "Q-Man Ban",
            ru: "Q-Man Ban",
            en: "Q-Man Ban"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>TA'LIM</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>2012 yil aprel. Ph.D  Dehli yuridik universiteti fakulteti, Hindiston. </p>\n" +
                "               <p> 2015 yil mart. Janubiy Koreya Prezidenti huzuridagi  Demokratik va tinch birlashish bo'yicha maslahat kengashi a'zosi.  I.C.C.R tomonidan qo'llab -quvvatlangan Hindiston hukumati stipendiyasi. </p>\n" +
                "               <p>2013 yil avgust. BMT tadqiqotlari. Bitiruv, IFUNA (Birlashgan Millatlar Tashkiloti va Hindiston Hukumati nazorati ostidagi institut) XVJ, Jahon banki, BMT Taraqqiyot dasturi, Birlashgan milliy tadqiqotlar inson huquqlari kengashi. \n</p>\n" +
                "               <p>2002 yil fevral, M.A. \"Ma'muriy huquq bo'yicha\" aniq printsip \"qonunining boshlig'i\", JanYanubiy Koreyaning XanYang universiteti huquq fakultetini tamomlagan\n</p>\n" +
                "               <p>1999 yil fevral, bakalavr, Su-Von universiteti yuridik fakultetini tamomlagan Janubiy Koreyadagi kafedra stipendiyasi. </p>\n" +
                // "              \n" +
                // "\n" +
                // "               <h2>EXPERIENCE</h2> \n" +
                // "               <h4>Research</h4>\n" +
                // "               <p>Jan. 2021~ Present The 2nd Project, participating as Researcher on India and England Law under Research Team on Regulation of Endocrine Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                // "                Participating as Researcher on India and England Law under Research Team on Regulation of Endocrine Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                // "              </p>\n" +
                // "               <p>May 2016 ~ Dec. 2020\n" +
                // "                Paricipating as Researcher on India and England Law under Research Team on Regulaation of Endocrien Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                // "              </p>\n" +
                // "               <p>Feb. 2014.               A Letter of Appointment fromIndia Insititue (Visiting Researcher) [App. 8]</p>\n" +
                // "               <h5>Doctoral thesis</h5>\n" +
                // "               <p>Apr. 2012 ~ 2014.  “A Comparative Study of Freedom of Inforamtion in  Republic of Korea and India ( focused on the Act on Right to Information)”, Faculty of Law Delhi University, New Delhi in India.</p> \n" +
                "              </div>            \n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>Образование</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Апрель 2012 г. Доктор философии, факультет права Делийского университета, Индия.\n</p>\n" +
                "               <p>Март 2015 г. Член Консультативного совета по демократическому и мирному воссоединению при президенте Южной Кореи. Стипендия правительства Индии при поддержке I.C.C.R. </p>\n" +
                "               <p>Август 2013. Исследования ООН. Выпускной, IFUNA (Институт под эгидой ООН и правительства Индии) МВФ, Всемирный банк, ПРООН, Объединенный национальный исследовательский совет по правам человека.\n</p>\n" +
                "               <p>Февраль 2002 г. «Инициатор Закона» о четком принципе «административного права», окончил юридический факультет Ханъянского университета, Южная Корея.\n</p>\n" +
                "               <p>Февраль 1999 года, бакалавр, юридический факультет, Южная Корея, Су-Вонский университет, юридический факультет. </p>\n" +
                // "               <p>INDIA Government) On IMF, World Bank, UNDP, Human Right Council of United National Studies. [App. 3] </p>\n" +
                // "               <p>Feb. 2002,  M.A.    “The Principal of law ‘Definite promise’ on Administrative law”,\n" +
                // "                Graduated Faculty of Law, University of HanYang in South Korea\n" +
                // "                </p>\n" +
                // "               <p>Feb. 1999,               Bachelor, Graduated Faculty of Law, University of Su-Won \n" +
                // "                Scholarship from Department in South Korea.\n" +
                // "                </p>\n" +
                // "              \n" +
                // "\n" +
                // "               <h2>EXPERIENCE</h2> \n" +
                // "               <h4>Research</h4>\n" +
                // "               <p>Jan. 2021~ Present The 2nd Project, participating as Researcher on India and England Law under Research Team on Regulation of Endocrine Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                // "                Participating as Researcher on India and England Law under Research Team on Regulation of Endocrine Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                // "              </p>\n" +
                // "               <p>May 2016 ~ Dec. 2020\n" +
                // "                Paricipating as Researcher on India and England Law under Research Team on Regulaation of Endocrien Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                // "              </p>\n" +
                // "               <p>Feb. 2014.               A Letter of Appointment fromIndia Insititue (Visiting Researcher) [App. 8]</p>\n" +
                // "               <h5>Doctoral thesis</h5>\n" +
                // "               <p>Apr. 2012 ~ 2014.  “A Comparative Study of Freedom of Inforamtion in  Republic of Korea and India ( focused on the Act on Right to Information)”, Faculty of Law Delhi University, New Delhi in India.</p> \n" +
                "              </div>            \n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>EDUCATION</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Apr. 2012             Ph. D Program Faculty of Law University of Delhi, India. [App.1]</p>\n" +
                "               <p>~ Mar. 2015       \tSponsored from Member of the Advisory Council on Democratic and Peaceful </p>\n" +
                "               <p>Unification, Korea Government under direct control of President of South Korea.</p>\n" +
                "               <p>Supported by I.C.C.R. Scholarship of India Government. [App.2]</p>\n" +
                "               <p>Supported by I.C.C.R. Scholarship of India Government. [App.2]\n" +
                "                Aug. 2013         UN Studies. Graduation, IFUNA (Institution under United Nation and under control of </p>\n" +
                "               <p>INDIA Government) On IMF, World Bank, UNDP, Human Right Council of United National Studies. [App. 3] </p>\n" +
                "               <p>Feb. 2002,  M.A.    “The Principal of law ‘Definite promise’ on Administrative law”,\n" +
                "                Graduated Faculty of Law, University of HanYang in South Korea\n" +
                "                </p>\n" +
                "               <p>Feb. 1999,               Bachelor, Graduated Faculty of Law, University of Su-Won \n" +
                "                Scholarship from Department in South Korea.\n" +
                "                </p>\n" +
                "              \n" +
                "\n" +
                "               <h2>EXPERIENCE</h2> \n" +
                "               <h4>Research</h4>\n" +
                "               <p>Jan. 2021~ Present The 2nd Project, participating as Researcher on India and England Law under Research Team on Regulation of Endocrine Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                "                Participating as Researcher on India and England Law under Research Team on Regulation of Endocrine Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                "              </p>\n" +
                "               <p>May 2016 ~ Dec. 2020\n" +
                "                Paricipating as Researcher on India and England Law under Research Team on Regulaation of Endocrien Disruptors, and Application Development for Living Chemical Products Platform, University of Hanyang, Seoul, South Korea \n" +
                "              </p>\n" +
                "               <p>Feb. 2014.               A Letter of Appointment fromIndia Insititue (Visiting Researcher) [App. 8]</p>\n" +
                "               <h5>Doctoral thesis</h5>\n" +
                "               <p>Apr. 2012 ~ 2014.  “A Comparative Study of Freedom of Inforamtion in  Republic of Korea and India ( focused on the Act on Right to Information)”, Faculty of Law Delhi University, New Delhi in India.</p> \n" +
                "              </div>            \n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 2,
        img: "assets/img/speakers/2.jpg",
        name: {
            uz: "DR. Gerd Droesse",
            ru: "DR. Gerd Droesse",
            en: "DR. Gerd Droesse"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>PROFIL</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>•\tXalqaro tashkilotlarda ishlashda 35 yildan ortiq tajribaga ega </p>\n" +
                "                <p>•\t2018 yil apreldan Jahon yashil iqtisodiyot tashkilotining (WGEO) Bosh maslahatchisi bo'lib, Jahon yashil iqtisodiyot tashkilotini (WGEO Shartnomasi) tuzish to'g'risidagi bitimni tuzish va yakunlash uchun mas'ul. Birlashgan Millatlar Tashkilotiga a'zo davlatlar va xalqaro tashkilot sifatida WGEOning huquqiy, me'yoriy -huquqiy asoslarini o'rnatish</p>\n" +
                "                  <p>\n" +
                "                    •\tKatta maslahatchi sifatida, Yashil iqlim jamg'armasi (GCF) Ijrochi direktori va Bosh maslahatchisiga uch yildan ortiq boshqaruv va siyosat bo'yicha maslahatlar berdi. GCFning 120 davlat bilan imtiyozlar va immunitetlar bo'yicha muzokaralar olib bordi.</p>\n" +
                "\n" +
                "                <p>Yashil iqlim jamg'armasining bosh yuridik xodimi (GCF Muvaqqat kotibiyatining yuridik maslahatchisi va GCF bosh maslahatchisi vazifasini bajaruvchi) sifatida 2 yarim yil xizmat qilgan, yuridik maslahatlar bergan. GCF Kengashiga, shu jumladan hamraislar va GCF boshqaruvining boshqa tarkibiy qismlariga</p>\n" +
                "  \n" +
                "                <p>Yetakchi mutaxassis, institut va muvofiqlashtirish,  Osiyo taraqqiyot banki (OTB) kotibi idorasida direktorlik darajasi; Tokiodagi Osiyo taraqqiyot banki institutining yuridik maslahatchisi sifatida; va maxsus amaliyot guruhining rahbari sifatida: Bosh maslahatchi institutsional va ma'muriy idorada.</p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tOTBga kirishdan oldin, Birlashgan Millatlar Tashkiloti Oziq -ovqat va qishloq xo'jaligi tashkiloti (FAO) xodimlari, WGEO shartnoma bazasiga ega bo'lgan yangi ko'p manfaatli tashkilotga direktorining yurist maslahatchisi bo'lib ishlagan</p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tYashil iqlim jamg'armasining yangi xalqaro tashkilot sifatida me'yoriy-huquqiy bazasini yaratishga katta hissa qo'shdi</p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tYuqori rahbariyat, boshqaruv organlari va Kengash qo'mitalari bilan ishlashda yuqori darajadagi qarorlarni qabul qilishda katta tajriba va doimiy ishtirok.\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tInstitutual huquq va xalqaro ma'muriy huquq bo'yicha taniqli mutaxassis, jamoalarni boshqarishda tajribaga ega va intellektual yetakchilik va keng ko'lamli institutsional va ma'muriy masalalar bo'yicha yuqori darajadagi maslahatlar beradi, shu jumladan intizomiy tartib va korruptsiyaga qarshi tergovlar, xodimlarning shikoyatlari va sud ishlari, yangi siyosat qabul qilish, murakkab institutsional va moliyaviy siyosat masalalari va korporativ boshqaruv masalalarida maslahatlar bergan.\n" +
                "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tContributed substantially to setting up the regulatory framework of the Green Climate Fund as a new international organization\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tExtensive experience in working with senior management, governing bodies and Board committees, and continuous involvement in decision-making procedures at a high level\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tRecognized specialist in institutional law and international administrative law with a\n" +
                // "demonstrated track record in managing teams and providing intellectual leadership and high- level advice on a wide range of institutional and administrative matters, including the conduct of disciplinary and anticorruption investigations, staff grievances and Administrative Tribunal cases, the adoption of new policies, complex institutional and financial policy matters and corporate governance issues\n" +
                // "\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tServed as chief negotiator or member of negotiating teams in many high-level negotiations\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tExtensive experience with resource mobilization issues, funding mechanisms and innovative modalities of financing\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tDemonstrated ability to conduct comprehensive reviews of Human Resources policies\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tAuthor, contributor and editor of two major books and several chapters of books\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tKeynote speaker, resource person or panellist at many international conferences or seminars\n" +
                // "                </p>\n" +
                "              </div>           \n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>ПРОФИЛЬ</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>•\tИмеет более 35 лет опыта работы в международных организациях</p>\n" +
                "                <p>•\tС апреля 2018 года он был Генеральным советником Всемирной организации зеленой экономики (WGEO), отвечая за заключение и окончательную доработку соглашения о создании Всемирной организации зеленой экономики (Соглашение WGEO). Создание нормативно-правовой базы WGEO как государства-члена ООН и международной организации</p>\n" +
                "                  <p>\n" +
                "                    •\tВ качестве старшего советника более трех лет был консультантом исполнительного директора и главного советника Зеленого климатического фонда (ЗКФ) по вопросам управления и политики. ЗКФ вёл переговоры о привилегиях и иммунитетах со 120 государствами</p>\n" +
                "\n" +
                "                <p>2,5 года он занимал должность главного юриста Зеленого климатического фонда (советник по правовым вопросам временного секретариата ЗКФ и исполняющий обязанности главного советника ЗКФ), предоставляя юридические консультации. В том числе, Правлению ЗКФ, включая сопредседателей и другие структуры ЗКФ</p>\n" +
                "  \n" +
                // "                <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tServed for 2 % years as the chief legal officer of the Green Climate Fund (Legal Counsel of the Interim Secretariat of the GCF and as Acting General Counsel of the GCF), providing legal advice to the GCF Board, including Co-Chairs, and other governance components of the GCF\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tServed as Lead Specialist, Institution and Coordination, at Director level, in the Office of The Secretary of the Asian Development Bank (ADB); as Legal Adviser of the Asian Development Bank Institute in Tokyo; and as Head of the Special Practice Group: Institutional and Administrative in the Office of the General Counsel\n" +
                // "                </p>\n" +
                // "\n" +
                "                <p>\n" +
                "                  •\tВедущий специалист, директор Института и координации, Аппарат секретаря Азиатского банка развития (АБР); юридический советник Института Азиатского банка развития в Токио; руководитель специальной практической группы; главный юрисконсульт в институциональном и административном офисе\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tДо прихода в АБР был сотрудником Продовольственной и сельскохозяйственной организации Объединенных Наций (ФАО), работал юрисконсультом директора WGEO.\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tВнес значительный вклад в создание нормативно-правовой базы Зеленого климатического фонда как новой международной организации\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tИммет большой опыт работы с высшим руководством и участия в принятии решений на высоком уровне, с руководящими органами и комитетами Совета\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tИзвестный эксперт в области институционального права и международного административного права, имеет опыт управления и даёт консультации высокого уровня по интеллектуальному лидерству и широкому спектру институциональных и административных вопросов, включая дисциплинарные процедуры и антикоррупционные расследования, а также рассмотрение жалоб,  судебные разбирательства, принятие новой политики, сложные институциональные и финансовые вопросы политики и вопросы корпоративного управления</p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tServed as chief negotiator or member of negotiating teams in many high-level negotiations\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tExtensive experience with resource mobilization issues, funding mechanisms and innovative modalities of financing\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tDemonstrated ability to conduct comprehensive reviews of Human Resources policies\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tAuthor, contributor and editor of two major books and several chapters of books\n" +
                // "                </p>\n" +
                // "\n" +
                // "                <p>\n" +
                // "                  •\tKeynote speaker, resource person or panellist at many international conferences or seminars\n" +
                // "                </p>\n" +
                "              </div>           \n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>PROFILE</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>•\tWith over 35 years of experience in working for international organizations</p>\n" +
                "                <p>•\tServed from April 2018 as General Counsel of the World Green Economy Organization\n" +
                "                  (WGEO), in charge of drafting and finalizing the Agreement establishing the World Green Economy Organization (WGEO Agreement) for signature by UN member states and establishing the legal, regulatory and policy framework of WGEO as an international organization\n" +
                "                  </p>\n" +
                "                  <p>\n" +
                "                    •\tAs Senior Advisor, provided for over three years management and policy advice to the Executive Director and General Counsel of the Green Climate Fund (GCF) and led the negotiations of the GCF with 120 countries on privileges and immunities\n" +
                "                  </p>\n" +
                "\n" +
                "                <p>Aboriosam inventore dolorem inventore nam est esse. Aperiam voluptatem nisi molestias laborum ut. Porro dignissimos eum. Tempore dolores minus unde est voluptatum incidunt ut aperiam.</p>\n" +
                "  \n" +
                "                <p>Et dolore blanditiis officiis non quod id possimus. Optio non commodi alias sint culpa sapiente nihil ipsa magnam. Qui eum alias provident omnis incidunt aut. Eius et officia corrupti omnis error vel quia omnis velit. In qui debitis autem aperiam voluptates unde sunt et facilis.</p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tServed for 2 % years as the chief legal officer of the Green Climate Fund (Legal Counsel of the Interim Secretariat of the GCF and as Acting General Counsel of the GCF), providing legal advice to the GCF Board, including Co-Chairs, and other governance components of the GCF\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tServed as Lead Specialist, Institution and Coordination, at Director level, in the Office of The Secretary of the Asian Development Bank (ADB); as Legal Adviser of the Asian Development Bank Institute in Tokyo; and as Head of the Special Practice Group: Institutional and Administrative in the Office of the General Counsel\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tBefore joining ADB, served as legal adviser to the Director of Personnel, Food and Agriculture Organization of the United Nations (FAO)\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tFacilitated the transition of WGEO to a new multi-stakeholder organization with a treaty base\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tContributed substantially to setting up the regulatory framework of the Green Climate Fund as a new international organization\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tExtensive experience in working with senior management, governing bodies and Board committees, and continuous involvement in decision-making procedures at a high level\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tRecognized specialist in institutional law and international administrative law with a\n" +
                "demonstrated track record in managing teams and providing intellectual leadership and high- level advice on a wide range of institutional and administrative matters, including the conduct of disciplinary and anticorruption investigations, staff grievances and Administrative Tribunal cases, the adoption of new policies, complex institutional and financial policy matters and corporate governance issues\n" +
                "\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tServed as chief negotiator or member of negotiating teams in many high-level negotiations\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tExtensive experience with resource mobilization issues, funding mechanisms and innovative modalities of financing\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tDemonstrated ability to conduct comprehensive reviews of Human Resources policies\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tAuthor, contributor and editor of two major books and several chapters of books\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  •\tKeynote speaker, resource person or panellist at many international conferences or seminars\n" +
                "                </p>\n" +
                "              </div>           \n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 3,
        img: "assets/img/speakers/3.jpg",
        name: {
            uz: "Marc Bungenberg",
            ru: "Marc Bungenberg",
            en: "Marc Bungenberg"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>PROFIL</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <h3>Hozirgi kasbiy faoliyati (tanlov)</h3>\n" +
                "\n" +
                "\n" +
                "                <p>2015 yil apreldan:\tSaarland universiteti, Yevropa instituti direktori\n" +
                "                  <br>\n" +
                "                  Xalqaro ommaviy huquq va Yevropa huquqi professori\n" +
                "                </p>\n" +
                "\n" +
                "\n" +
                "                <p>2011 yil sentyabrdan\tShveytsariyaning Lozanna universitetining doimiy tashrif        buyuruvchi professori </p>\n" +
                "\n" +
                "\n" +
                "                <p>2015 yil may oyidan boshlab\tYevropa xalqaro iqtisodiy huquq yilnomasi (EYIEL) muharriri</p>\n" +
                "\n" +
                "\n" +
                "                <p>2011 yil may oyidan buyon\tKyoln xalqaro investitsiya huquqi markazi maslahat kengashi a'zosi</p>\n" +
                "\n" +
                "<h3>Oldingi va boshqa professional faoliyat</h3>\n" +
                "                <p>2020\tMelburn universitetining huquqshunoslik fakultetining katta ilmiy xodimi\n</p>\n" +
                "\n" +
                "                <p>Iyun 2015 - 2018\tXalqaro boshqaruv innovatsiyalari markazining katta ilmiy xodimi (CIGI), Ontario, Kanada</p>\n" +
                "\n" +
                "\n" +
                "                <p>May 2013 - Iyun 2015\tShveytsariyaning Lucerne universitetida tashrif buyurgan o'qituvchi (Xalqaro xom ashyo huquqi bo'yicha)</p>\n" +
                "\n" +
                "                <p>2011 yil apreldan\tLL.M.da  professor. Xalqaro iqtisodiy huquq dasturi,  Lozanna\n</p>\n" +
                "\n" +
                "                <p>2011 yil sentyabrdan\tShveytsariyaning Lozanna universitetining doimiy tashrif buyuruvchi professori\n</p>\n" +
                "\n" +
                "\n" +
                "                <p>2011 yil mart\tSidney universitetida tashrif buyurgan o'qituvchi (Evropa iqtisodiy huquqi)\n</p>\n" +
                "\n" +
                "\n" +
                "                <p>2010 yil sentyabr\tAdliya vazirligi xodimlari uchun Gruziyaning Tiflis shahrida \"Xalqaro investitsiyalarni himoya qilish huquqi\" bo'yicha ingliz tili kursining o'qituvchisi (GTZ - Germaniya Texnik Hamkorlik Assotsiatsiyasi va Germaniyaning Rivojlanish Vazirligi tomonidan tashkil etilgan).\n</p>\n" +
                "                <p> 2010 yil aprel - 2015 yil mart Germaniya Siegen universitetida Yevropa huquqi, xalqaro ommaviy     huquq va xalqaro iqtisodiy huquq professori\n</p>\n" +
                "                <p>Aprel. 2009 yil-2010 yil mart, Fridrix-Aleksandr universiteti Erlangen-Nyurnberg jamoat huquqi va xalqaro ommaviy huquq professori, Germaniya\n</p>\n" +
                "                <p>Myunxen Lyudvig-Maksimilian universiteti Yevropa va xalqaro huquq professori <br/>\n" +
                "                                              Siyosat akademiyasi o'qituvchisi (Hochschule für Politik), Myunxen, Germaniya\n\n</p>\n" +
                "                <p>2008 yil oktabr- 2009 yil mart\tMyunxen Myunxen Lyudvig-Maksimilian universiteti jamoat huquqi, Yevropa huquqi va xalqaro ommaviy huquq professori\n</p>\n" +
                "                <p>2008 yil aprel - 2008 yil sentyabr. \tDrezden TU konstitutsiyaviy, iqtisodiy va ekologik huquq professori \n</p>\n" +
                "                <p>2006 yil oktabr - 2008 yil mart,\tMyunxen Lyudvig -Maksimilians universiteti jamoat huquqi professori\n</p>\n" +
                "                <p>2005 yil oktyabr-2006 yil iyun\tThüringer Verwaltungs akademiyasi o'qituvchisi (Tyuringen savdo va sanoat va Evropa huquqi bo'yicha Germaniya ma'muriy huquqi akademiyasi), Erfurt, Germaniya\n</p>\n" +
                "                <p>2006 yildan buyon\tmamlakat Germaniya, Evropa va xalqaro xaridlar huquqining rivojlanishi to'g'risida hisobot beradi\n</p>\n" +
                "                <p>1998 yil avgust - sentyabr. 2006 Jan-Monnet kafedrasida jamoat huquqi, Yevropa huquqi, xalqaro ommaviy huquq va xalqaro iqtisodiy huquq kafedrasida o'qituvchi va katta ilmiy yordamchi (professor doktor Karl M. Meessen 1998-2004, professor doktor Kristian Uolter 2004/05, professor) Doktor Kristof Ohler, LLM 2005/06), Fridrix Shiller universiteti Yena, Germaniya, huquq fakulteti\n</p>\n" +
                "\n" +
                "\n" +
                "              </div>\n" +
                "              <div class=\"social\" style=\"text-align: center;\">\n" +
                "                <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n" +
                "                <a href=\"\"><i class=\"fa fa-facebook\"></i></a>               \n" +
                "                <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "              </div>\n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>PROFILE</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <h3>Текущая профессиональная деятельность (выбор)</h3>\n" +
                "\n" +
                "\n" +
                "                <p>Саарский университет\n" +
                "Заведующей кафедрой публичного права, международного публичного права и европейского права\n" +
                "                  <br>\n" +
                "Europa-Institut, Почтовой индекс:  15 11 50\n" +
                "D-66041 Саарбрюккен, Германия\n" +

                "                  \n" +
                "                </p>\n" +
                "\n" +
                "\n" +
                "                <p>С апреля 2015 года:  Директор Europa-Institut Саарландского университета.</p>\n" +
                "\n" +
                "\n" +
                "                <p>С сентября 2011 г. - Постоянный приглашенный профессор Лозаннского университета, Швейцария.</p>\n" +
                "\n" +
                "\n" +
                "                <p>С мая 2015 года - Редактор Европейского ежегодника международного экономического права (EYIEL)</p>\n" +
                "                <p>С мая 2011 г. - Член Консультативного совета Международного центра инвестиционного права, Кельн</p>\n" +
                "\n" +
                "<h3>Другие профессиональные деятельности</h3>\n" +
                "                <p>2020.г -  старший научный сотрудник юридической школы Мельбурнского университета</p>\n" +
                "\n" +
                "                <p>С Июня 2015 - 2018 Старший научный сотрудник Центра инноваций в международном управлении (CIGI), Онтарио, Канада</p>\n" +
                "\n" +
                "\n" +
                "                <p>С мая 2013 г. - июнь 2015 г. Приглашенный лектор (международное право на сырье) Люцернского университета, Швейцария</p>\n" +
                "\n" +
                "                <p>С апреля 2011 года адъюнкт-профессор LL.M. Программа международного экономического права, Лозанна</p>\n" +
                "\n" +
                "                <p>С сентября 2011 г. -  Постоянный приглашенный профессор Лозаннского университета, Швейцария</p>\n" +
                "\n" +
                "\n" +
                "                <p>С Марта  2011 г.-  Приглашенный лектор Сиднейского университета (Европейское экономическое право). </p>\n" +
                "\n" +
                "\n" +
                "                <p>Сентябрь 2010 г. - Куратор курса английского языка по «Международному праву по защите инвестиций» для сотрудников Министерства юстиции в Тифлисе, Грузия (организован GTZ - Немецкой ассоциацией технического сотрудничества - и Министерством помощи в развитии Германии).</p>\n" +
                "\n" +
                "\n" +
                "              </div>\n" +
                "              <div class=\"social\" style=\"text-align: center;\">\n" +
                "                <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n" +
                "                <a href=\"\"><i class=\"fa fa-facebook\"></i></a>               \n" +
                "                <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "              </div>\n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>PROFILE</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <h3>Current Professional Activities (selection)</h3>\n" +
                "\n" +
                "\n" +
                "                <p>Since April 2015:\tDirector of the Europa-Institut, Saarland University\n" +
                "                  <br>\n" +
                "                  Professor of Public International Law and European Law\n" +
                "                </p>\n" +
                "\n" +
                "\n" +
                "                <p>Since Sept. 2011\tpermanent Visiting Professor University of Lausanne, Switzerland </p>\n" +
                "\n" +
                "\n" +
                "                <p>Since May 2015\tEditor of the European Yearbook of International Economic Law (EYIEL)</p>\n" +
                "\n" +
                "\n" +
                "                <p>Since May 2011\tMember of the Advisory Board of the International Investment Law Centre, Cologne</p>\n" +
                "\n" +
                "<h3>Former and other Professional Activities</h3>\n" +
                "                <p>2020\tSenior Fellow University of Melbourne Law School</p>\n" +
                "\n" +
                "                <p>June 2015 - 2018\tSenior Fellow at the Centre for International Governance Innovation (CIGI), Ontario, Canada</p>\n" +
                "\n" +
                "\n" +
                "                <p>May 2013 - June 2015\tVisiting Lecturer (for International Raw Materials Law) at Lucerne University, Switzerland</p>\n" +
                "\n" +
                "                <p>Since April 2011\tAdjunct Professor in the LL.M. Program for International Economic Law, Lausanne</p>\n" +
                "\n" +
                "                <p>Since Sept. 2011\tpermanent Visiting Professor University of Lausanne, Switzerland</p>\n" +
                "\n" +
                "\n" +
                "                <p>March 2011\tVisiting Lecturer at the University of Sydney (European Economic Law)</p>\n" +
                "\n" +
                "\n" +
                "                <p>September 2010\tTutor of a course in English language on “International Investment Protection Law” for staff members of the Ministry of Justice in Tiflis, Georgia (organized by GTZ - German Association for Technical Cooperation - and the German Ministry for Developmental Aid)</p>\n" +
                "\n" +
                "\n" +
                "              </div>\n" +
                "              <div class=\"social\" style=\"text-align: center;\">\n" +
                "                <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n" +
                "                <a href=\"\"><i class=\"fa fa-facebook\"></i></a>               \n" +
                "                <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "              </div>\n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 4,
        img: "assets/img/speakers/4.jpg",
        name: {
            uz: "Damian Cyman",
            ru: "Дамиан Кайман",
            en: "Damian Cyman"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <p><b>Tug'ulgan yili: </b> 16.09.1978 yil Polshaning Kartuzi shahrida tug'ilgan<br> "+
                "<b>Aloqa manzili</b> \n" +
                "POLSHA\n" +
                "80-241 Gdansk\n" +
                "Grunvaldzka 60/4<br> "+
                "<b>Mobil</b>: +48 728 894 775\n<br>" +
                "<b>Elektron pochta</b>: Damian.cyman@gmail.com\n</p>  \n" +
                "              <h2>Ta'lim</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "\n" +
                "              <p>2002 yil Gdansk universiteti<br><b>Ilmiy darajasi: </b>fan doktori</p>  \n" +
                "\n" +
                "              <p>2005 yil Gdanskdagi apellyatsiya sudi\n</p>  \n" +
                "\n" +
                "              <p>2007 yil tuman yuridik maslahatchilar palatasi, yuridik maslahatchi\n</p>  \n" +
                "\n" +
                "              <p>2008 yil Gdanskdagi tasviriy san'at akademiyasi<br><b>Olingan daraja: </b>Tasviriy san'at bo'yicha litsenziya</p>  \n" +
                "\n" +
                "              <p>2011 yil Gdansk universiteti, fan doktori\n</p>  \n" +
                "\n" +
                "              <h2>Ish tajribasi</h2>  \n" +
                "\n" +
                "              <p>2003 yildan hozirgi kungacha– assistent, o'qituvchi Gdansk universiteti</p>  \n" +
                "\n" +
                "              <p>2002 – 2005 sudya, Gdanskdagi apellyatsiya sudi</p>  \n" +
                "\n" +
                "              <p>2008 yildan hozirgacha–Yuridik firmada yuridik maslahatchi</p>  \n" +
                "\n" +
                "              <h2>Tillar</h2>\n" +
                "              <p>Polsha- ona tili<br>Inglizcha- ravon\n</p>  \n" +
                "\n" +
                "<h2>Ilmiy qiziqishlar</h2>\n" +
                "<p>Moliyaviy huquq, to'lov xizmatlari, elektron pul, bank huquqi. Doktorlik dissertatsiyasi mavzusi: “Elektron to'lov vositalari va moliyaviy bozor xavfsizligi”</p>\n" +
                "              </div>\n" +
                "             \n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <p><b>Год рождения: </b> 16.09.1978 <br><b>Место Рождения: </b> Картузы, Польша   <br> "+
                "<b>Контакт адрес:</b> Poland 80-241 Gdansk Grunwaldzka 60/4<br> "+
                "<b>Телефон</b>: +48 728 894 775\n<br>" +
                "<b>Почта</b>: Damian.cyman@gmail.com\n</p>  \n" +
                "              <h2>Образование:</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "\n" +
                "              <p>2002.г  - Гданьский университет<br><b>Направление: </b>Магистр наук </p>  \n" +
                "\n" +
                "              <p>2005.г - Апелляционный суд в Гданьске<br><b>Степень: </b>судебный экзамен\n</p>  \n" +
                "\n" +
                "              <p>2007.г - Окружная палата юридических консультантов\n" +
                "<br><b>Степень:</b> Юридический консультант\n</p>  \n" +
                "\n" +
                "              <p>2008.г - Академия изящных искусств в Гданьске<br><b>Степень: </b>Лиценциат в области изобразительного искусства</p>  \n" +
                "\n" +
                "              <p>2011.г - Гданьский университет\n" +
                "<br><b>Степень: </b>Доктор наук</p>  \n" +
                "              <h2>Профессиональная деятельность:</h2>  \n" +
                "\n" +
                "              <p>2003.г - ассистент, лектор  в Гданьском университете\n</p>  \n" +
                "\n" +
                "              <p>2002-2005 гг. - судья-стажер в Апелляционном суде в Гданьске </p>  \n" +
                "\n" +
                "              <p>2008 г. - юридический консультант в Юридической фирме</p>  \n" +
                "\n" +
                "<h2>Интересующие сферы:</h2>\n" +
                "<p>финансовое право, платежные услуги, электронные деньги, банковское право, кандидатская диссертация на тему: «Электронные платежные инструменты и безопасность финансового рынка» ”</p>\n" +
                "              </div>\n" +
                "             \n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>Education</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p>2002,\n" +
                "              Grade achieved: Uniwersity of Gdansk\n" +
                "              Master of science\n" +
                "              </p>  \n" +
                "\n" +
                "              <p>2005,\n" +
                "                Grade achieved: Appeal Court in Gdansk\n" +
                "                Judicial exam\n" +
                "                </p>  \n" +
                "\n" +
                "              <p>2007,\n" +
                "                Grade achieved: The District Chamber of Legal Advisers\n" +
                "                Legal advisor\n" +
                "                </p>  \n" +
                "\n" +
                "              <p>2008,\n" +
                "                Grade achieved: Fine Art Academy in Gdansk\n" +
                "                Licentiate in fine arts\n" +
                "                </p>  \n" +
                "\n" +
                "              <p>2011,\n" +
                "                Grade achieved: Uniwersity of Gdansk\n" +
                "                Doctor of science\n" +
                "                </p>  \n" +
                "\n" +
                "              <h2>Work Experience </h2>  \n" +
                "\n" +
                "              <p>[2003 - present] assistant, lecturer. Uniwersity of Gdansk  </p>  \n" +
                "\n" +
                "              <p>[2002 - 2005] judges trainee. Appeal Court In Gdansk </p>  \n" +
                "\n" +
                "              <p>[2008 - present] legal advisor. Law firm</p>  \n" +
                "\n" +
                "              <h2>Languages</h2>\n" +
                "              <p>Polish- mother language, English- fluently</p>  \n" +
                "\n" +
                "<h2>Science Interests </h2>\n" +
                "<p>Financial law, payment services, electronic money, banking law. PhD dissertation on “Electronic payment instruments and security of the financial market.</p>\n" +
                "              </div>\n" +
                "             \n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 5,
        img: "assets/img/speakers/5.jpg",
        name: {
            uz: "Thomas Cheng",
            ru: "Томас Ченг",
            en: "Thomas Cheng"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>THE DEPARTMENT OF LAW</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>&nbsp;&nbsp;&nbsp;&nbsp;Oxford universiteti Fan doktori</p>\n" +
                "\n" +
                "                <b class=\"text-dark\">Nyu York shtati advokatlar uyushmasi a’zosi (New York State Bar)</b>\n" +
                "\n" +
                "                <h3>Biografiya</h3>\n" +
                "\n" +
                "                <p>Thomas Cheng Hong Kong universiteti dotsenti hisoblanadi. U asosan raqobat huquqi sohasida ilmiy izlanishlarni olib boradi hamda Hong Kong, Xitoy, Yaponiya kabi Osiyo davlatlarida raqobat huquqini tadqiq qilgan. Uning ilmiy ishlari Chicago Journal of International law, Berkeley Business Law Journal, Virginia Law & Business Review, Journal of Antitrust Enforcement and World Competition kabi dunyoning mashhur jurnallarida chop etilgan. Uning 2020-yildagi “Rivojlanayotgan davlatlarda raqobat huquqi” (Competition Law in Developing Countries) monografiyasi Oxford University Pressda nashr etilgan. Bundan tashqari, \n" +
                "2021-yilda “Rivojlanayotgan mamlakatlarda patent-raqobat huquqining o`zaro aloqasi” (The Patent-Competition Interface in Developing Countries) monografiyasi ham Oxford University Pressda nashr etilgan</p>\n" +
                "\n" +
                "                <p>Uning ilmiy ishlari dunyo hamjamiyati tomonidan tan olingan. U raqobat va intellektual mulk yo`nalishida ikki marotaba Jerry S. Cohen Memorial Fund Writing Award mukofoti bilan taqdirlangan. U American Antitrust Institute and the Academic Society for Competition Law (“ASCOLA”) kabi bir qancha xalqaro raqobat huquqi tashkilotlarining ijro va maslahat organlarining a’zosi hisoblanadi. Uning ilmiy ishlari Hong Kong raqobat huquqini rivojlantirishda asos bo`lib xizmat qilgan</p>\n" +
                "                <p>U Ishbilarmonlik maslahat qo'mitasining, Amerika monopoliyaga qarshi instituti Ma'muriy kengashi, Iste’molchilarning monopoliyaga qarshi kurashish jamiyati boshqaruv kengashi, Monopoliyaga qarshi mukofotlarni akademik boshqaruv qo`mitasi, Monopoliyaga qarshi kurash jurnal kengashi va Xitoy Antimnopoliya huquqi jurnali kengashining a’zosi hisoblanadi</p>\n" +
                "                \n" +
                "                <p class=\"text-center\"><b>Book editorships</b></p>\n" +
                "\n" +
                "                <p>Member, Business Facilitation Advisory Committee</p>\n" +
                "                <p>Member, Advisory Board, American Antitrust Institute</p>\n" +
                "                <p>Member, Executive Board, Academic Society for Competition Law</p>\n" +
                "                <p>Member, International Advisory Board, Institute for Consumer Antitrust Studies</p>\n" +
                "                <p>Member, Academic Steering Committee, Concurrences Antitrust Writing Awards</p>\n" +
                "                <p>Member, Advisory Board, Journal of Antitrust Enforcement</p>\n" +
                "                <p>Member, Advisory Board, China Antitrust Law Journal</p>            \n" +
                "                </div>      \n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>THE DEPARTMENT OF LAW</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>&nbsp;&nbsp;&nbsp;&nbsp;Доктор философии, Оксфордский университет</p>\n" +
                "\n" +
                "                <b class=\"text-dark\">Член коллегии адвокатов штата Нью-Йорк</b>\n" +
                "\n" +
                "                <h3>Биография</h3>\n" +
                "\n" +
                "                <p>Томас Ченг - доцент Гонконгского университета. В основном он проводит исследования в области законодательства о конкуренции и изучал законы о конкуренции в азиатских странах, таких как Гонконг, Китай, Япония. Его исследования были опубликованы во всемирно известных журналах, таких как Chicago Journal of International Law, Berkeley Business Law Journal, Virginia Law & Business Review, Journal of Antitrust Enforcement and World Competition. Его монография 2020 г. «Закон о конкуренции в развивающихся странах» была опубликована в Oxford University Press. Кроме того, в 2021 году в Oxford University Press была опубликована монография «Патентно-конкурентное взаимодействие в развивающихся странах». </p>\n" +
                "\n" +
                "                <p>Его научная работа признана мировым сообществом. Он дважды был награжден писательской премией фонда памяти Джерри С. Коэна в области конкуренции и интеллектуальной собственности. Он является членом исполнительных и консультативных органов нескольких международных организаций по антимонопольному праву, включая Американский антимонопольный институт и Академическое общество антимонопольного права (ASCOLA). Его исследования послужили основой для разработки законодательства Гонконга о конкуренции. </p>" +
                "                <p>Он является членом Делового консультативного комитета, Совета директоров Американского антимонопольного института, Совета директоров Антимонопольного общества потребителей, Академического комитета по управлению антимонопольными премиями, Совета антимонопольных журналов и Совета по антимонопольному законодательству Китая </p>\n" +
                "                </div>      \n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>THE DEPARTMENT OF LAW</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>&nbsp;&nbsp;&nbsp;&nbsp;Doctor of Philosophy, University of Oxford</p>\n" +
                "\n" +
                "                <b class=\"text-dark\">Member, New York State Bar</b>\n" +
                "\n" +
                "                <h3>Biography</h3>\n" +
                "\n" +
                "                <p>Thomas Cheng is an associate professor at the University of Hong Kong. He has written extensively on competition law in developing countries\n" +
                "                   and on the competition law of a number of Asian jurisdictions, including Hong Kong, China, and Japan. His research has appeared in respected\n" +
                "                    specialist U.S. journals, including Chicago Journal of International Law, Berkeley Business Law Journal, Virginia Law & Business Review, and\n" +
                "                     University of Pennsylvania Journal of Business Law, and in leading competition law journals such as Journal of Antitrust Enforcement and World\n" +
                "                      Competition. In 2020, he published Competition Law in Developing Countries, the first comprehensive monograph\n" +
                "                   on the topic, with Oxford University Press. He will publish The Patent-Competition Interface in Developing Countries, again the first\n" +
                "                    comprehensive monograph on the topic, with Oxford University Press in 2021.</p>\n" +
                "\n" +
                "                <p>His research has been recognized internationally. He has been twice awarded the Jerry S. Cohen Memorial Fund Writing Award in the vertical\n" +
                "                   restraints and antitrust and IP categories. Apart from awards, his stature as a scholar has been recognized through appointments to the\n" +
                "                    executive and advisory boards of a number of leading international competition law organizations such as the American Antitrust Institute\n" +
                "                     and the Academic Society for Competition Law (“ASCOLA”). He has made critical contributions to the development of competition law in Hong\n" +
                "                      Kong. He advised the government extensively during the drafting of the city’s first competition law. He was a member of the inaugural\n" +
                "                       Competition Commission and played a pivotal role in staff recruitment and setting up the Commission.</p>\n" +
                "                \n" +
                "                <p class=\"text-center\"><b>Book editorships</b></p>\n" +
                "\n" +
                "                <p>Member, Business Facilitation Advisory Committee</p>\n" +
                "                <p>Member, Advisory Board, American Antitrust Institute</p>\n" +
                "                <p>Member, Executive Board, Academic Society for Competition Law</p>\n" +
                "                <p>Member, International Advisory Board, Institute for Consumer Antitrust Studies</p>\n" +
                "                <p>Member, Academic Steering Committee, Concurrences Antitrust Writing Awards</p>\n" +
                "                <p>Member, Advisory Board, Journal of Antitrust Enforcement</p>\n" +
                "                <p>Member, Advisory Board, China Antitrust Law Journal</p>            \n" +
                "                </div>      \n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 6,
        img: "assets/img/speakers/6.jpg",
        name: {
            uz: "Edvard Yuxnevich",
            ru: "Эдвард Юхневич",
            en: "Edward Juchniewicz"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "     <h2>Shaxsiy identifikator:</h2> <p>" +
                "Doktor Eduard Yuhnevich, prof.<br>\n" +
                "1977 yil 16 yanvarda Salchininkayda tug'ilgan</p>        " +
                "<h2>Ilmiy qiziqishlar:</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Xalqaro soliq qonunchiligi, Soliq to'lashdan bo'yin tovlash, sun'iy intellekt va soliq qonunchiligi, robotlarga soliq solish, elektron tijorat soliqlari, LegalTech va FinTech</p>\n" +
                "\n" +
                "                <p><b>Ish joyi</b></p>\n" +
                "                <p>• Gdansk universiteti professori\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  • Markaziy va Sharqiy Evropa universitetlari bilan xalqaro hamkorlik bo'yicha vakil\n" +
                "                </p>\n" +
                "\n" +
                "                <p><b>Ta'lim va ilmiy malaka</b></p>\n" +
                "\n" +
                "                <p>\n" +
                "                  • 1998 yil: huquqshunoslik bo'yicha magistratura, Gdansk universiteti, bank kreditlari huquqi bo'yicha diplom ishi, huquq va boshqaruv fakulteti\n" +
                "\n" +
                "                </p>\n" +
                "                <p>\n" +
                "                  • 2003 yil: Moliyaviy huquq bo'yicha doktorlik, Gdansk universiteti, Huquq va boshqaruv fakulteti, qimmatli qog'ozlarning huquqiy tuzilishi bo'yicha doktorlik dissertatsiyasi\n" +
                "\n" +
                "                </p>\n" +
                "                <p>• 2018 yil: Xabilitatsiya dissertatsiyasi, Gdansk universiteti, Huquq va boshqaruv fakulteti</p>\n" +
                "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "     <h2>Идентификация личности:</h2> <p>" +
                "Доктор Эдвард Юхневич, проф<br>\n" +
                "родился 16 января 1977 года в Шальчининкае, женат.</p>        " +
                "              <h2>Академические интересы:</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Международное налоговое право, Избежание налогов и уклонение от налогов, искусственный интеллект и налоговое право, налогообложение роботов, налогообложение электронной коммерции, LegalTech и FinTech</p>\n" +
                "\n" +
                "                <p><b>Место работы</b></p>\n" +
                "                <p>• Кафедра финансового права, Факультет права и администрации, Гданьский университет Bayńskiego 6\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  • 80-309 Гданьск \n" +
                "                </p>\n" +
                "\n" +"                <p>\n" +
                "                  <b>Контактный телефон: </b> +48502990449 \n" +
                "                </p>\n" +
                "\n" +"                <p>\n" +
                "                  <b>e-mail: </b> +48502990449 \n" +
                "                </p>\n" +
                "\n" +
                "                <p><b>Электронный сайт: </b><br><a href='http://prawo.arch.ug.edu.pl/pracownik/edvardjuchnevic.html'>http://prawo.arch.ug.edu.pl/pracownik/edvardjuchnevic.html</a><br><a href='http://prawo.ug.edu.pl/pracownik/1222/edvardas_juchnevicius'>http://prawo.ug.edu.pl/pracownik/1222/edvardas_juchnevicius</a></p>\n" +
                "\n" +
                "                <p>\n" +
                "                  <b>Должность</b>\n" +
                "\n" +
                "                </p>\n" +
                "                <p>\n" +
                "                  • Профессор Гданьского университета" +
                "\n" +
                "                </p>\n" +
                "                <p>• Представитель декана по международному сотрудничеству с университетами Центральной и Восточной Европы</p>\n" +
                "                <p><b>Образование и академическая квалификация</b>" +
                "                <p>⦁\t1998: Магистр права, дипломная работа по юридическим вопросам банковских кредитов, Гданьский университет, факультет права и администрации</p>\n" +
                "                <p>⦁\t2003: Докторантура по финансовому праву, докторская диссертация по правовой структуре казначейских ценных бумаг, Гданьский университет, факультет права и администрации</p>\n" +
                "                <p>⦁\t2018: докторская диссертация, Гданьский университет, факультет права и администрации\n</p>\n" +
                "                <p>• ⦁\t1998: Магистр права, дипломная работа по юридическим вопросам банковских кредитов, Гданьский университет, факультет права и администрации</p>\n" +
                "              </div>\n" +
                "\n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>Scientific interests:</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>International tax law, Tax avoidance and tax evasion, artificial intelligence and tax law, taxation\n" +
                "                  of robots, e-commerce taxation, LegalTech and FinTech.</p>\n" +
                "\n" +
                "                <p><b>Employment Position</b></p>\n" +
                "                <p>• Professor at Gdansk University\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  • Dean's Representative on international cooperation with universities from Central and Eastern\n" +
                "                  Europe\n" +
                "                </p>\n" +
                "\n" +
                "                <p><b>Education and Academic Qualifications</b></p>\n" +
                "\n" +
                "                <p>\n" +
                "                  • 1998: Master studies in Law, diploma work on Legal of Bank Loans, Gdansk University, Faculty of\n" +
                "                  Law and Administration\n" +
                "\n" +
                "                </p>\n" +
                "                <p>\n" +
                "                  • 2003: Doctoral studies in Financial Law, doctoral thesis on Legal Structure of Treasure Securities,\n" +
                "                  Gdansk university, Faculty of Law and Administration\n" +
                "\n" +
                "                </p>\n" +
                "                <p>• 2018: Habilitation dissertation, Gdansk university, Faculty of Law and Administration</p>\n" +
                "              </div>\n" +
                "\n" +
                "            </div>"
        }
    },
    {
        id: 7,
        img: "assets/img/speakers/7.jpg",
        name: {
            uz: "Йорг ПуделькаM",
            ru: "Йорг Пуделька",
            en: "Йорг Пуделька"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>PROFIL</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <h3>Hozirgi kasbiy faoliyati (tanlov)</h3>\n" +
                "\n" +
                "\n" +
                "                <p>2015 yil apreldan:\tSaarland universiteti, Yevropa instituti direktori\n" +
                "                  <br>\n" +
                "                  Xalqaro ommaviy huquq va Yevropa huquqi professori\n" +
                "                </p>\n" +
                "\n" +
                "\n" +
                "                <p>2011 yil sentyabrdan\tShveytsariyaning Lozanna universitetining doimiy tashrif        buyuruvchi professori </p>\n" +
                "\n" +
                "\n" +
                "                <p>2015 yil may oyidan boshlab\tYevropa xalqaro iqtisodiy huquq yilnomasi (EYIEL) muharriri</p>\n" +
                "\n" +
                "\n" +
                "                <p>2011 yil may oyidan buyon\tKyoln xalqaro investitsiya huquqi markazi maslahat kengashi a'zosi</p>\n" +
                "\n" +
                "<h3>Oldingi va boshqa professional faoliyat</h3>\n" +
                "                <p>2020\tMelburn universitetining huquqshunoslik fakultetining katta ilmiy xodimi\n</p>\n" +
                "\n" +
                "                <p>Iyun 2015 - 2018\tXalqaro boshqaruv innovatsiyalari markazining katta ilmiy xodimi (CIGI), Ontario, Kanada</p>\n" +
                "\n" +
                "\n" +
                "                <p>May 2013 - Iyun 2015\tShveytsariyaning Lucerne universitetida tashrif buyurgan o'qituvchi (Xalqaro xom ashyo huquqi bo'yicha)</p>\n" +
                "\n" +
                "                <p>2011 yil apreldan\tLL.M.da  professor. Xalqaro iqtisodiy huquq dasturi,  Lozanna\n</p>\n" +
                "\n" +
                "                <p>2011 yil sentyabrdan\tShveytsariyaning Lozanna universitetining doimiy tashrif buyuruvchi professori\n</p>\n" +
                "\n" +
                "\n" +
                "                <p>2011 yil mart\tSidney universitetida tashrif buyurgan o'qituvchi (Evropa iqtisodiy huquqi)\n</p>\n" +
                "\n" +
                "\n" +
                "                <p>2010 yil sentyabr\tAdliya vazirligi xodimlari uchun Gruziyaning Tiflis shahrida \"Xalqaro investitsiyalarni himoya qilish huquqi\" bo'yicha ingliz tili kursining o'qituvchisi (GTZ - Germaniya Texnik Hamkorlik Assotsiatsiyasi va Germaniyaning Rivojlanish Vazirligi tomonidan tashkil etilgan).\n</p>\n" +
                "                <p> 2010 yil aprel - 2015 yil mart Germaniya Siegen universitetida Yevropa huquqi, xalqaro ommaviy     huquq va xalqaro iqtisodiy huquq professori\n</p>\n" +
                "                <p>Aprel. 2009 yil-2010 yil mart, Fridrix-Aleksandr universiteti Erlangen-Nyurnberg jamoat huquqi va xalqaro ommaviy huquq professori, Germaniya\n</p>\n" +
                "                <p>Myunxen Lyudvig-Maksimilian universiteti Yevropa va xalqaro huquq professori <br/>\n" +
                "                                              Siyosat akademiyasi o'qituvchisi (Hochschule für Politik), Myunxen, Germaniya\n\n</p>\n" +
                "                <p>2008 yil oktabr- 2009 yil mart\tMyunxen Myunxen Lyudvig-Maksimilian universiteti jamoat huquqi, Yevropa huquqi va xalqaro ommaviy huquq professori\n</p>\n" +
                "                <p>2008 yil aprel - 2008 yil sentyabr. \tDrezden TU konstitutsiyaviy, iqtisodiy va ekologik huquq professori \n</p>\n" +
                "                <p>2006 yil oktabr - 2008 yil mart,\tMyunxen Lyudvig -Maksimilians universiteti jamoat huquqi professori\n</p>\n" +
                "                <p>2005 yil oktyabr-2006 yil iyun\tThüringer Verwaltungs akademiyasi o'qituvchisi (Tyuringen savdo va sanoat va Evropa huquqi bo'yicha Germaniya ma'muriy huquqi akademiyasi), Erfurt, Germaniya\n</p>\n" +
                "                <p>2006 yildan buyon\tmamlakat Germaniya, Evropa va xalqaro xaridlar huquqining rivojlanishi to'g'risida hisobot beradi\n</p>\n" +
                "                <p>1998 yil avgust - sentyabr. 2006 Jan-Monnet kafedrasida jamoat huquqi, Yevropa huquqi, xalqaro ommaviy huquq va xalqaro iqtisodiy huquq kafedrasida o'qituvchi va katta ilmiy yordamchi (professor doktor Karl M. Meessen 1998-2004, professor doktor Kristian Uolter 2004/05, professor) Doktor Kristof Ohler, LLM 2005/06), Fridrix Shiller universiteti Yena, Germaniya, huquq fakulteti\n</p>\n" +
                "\n" +
                "\n" +
                "              </div>\n" +
                "              <div class=\"social\" style=\"text-align: center;\">\n" +
                "                <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n" +
                "                <a href=\"\"><i class=\"fa fa-facebook\"></i></a>               \n" +
                "                <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "              </div>\n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>Членство в профессиональных союзах</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "\n" +
                "\n" +
                "                <p>⦁\tЧлен Союза судей административных судов, Берлин\n <br>" +
                "⦁\tЧлен Немецко-Украинского союза юристов</p>\n" +
                "<h3>Профессиональная деятельность:</h3>\n" +
                "                <p>В настоящее время: Глава Представительства GIZ в Узбекистане, Казахстане и Туркменистане / Директор Программы GIZ «Содействие правовой государственности в странах Центральной Азии»\n</p>\n" +
                "\n" +
                "                <p>С 2015 г. - Глава Представительства GIZ в РК</p>\n" +
                "\n" +
                "\n" +
                "                <p>С 2012 по настоящее время - директор Программы «Содействие правовой государственности в странах ЦА»\n</p>\n" +
                "              </div>\n" +
                "              <div class=\"social\" style=\"text-align: center;\">\n" +
                "                <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n" +
                "                <a href=\"\"><i class=\"fa fa-facebook\"></i></a>               \n" +
                "                <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "              </div>\n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>PROFILE</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <h3>Current Professional Activities (selection)</h3>\n" +
                "\n" +
                "\n" +
                "                <p>Since April 2015:\tDirector of the Europa-Institut, Saarland University\n" +
                "                  <br>\n" +
                "                  Professor of Public International Law and European Law\n" +
                "                </p>\n" +
                "\n" +
                "\n" +
                "                <p>Since Sept. 2011\tpermanent Visiting Professor University of Lausanne, Switzerland </p>\n" +
                "\n" +
                "\n" +
                "                <p>Since May 2015\tEditor of the European Yearbook of International Economic Law (EYIEL)</p>\n" +
                "\n" +
                "\n" +
                "                <p>Since May 2011\tMember of the Advisory Board of the International Investment Law Centre, Cologne</p>\n" +
                "\n" +
                "<h3>Former and other Professional Activities</h3>\n" +
                "                <p>2020\tSenior Fellow University of Melbourne Law School</p>\n" +
                "\n" +
                "                <p>June 2015 - 2018\tSenior Fellow at the Centre for International Governance Innovation (CIGI), Ontario, Canada</p>\n" +
                "\n" +
                "\n" +
                "                <p>May 2013 - June 2015\tVisiting Lecturer (for International Raw Materials Law) at Lucerne University, Switzerland</p>\n" +
                "\n" +
                "                <p>Since April 2011\tAdjunct Professor in the LL.M. Program for International Economic Law, Lausanne</p>\n" +
                "\n" +
                "                <p>Since Sept. 2011\tpermanent Visiting Professor University of Lausanne, Switzerland</p>\n" +
                "\n" +
                "\n" +
                "                <p>March 2011\tVisiting Lecturer at the University of Sydney (European Economic Law)</p>\n" +
                "\n" +
                "\n" +
                "                <p>September 2010\tTutor of a course in English language on “International Investment Protection Law” for staff members of the Ministry of Justice in Tiflis, Georgia (organized by GTZ - German Association for Technical Cooperation - and the German Ministry for Developmental Aid)</p>\n" +
                "\n" +
                "\n" +
                "              </div>\n" +
                "              <div class=\"social\" style=\"text-align: center;\">\n" +
                "                <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n" +
                "                <a href=\"\"><i class=\"fa fa-facebook\"></i></a>               \n" +
                "                <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n" +
                "              </div>\n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 8,
        img: "assets/img/speakers/8.jpg",
        name: {
            uz: "Ismailov Bakhodir",
            ru: "Ismailov Bakhodir",
            en: "Ismailov Bakhodir"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>Ma'lumotnoma</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>2018  йил 10 декабрдан Ўзбекистон Республикаси Бош прокуратураси Академияси Коррупцияга қарши курашиш илмий-таълим маркази бошлиғи</p>\n" +
                "\n" +
                "                <b>Туғилган йили:</b>\n" +
                "                <p>31.10.1965й</p>\n" +
                "                <b>Туғилган жойи:</b>\n" +
                "                <p>Бухоро вилояти\n" +
                "Когон шаҳри\n</p>\n" +
                "                <b>Маълумоти бўйича мутахассислиги:</b>\n" +
                "                <p>хуқуқшунос</p>\n" +
                "                <b>Мартаба даражаси:</b>\n" +
                "                <p>Адлия маслахатчиси</p>\n" +
                "\n" +
                "                <H2>МЕҲНАТ ФАОЛИЯТИ:</H2>\n" +
                "\n" +
                "                <p>\n" +
                "                  1983-1984 й.\n" +
                "\n" +
                "\n" +
                "\t“Ўртаосиёнефтегазқурилиш” трестининг авточилангари\n" +
                "\n" +
                "                </p>\n" +
                "\n" +
                "                <p>1984-1986 й.\n" +
                "\n" +
                "\n" +
                "\tАрмия сафида ҳарбий хизматда\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1986-1991 й.\n" +
                "\n" +
                "\n" +
                "\tТошкент Давлат университетининг талабаси\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1991-1994 й.\n" +
                "\n" +
                "\n" +
                "\tЎзбекистон Республикаси Фанлар академияси Фалсафа ва ҳуқуқ институтининг аспиранти\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1994-1996 й.\n" +
                "\n" +
                "\n" +
                "Ўзбекистон Республикаси Президенти ҳузуридаги Стратегик ва минтақалараро тадқиқотлар институтининг катта илмий ходими\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1996-1998 й.\n" +
                "\n" +
                "\n" +
                "Тошкент Давлат юридик институтининг катта ўқитувчиси\n" +
                "\n</p>\n" +
                "                \n" +
                "                <p>1998-2000 й.\n" +
                "\n" +
                "\n" +
                "Инсон ҳуқуқлари бўйича Ўзбекистон Республикаси миллий марказининг бўлим бошлиғи\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2000-2002 й.\n" +
                "\n" +
                "\n" +
                "Жаҳон иқтисодиёти ва дипломатия университетининг докторанти\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2002-2007 й.\n" +
                "\n" +
                "\n" +
                "Юристлар малакасини ошириш марказининг Халқаро ҳуқуқ ва инсон ҳуқуқлари кафедрасининг фан номзоди, доценти в.б. кафедра мудири\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2007–2009 й.\n" +
                "\n" +
                "\n" +
                "Ўзбекистон Республикаси Президенти ҳузуридаги Амалдаги қонун ҳужжатлари мониторинги институти халқаро ҳуқуқий тадқиқотлар гуруҳининг раҳбари\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2009-2010 й.\n" +
                "\n" +
                "\n" +
                "Ўзбекистон Республикаси Ташқи ишлар вазирлиги Шартнома-ҳуқуқ бошқармаси Халқаро шартномалар бўлими бошлиғи\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2010 –2012й.\n" +
                "\n" +
                "\n" +
                "Юристлар малакасини ошириш маркази Халқаро ҳуқуқ ва инсон ҳуқуқлари кафедрасининг фан доктори, профессори \n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2012-2013 й.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Тошкент Давлат юридик институтининг “Давлат ва ҳуқуқ тарихи” кафедраси мудири\n" +
                "\n</p>\n" +
                "                <p>2013-2014й.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Юристлар малакасини ошириш маркази Халқаро ҳуқуқ ва инсон ҳуқуқлари кафедрасининг фан доктори, профессори в.б.\n" +
                "\n</p>\n" +
                "                <p>2014 – 2018й.\n" +
                "\n" +
                "\n" +
                "Юристлар малакасини ошириш маркази Давлат –ҳуқуқий фанлар кафедрасининг мудири\n" +
                "\n</p>\n" +
                "                <p>2018- 2019 й.\n" +
                "\n" +
                "\n" +

                "\n" +
                "\n" +
                "Ўзбекистон Республикаси Бош прокуратураси Академияси Иқтисодий жиноятларга ва жиноий даромадларни легаллаштиришга қарши курашишни ташкил этиш кафедраси катта ўқитувчиси"+
                "\n</p>\n" +
                "\n" +
                "                <p>2019- ҳ./қ. Ўзбекистон Республикаси Бош прокуратураси Академияси Коррупцияга қарши курашиш илмий-таълим маркази бошлиғи</p>\n" +
                "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>Справка</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>С 10 декабря 2018 года руководитель Научно-образовательного центра по борьбе с коррупцией при Академии Генеральной прокуратуры Республики Узбекистан.</p>\n" +
                "\n" +
                "                <b>Год рождения:</b>\n" +
                "                <p>31.10.1965й</p>\n" +
                "                <b>Место рождения:</b>\n" +
                "                <p>Бухарская область</p>\n" +
                "                <b>Специальность:</b>\n" +
                "                <p>правовед</p>\n" +
                "                <b>Ранг:</b>\n" +
                "                <p>Советник юстиции</p>\n" +
                "\n" +
                "                <H2>ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ:</H2>\n" +
                "                <p>1986-1991 гг.\n" +
                "\n" +
                "\n" +
                "\tСтудент Ташкентского государственного\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1991-1994 гг.\n" +
                "\n" +
                "\n" +
                "\tАспирант Института философии и права Академии наук Республики Узбекистан\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1994-1996 гг.\n" +
                "\n" +
                "\n" +
                "Ўзбекистон Республикаси Президенти ҳузуридаги Стратегик ва минтақалараро тадқиқотлар институтининг катта илмий ходими\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>1996-1998 гг.\n" +
                "\n" +
                "\n" +
                "Старший преподаватель Ташкентского государственного юридического института\n" +
                "\n</p>\n" +
                "                \n" +
                "                <p>1998-2000 гг.\n" +
                "\n" +
                "\n" +
                "Заведующий отделом Национального центра по правам человека Республики Узбекистан\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2000-2002 гг.\n" +
                "\n" +
                "\n" +
                "Докторант Университета мировой экономики и дипломатии\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2002-2007 гг.\n" +
                "\n" +
                "\n" +
                "Кандидат наук, и.о.доцент и зав.кафедрой международного права и прав человека Центра повышения квалификации юристов\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2007–2009 гг.\n" +
                "\n" +
                "\n" +
                "Руководитель группы международно-правовых исследований Института мониторинга действующего законодательства при Президенте Республики Узбекистан\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2009-2010 гг.\n" +
                "\n" +
                "\n" +
                "Начальник отдела международных договоров Юридического управления Министерства иностранных дел Республики Узбекистан\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2010 –2012 гг.\n" +
                "\n" +
                "\n" +
                "Доктор наук, профессор кафедры международного права и прав человека Центра повышения квалификации юристов\n" +
                "\n</p>\n" +
                "\n" +
                "                <p>2012-2013 гг.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Заведующий кафедрой истории государства и права Ташкентского государственного юридического института\n" +
                "\n</p>\n" +
                "                <p>2013-2014 гг.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Доктор наук, профессор и кафедры международного права и прав человека Центра повышения квалификации юристов\n" +
                "\n</p>\n" +
                "                <p>2014 – 2018 гг.\n" +
                "\n" +
                "\n" +
                "Заведующий кафедрой государственно-правовых наук Центра повышения квалификации юристов\n" +
                "\n</p>\n" +
                "                <p>2018- 2019 гг.\n" +
                "\n" +
                "\n" +

                "\n" +
                "\n" +
                "Старший преподаватель кафедры по борьбе с экономическими преступлениями и легализацией доходов при Академии Генеральной прокуратуры Республики Узбекистан"+
                "\n</p>\n" +
                "\n" +
                "                <p>2019- н.в. Руководитель Научно-образовательного центра по борьбе с коррупцией при Академии Генеральной прокуратуры Республики Узбекистан</p>\n" +
                "              </div>\n" +
                "\n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>EDUCATIONAL BACKGROUND</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>DSc in the field of International Law, International Criminal Law and International Cooperation on\n" +
                "                  criminal matters.</p>\n" +
                "\n" +
                "                <h3>WORK EXPERIENCE</h3>\n" +
                "                <p>More than 120 years of professional experience in the field of legal assistance and legal supporting\n" +
                "                  system, developed administrative skills.</p>\n" +
                "                <p>2018-2020 Head of the Scientific and Educational Center for Combating Corruption\n" +
                "                  of the Academy of the Prosecutor General of the Republic of Uzbekistan\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  2010–2018 Head of the Department of the Center for Advanced Studies\n" +
                "                  of Lawyers of the Ministry of Justice of the Republic of Uzbekistan\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  2009-2010\tHead of the Department of the Ministry of Foreign Affairs of the Republic of Uzbekistan.\n" +
                "                </p>\n" +
                "\n" +
                "                <p>2007-2009\tTeam Leader of the Institute for Monitoring Current Legislation under the President of the Republic of Uzbekistan.</p>\n" +
                "\n" +
                "                <p>2002-2005\tHead of the Department of the Center for Advanced Studies of Lawyers of the Ministry of Justice of the Republic of Uzbekistan.</p>\n" +
                "\n" +
                "                <p>2000-2002\tdoctoral student at the University of World Economy and Diplomacy.</p>\n" +
                "\n" +
                "                <p>1996-1998\tSenior Lecturer, Tashkent State Law University, 1998–2000 Head of the Department of the National Center for Human Rights of the Republic of Uzbekistan.</p>\n" +
                "\n" +
                "                <p>1994-1996\tSenior Researcher, Institute of Strategic and Interregional Studies under the President of the Republic of Uzbekistan.</p>\n" +
                "                \n" +
                "                <p>1992-1994 \tgraduate student of the Institute of Philosophy and Law of the Academy of Sciences of the Republic of Uzbekistan.</p>\n" +
                "\n" +
                "                <p>1991-1992\tIn 1991 graduated from the Faculty of Law of Tashkent State University. carried out scientific activities combining with practical.                </p>\n" +
                "\n" +
                "                <h3>MAJOR DUTIES</h3>\n" +
                "                <p>•\tCoordination of projects and programmes\tHas been in charge of coordination of collaborative educational projects and programmes in Uzbekistan together with ministries, international and non-governmental organizations.</p>\n" +
                "\n" +
                "                <p>•\tPractical implementation of the projects and programmes\tHas actively implemented projects and programmes within the framework of UNICEF, OSCE, ICRC Participation Programme, which also included project monitoring, evaluation and reporting.</p>\n" +
                "\n" +
                "                <p>•\tOrganization of educational events\tHas organized dozens of workshops and trainings on various themes related to education together with project partners such as UNICEF, OSCE, ICRC UNESCO Representative Office in Tashkent, A. Avlony Teacher’s Training Institute, Ministry of Public Education, Ministry of Higher and Secondary Special Education, Ministry of Labour, DVV International, State Testing Centre etc.</p>\n" +
                "\n" +
                "                <p>•\tEngagement in projects and programmes on various themes\tSo far has been engaged in projects and programmes on early childhood care and education, general secondary, technical-vocational education, higher education, adult learning and education, anti-doping in sports, youth programmes, inclusive education, education for sustainable development, teacher education, education for international understanding, peace education, human rights education, global citizenship education, gender and ICT education, quality education, preventing corruption, international cooperation etc.</p>\n" +
                "\n" +
                "                <p>•\tActing as the National Coordinator\tHas been acting as the Coordinator of the Projects such as UNICEF, UNESCO in Uzbekistan.</p>\n" +
                "\n" +
                "                <p>•\tPreparation of Country-reports and statistics in the field of education\tHas been in charge of collecting data, communicating with relevant ministries for preparation of country reports, surveys, statistical data in formal and non-formal education. Author of over 40 monographs and 100 publications in the field of human rights, and anti-corruption.</p>\n" +
                "              </div>\n" +
                "\n" +
                "            </div>"
        }
    },
    {
        id: 9,
        img: "assets/img/speakers/9.jpg",
        name: {
            uz: "Raxmonqulova Nilufar",
            ru: "Rakhmonkulova Nilufar",
            en: "Rakhmonkulova Nilufar"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>Bog'lanish</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>Elektron pochta: </b>nrakhmonkulova@inbox.ru</p> \n" +
                "              <p><b>Telefon: </b>+998909186257</p> \n" +
                "              <h2>Ish tajribasi va ta'lim</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>Sanalar: </b>09/2017-hozirgacha</p> \n" +
                "              <p><b>Kasb yoki lavozim: </b>Professor</p> \n" +
                "              <p><b>Ish beruvchining ismi va manzili: </b>Jahon iqtisodiyoti va diplomatiya universiteti, Mustaqillik 54, Toshkent, O'zbekiston</p> \n" +
                "              <p><b>Biznes yoki sektor turi: </b>Ta’lim</p> \n" +
                "               </div>" +
                "<div style=\"text-align: justify;\">\n" +
                "              <p><b>Sanalar: </b>01/2014-12/2016</p> \n" +
                "              <p><b>Kasb yoki lavozim: </b>Katta ilmiy xodim (DSc)\n</p> \n" +
                "              <p><b>Ish beruvchining ismi va manzili: </b>Toshkent davlat yuridik universiteti, Sayilgoh, 35, Toshkent, O'zbekiston</p> \n" +
                "              <p><b>Biznes yoki sektor turi: </b>Tadqiqot</p> \n" +
                "               </div>" +
                "</div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>Связь</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>Эл. адрес: </b>nrakhmonkulova@inbox.ru</p> \n" +
                "              <p><b>Телефон: </b>+998909186257</p> \n" +
                "              <h2>Опыт работы и образование</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>Даты: </b>09/2017 – н.в.\n</p> \n" +
                "              <p><b>Род занятий или должность: </b>Профессор</p> \n" +
                "              <p><b>Название и адрес работодателя: </b>Университет мировой экономики и дипломатии, Мустакиллик 54, Ташкент, Узбекистан</p> \n" +
                "              <p><b>Тип деятельности или сектора: </b>Образование</p> \n" +
                "               </div>" +
                "<div style=\"text-align: justify;\">\n" +
                "              <p><b>Даты: </b>01 / 2014-12 / 2016</p> \n" +
                "              <p><b>Род занятий или должность: </b>Старший научный сотрудник (DSc)</p> \n" +
                "              <p><b>Название и адрес работодателя: </b>Ташкентский государственный юридический университет, Сайилгох, 35, Ташкент, Узбекистан</p> \n" +
                "              <p><b>Тип деятельности или сектора: </b>Исследовать</p> \n" +
                "               </div>" +
                "</div>",
            en: "<div class=\"details\">\n" +
                "              <h2>Work Experience and Education </h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p>Dates   \n" +
                "                Occupation or position held.\n" +
                "                09/2017-present\n" +
                "                Professor\n" +
                "                </p> \n" +
                "                <p>\n" +
                "                  Name and address of employer. University of World Economy and Diplomacy, Mustakillik 54, Tashkent, Uzbekistan\n" +
                "                </p>\n" +
                "\n" +
                "                <p>\n" +
                "                  Type of business or sector. Education\n" +
                "                </p>\n" +
                "              </div>\n" +
                "           <h3>Publications </h3>\n" +
                "             <p>2007-2019\tmore than forty scientific articles, theses at international and local academic journals in Uzbek, Russian and in English   </p>\n" +
                "             <p>2010\t“Civil and commercial law of foreign countries”- the textbook in Uzbek   </p>\n" +
                "             <p>2011\t“Regulation of marital relations in international private law” – the monograph in Uzbek   </p>\n" +
                "             <p>2012\t“Regulation of divorce in international private law”- the textbook in Uzbek   </p>\n" +
                "             <p>2012\t“Regulation of marriage in international private law” – the brochure in Uzbek   </p>\n" +
                "             <p>2012\t“International Family Law” – the brochure in Uzbek   </p>\n" +
                "             <p>2014\t“Current problems and prospects of development of private international law” –  the monograph in Uzbek   </p>\n" +
                "             <p>2016\t“Problems of codification of private international law” – the monograph in Uzbek   </p>\n" +
                "             <p>2019\t“International Private Law” – the hand book in Uzbek</p>\n" +
                "\n" +
                "             <h3>Additional informations  </h3>\n" +
                "             <p>Membership                         Member of Scientific Council awarding of the scientific degrees                                                                             DSc.30.08.2018.Yu.74.01 at the Tashkent State University of Law – 12.00.03 – Civil law. Business law. Family law. International private law</p>\n" +
                "            </div>"
        }
    },
    {
        id: 10,
        img: "assets/img/speakers/10.jpg",
        name: {
            uz: "Saydullaev Shakhzod",
            ru: "Saydullaev Shakhzod",
            en: "Saydullaev Shakhzod"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "              <h2>Маълумоти</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>Сентябрь 2004 – Июль 2006 \tТошкент давлат юридик университети</b></p>  \n" +
                "              <p>Давлат бошқаруви йўналиши магистри</p>\n" +
                "              <p><b>Сентябрь 2000 – Июль 2004\tТошкент давлат юридик университети</b></p>\n" +
                "              <p>Халқаро ҳуқуқ йўналиши бакалаври</p>\n" +
                "\n" +
                "              <h3>Меҳнат фаолияти</h3>\n" +
                "              <p>2020 – ҳ.в.\tТошкент давлат юридик университети Оммавий хуқуқ факультети декани\n" +
                "\twww.tsul.uz  \n</p>\n" +
                "              <p>2017 – 2020 \tТошкент давлат юридик университети Давлат хуқуқи ва назарияси кафедраси мудири </p>\n" +
                "              <p>\n" +
                "               2015–2017 \tТошкент давлат юридик университети Давлат хуқуқи ва назарияси кафедраси профессори \n" +
                "                </p>\n" +
                "                <p>2013–2015 \tТошкент давлат юридик университети Давлат хуқуқи ва назарияси кафедраси бош мутахассиси</p>\n" +
                "                <p>2006 –2013 \tТошкент давлат юридик университети Давлат хуқуқи ва назарияси кафедраси  ўқитувчиси</p>\n" +
                "              </div>\n" +
                "          \n" +
                "             \n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
                "              <h2>ИСТОРИЯ ОБРАЗОВАНИЯ</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>Сентябрь 2004 г. - июль 2006 г. Ташкентский государственный юридический институт</b></p>  \n" +
                "              <p>Магистр факультета права государственного управления</p>\n" +
                "              <p><b>Сентябрь 2000 г. - июль 2004 г. Ташкентский государственный юридический институт\n</b></p>\n" +
                "              <p>Бакалавр факультета международного права</p>\n" +
                "\n" +
                "              <h3>РАБОЧИЙ СТАЖ</h3>\n" +
                "              <p>2020 -                   действующий декан факультета публичного права Ташкентского государственного юридического университета. www.tsul.uz</p>\n" +
                "              <p>2017 - 2020              Заведующий кафедрой теории и истории государства и права Ташкентского государственного юридического университета.</p>\n" +
                "              <p>2015–2017 гг.              Доцент кафедры теории и истории государства и права Ташкентского государственного юридического университета.\t</p>\n" +
                "              <p>\n" +
                "                2013–2015 гг.             старший преподаватель кафедры теории и истории государства и права Ташкентского государственного юридического университета.\n" +
                "                </p>\n" +
                "                <p>2006–2013 гг.               Преподаватель, завуч кафедрой теории и истории государства и права Ташкентского государственного юридического института. </p>\n" +
                "              </div>\n" +
                "          \n" +
                "             \n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>EDUCATION</h2>             \n" +
                "              <div style=\"text-align: justify;\">\n" +
                "              <p><b>September 2004 – July 2006 \tTashkent State Institute of Law </b></p>  \n" +
                "              <p>Master degree in the faculty of State governance law </p>\n" +
                "              <p><b>September 2000 – July 2004\tTashkent State Institute of Law</b></p>\n" +
                "              <p>Bachelor in the faculty of International law</p>\n" +
                "\n" +
                "              <h3>WORK EXPERIENCE </h3>\n" +
                "              <p>2020 – current \tDean of the Faculty of Public Law at Tashkent State University of Law \n" +
                "                www.tsul.uz  \n" +
                "              </p>\n" +
                "              <p>2017 – 2020 \tThe head of the Department of Theory and History of State and Law at Tashkent State University of Law </p>\n" +
                "              <p>2015–2017 \tThe associate professor of the Department of Theory and History of State and Law at Tashkent State University of Law \t</p>\n" +
                "              <p>\n" +
                "                2013–2015 \tThe head teacher of the Department of Theory and History of State and Law at Tashkent State University of Law \n" +
                "                </p>\n" +
                "                <p>2006 –2013 \tThe teacher and head teacher of the Department of Theory and History of State and Law at Tashkent State Institute of Law </p>\n" +
                "              </div>\n" +
                "          \n" +
                "             \n" +
                "            </div>"
        }
    },
    {
        id: 11,
        img: "assets/img/speakers/11.jpg",
        name: {
            uz: "Sardor Bozarov",
            ru: "Sardor Bozarov",
            en: "Sardor Bozarov"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <p><b>2021 yil yanvar oyidan Toshkent davlat yuridik universiteti xalqaro xususiy huquq kafedrasi mudiri, yuridik fanlari bo’yicha falsafasi doktori (PhD).</b></p>    " +
                " <h2>Ta'lim</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Toshkent davlat yuridik instituti (bakalavr). Yurisprudensiya,\n" +
                "2001-2005 yillar. Diplom a’lo B, 011557\n" +
                "                </p>\n" +
                "                <p>Toshkent davlat yuridik instituti (magistratura). Fuqarolik huquqi, tadbirkorlik huquqi, oila huquqi, xalqaro xususiy huquq. 2005-2007 yillar. Diplom M,  026446</p>\n" +
                "              </div>\n" +
                "\n" +
                "              <h3>\n" +
                "                Ilmiy daraja:\n" +
                "              </h3>\n" +
                "              <p>1) Yuridik fanlari bo'yicha falsafa doktori. (Toshkent davlat yuridik universiteti 12.00.03 - Fuqarolik huquqi, Tadbirkorlik huquqi, Oilaviy huquq, Xalqaro xususiy huquq. Diplom 01 No 000655). 50 dan ortiq ilmiy nashrlarning muallifi</p>\n" +
                "              <h3>O'quv dasturlari:</h3>\n" +
                "              <p>1) Hindiston parlamenti. Parlament tadqiqotlari va ta'lim byurosi. \"Qonun loyihalari bo'yicha 28 -Xalqaro o'quv dasturi\". 14 fevral - 2013 yil 15 mart, Nyu -Dehli, Hindiston.</p>\n" +
                "              <p>2) Yoshlarning rivojlanishi va farovonligi 2013 yil 9-15 sentyabr, Kuala-Lumpur, Malayziya.</p>\n" +
                "              <p>3) \"Ko'cha huquqi - tirik huquq\" 2018 yil 24-30 noyabr, White & Case LLP xalqaro yuridik firmasi, Vashington, Kolumbiya shtati, AQSh.</p>\n" +
                "              <p>4) \"Chet el kontragentlari bilan shartnomalar tuzish va ular bilan nizolarni ko'rib chiqish: pudrat ishlari va hakamlik amaliyoti\". 2019 yil 5-8 noyabr, \"Huquq instituti\n" +
                "\"M-Logos\", Moskva shahri, Rossiya Federatsiyasi" +
                "              </p>\n" +
                "              <h3>Ish tajribasi:</h3>\n" +
                "              <p>1) 2007-2009. Oʻzbekiston Respublikasi Prezidenti huzuridagi Davlat boshqaruvi akademiyasi Davlat qurilishi va huquq kafedrasi mudiri</p>\n" +
                "              <p>2) 2009-2013 yillar. O'zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Toshkent islom universiteti yuridik fakulteti o'qituvchisi. (Xalqaro xususiy huquq, fuqarolik huquqi, fuqarolik protsessual huquqi)</p>\n" +
                "              <p>3)2013-2016 yillar. Toshkent davlat yuridik universiteti fuqarolik protsessual va iqtisodiy protsessual huquqi kafedrasi o'qituvchisi (Fuqarolik protsessual huquqi, Tijorat protsessual huquqi, Protsessual hujjatlar fuqarolik ishlari va iqtisodiy ishlar bo'yicha)." +
                "              <p>3.1) 2014-2017 yillar. \"Litsey va kollejlar bilan ishlash bo'limi boshlig'i\"\n" +
                "(bir vaqtning o'zida)." +
                "              </p>\n" +
                "              <p>3.2) 2018 yil. BMTTDning \"O'zbekiston Respublikasida investitsiya muhitini rivojlantirish\" loyihasining yuridik mutaxassisi (bir vaqtning o'zida).  </p>\n" +
                "              </p>\n" +
                "              <p>4) 2016-2018 yillar. Toshkent davlat yuridik universiteti Xalqaro tijorat huquqi kafedrasi katta o'qituvchisi (Xalqaro xususiy huquq, Xalqaro arbitraj, Xalqaro savdo huquqi, Erkin iqtisodiy zonalar).</p>\n" +
                "              <p>\n" +
                "                5) 2019 yil yanvardan martgacha. Toshkent davlat yuridik universiteti xalqaro tijorat huquqi kafedrasi dotsenti vazifasini bajaruvchi (Xalqaro xususiy huquq, Xalqaro arbitraj, Xalqaro savdo huquqi, Erkin iqtisodiy zonalar)." +
                "              </p>\n" +
                "\n" +
                "              <p> 6) 2019 yil martdan 2021 yilgacha. \"Enter engineering Pte. Ltd.\" xorijiy kompaniyasi yuristi. (Shartnomalar bilan ishlash: shartnomalarni tekshirish, tuzish va imzolash, huquqiy xulosalar va tavsiyalar berish. Buyurtmalar, buyruqlar, shartnomalar va boshqa yuridik xarakterdagi hujjatlar loyihalarining O'zbekiston Respublikasi qonunchiligiga muvofiqligini tekshirish. Mehnat nizolarini hal qilish. Kompaniyaning manfaatlarini himoya qilish uchun sudlarda ishtirok etish). </p>\n" +
                "              <p>7) 2021 yil yanvaridan Toshkent davlat yuridik universiteti xalqaro xususiy huquq kafedrasi mudiri, yuridik fanlari yo’nalishida falsafasi doktori (PhD). </p>\n" +
                "            </div>",
            ru: "<div class=\"details\">" +
                "<p><b>C января 2021 года Заведующий кафедрой «Международное частное право» Ташкентского государственного юридического университета, доктор философии по юридическим наукам (PhD).</b></p>"+
                "              <h2>Образование</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Ташкентский государственный юридический институт (Бакалавр). Юриспруденция, \n" +
                "2001-2005 годы. Диплом с отличием B, № 011557\n" +
                "                </p>\n" +
                "                <p>Ташкентский государственный юридический институт (Магистратура). Гражданское право, Предпринимательское право, Семейное право, Международное частное право. 2005-2007 годы. Диплом М, № 026446</p>\n" +
                "              </div>\n" +
                "\n" +
                "              <h3>\n" +
                "                Ученая степень:\n" +
                "              </h3>\n" +
                "              <p>1) Доктор философии по юридическим наукам. (Ташкентский государственный юридический университет 12.00.03 – Гражданское право, Предпринимательское право, Семейное право, Международное частное право.  Диплом 01 № 000655). Автор более 50 научных публикации..</p>\n" +
                "              <h3>Тренинговые программы:</h3>\n" +
                "              <p>1)  Парламент Индии. Бюро парламентских исследований и обучения. «28 Международная учебная программа по разработке законопроектов». 14 февраля - 15 марта 2013 г., Нью-Дели, Индия..</p>\n" +
                "              <p>2) «Развитие и процветание молодежи» 9-15 сентября 2013 г., Куала-Лумпур, Малайзия.</p>\n" +
                "              <p>3) «Street law – Живое право» 24-30 ноября 2018 года, Международная юридическая фирма White & Case LLP, Вашингтон, округ Колумбия, США.</p>\n" +
                "              <p>4) «Заключение контрактов с иностранными контрагентами и рассмотрение споров с ними: практика договроной работы и арбитража». 5-8 ноября 2019 года, «Юридический институт \n" +
                "«М-Логос», Москва сити, Российская Федерация." +
                "              </p>\n" +
                "              <h3>Опыт работы:</h3>\n" +
                "              <p>1) 2007-2009 годы. Заведующий кабинетом кафедры «Государственное строительство и право» Академии государственного управления при Президенте Республики Узбекистан.</p>\n" +
                "              <p>2) 2009-2013 годы. Преподаватель юридического факультета Ташкентского исламского университета при Кабинете Министров Республики Узбекистан. (Международное частное право, Гражданское право, Гражданское процессуальное право)</p>\n" +
                "              <p>3) 2013-2016 годы. Преподаватель кафедры «Гражданско-процессуальное и хозяйственно-процессуальное права» Ташкентского государственного юридического университета \n" +
                "(Гражданское процессуальное право, Хозяйственное процессуальное право, Процессуальные акты \n" +
                "по гражданским делам и хозяйственным делам)" +
                "              <p>3.1) 2014-2017 годы. «Начальник отдела по работе с лицеями и колледжами» \n" +
                "(по совместительству).\n" +
                "              </p>\n" +
                "              <p>2018 году. Эксперт по правовым вопросам проекта UNDP «Развитие инвестиционной среды в Республике Узбекистан» (по совместительству)..</p>\n" +
                "              </p>\n" +
                "              <p>4) 2016-2018 годы. Старший преподаватель кафедры «Международное коммерческое право» Ташкентского государственного юридического университета (Международное частное право, Международный арбитраж, Международное торговое право, Свободные экономические зоны).\n.</p>\n" +
                "              <p>\n" +
                "                5) 2019 с января по март. Исполняющий обязанности доцента кафедры «Международное коммерческое право» Ташкентского государственного юридического университета (Международное частное право, Международный арбитраж, Международное торговое право, Свободные экономические зоны).\n\n" +
                "              </p>\n" +
                "\n" +
                "              <p> 6) 2019 г. с марта по 2021 года. Юрист иностранной компании «Enter engineering Pte.Ltd». (Работа с договорами: проверка, составление и визирование договоров, выдача юридических заключений и рекомендаций. Осуществление экспертизы проектов приказов, распоряжений, договоров и иных документов правового характера, на предмет их соответствия с законодательством Республики Узбекистан. Разрешение трудовых споров. Участие в судах по защите интересов компании). \n. </p>\n" +
                "              <p>7) с января 2021 года Заведующий кафедрой «Международное частное право» Ташкентского государственного юридического университета, доктор философии по юридическим наукам (PhD). </p>\n" +
                "            </div>",
            en: "<div class=\"details\">\n" +
                "              <h2>EDUCATION</h2>\n" +
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>1. Tashkent State Institute of Law (Bachelor's degree). Jurisprudence,\n" +
                "                  2001-2005. Diploma with honors B, No. 011557\n" +
                "                </p>\n" +
                "                <p>1. Tashkent State Institute of Law (Master's degree). Civil law, Business Law, Family Law, Private\n" +
                "                  International Law. 2005-2007. Diploma M, No. 026446</p>\n" +
                "              </div>\n" +
                "\n" +
                "              <h3>\n" +
                "                Academic degree:\n" +
                "              </h3>\n" +
                "              <p>1) Doctor of Philosophy in Legal Sciences. (Tashkent State University of Law 12.00.03 – Civil Law,\n" +
                "                Business Law, Family Law, Private International Law. Diploma 01 No. 000655). Author of more than 50\n" +
                "                scientific publications.</p>\n" +
                "              <h3>Training programs:</h3>\n" +
                "              <p>1) The Parliament of India. Bureau of Parliamentary Research and Training. \"28 International Training\n" +
                "                program on the development of draft laws\". February 14 - March 15, 2013, New Delhi, India.</p>\n" +
                "              <p>2) \"Development and prosperity of youth\" on September 9-15, 2013, Kuala Lumpur, Malaysia.</p>\n" +
                "              <p>3) \"Street law-Living Law\" on November 24-30, 2018, the International Law Firm White & Case LLP,\n" +
                "                Washington, DC Columbia, USA.</p>\n" +
                "              <p>4) \"Conclusion of contracts with foreign contractors and consideration of disputes with them: the\n" +
                "                practice of contractual work and arbitration\". November 5-8, 2019, \"\n" +
                "                M-Logos Institute of Law \",Moscow City, Russian Federation.\n" +
                "              </p>\n" +
                "              <h3>Work experience:</h3>\n" +
                "              <p>2) 2007-2009. Head of the Cabinet of the Department \"State Construction and Law\" of the Academy of\n" +
                "                Public Administration under the President of the Republic of Uzbekistan.</p>\n" +
                "              <p>3) 2009-2013. Lecturer at the Law Faculty of Tashkent Islamic University under the Cabinet of Ministers\n" +
                "                of the Republic of Uzbekistan. (Private International Law, Civil Law, Civil Procedural Law)</p>\n" +
                "              <p>4) 2013-2016 years. Lecturer of the Department of \"Civil Procedural and Economic Procedural Law\" of\n" +
                "                Tashkent State University of Law\n" +
                "                (Civil procedural law, Economic procedural law, Procedural acts\n" +
                "                on civil cases and economic cases).\n" +
                "              <p>4.1) 2014-2017. \"Head of the Department for collaboration with lyceums and Colleges\"\n" +
                "                (part-time).\n" +
                "              </p>\n" +
                "              <p>4.2) in 2018. Legal expert of the UNDP project \"Development of the investment environment in the\n" +
                "                Republic of Uzbekistan\" (part-time).</p>\n" +
                "              </p>\n" +
                "              <p>5) 2016-2018 Senior Lecturer of the Department of \"International Commercial Law\" of Tashkent State\n" +
                "                University of Law (Private international law, International Arbitration, International Trade Law, Free\n" +
                "                Economic Zones).</p>\n" +
                "              <p>\n" +
                "                6) 2019 from January to March. Senior Lecturer of the Department of \"International Commercial Law\" of\n" +
                "                Tashkent State University of Law (Private international law, International Arbitration, International\n" +
                "                Trade Law, Free Economic Zones).\n" +
                "              </p>\n" +
                "\n" +
                "              <p> 7) from March , 2019 to 2021. Lawyer of the foreign company \"Enter engineering Pte. Ltd\". (Working\n" +
                "                with contracts: checking, drafting and approving contracts, issuing legal opinions and recommendations.\n" +
                "                Carrying out an expert examination of draft orders, orders, contracts and other legal documents for\n" +
                "                their compliance with the legislation of the Republic of Uzbekistan. Resolution of labor disputes.\n" +
                "                Participation in courts to protect the interests of the company). </p>\n" +
                "              <p>8) Since January 2021, Head of the Department of \"Private International Law\" of Tashkent State\n" +
                "                University of Law , Doctor of Philosophy in Legal Sciences (PhD). </p>\n" +
                "            </div>"
        }
    },

    {
        id: 12,
        img: "assets/img/speakers/12.jpg",
        name: {
            uz: "Muhammadjonov Omonulla",
            ru: "Мухаммаджанов Омонулла ",
            en: "Muhammadjanov Omonulla "
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <p>Мухаммаджонов Омонулла Зокирович 1962 йилда Тошкент шаҳрида туғилган. Маълумоти олий. У 1984 йилда Тошкент давлат университетининг юридик факультетини тугатган. 1985-1989 йилларда Москва унивеситетида кундузги  бўлим аспирантурасида тахсил кўрган. </p>    " +               
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>1989 йилдан буён илмий-педогогик фаолият олиб борган. 1989-1991 йиллар – Тошкент давлат университетининг “Давлат   қурилиши” кафедрасининг ўқитувчиси, 1991-1994 йиллар –Тошкент давлат юридик институтининг “Конституциявий ҳуқуқ” кафедраси катта ўқитувчиси, доценти, 1994-2001 йиллар –ТДЮИ “Халқаро ва қиёсий ҳуқуқ ”кафедраси мудири, 2007-2011 йиллар- ТДЮИ “Халқаро ва қиёсий ҳуқуқ ”кафедраси мудири, 2011-2012 йиллар- ТДЮИ маънавий-маърифий ишлар бўйича проректори, Ўзбекистон Республикаси Президенти ҳузуридаги Давлат бошқарув Академияси кафедра мудири, 2012-2013 йиллар –ТДЮИ ректори.2019 йилдан буён “Халқаро ҳуқуқ ва инсон ҳуқуқлари” кафедраси профессори.,\n" +                
                "                </p>\n" +
                "                <p>Муҳаммаджонов О.З.жами 150 га яқин илмий ва ўқув, ўқув-услубий иш эълон қилган, шулардан 5 монография (3 таси ҳаммуаллифликда), 9 та рисола, 5 та дарслик (2 таси ҳаммуаллифликда), хусусан, унинг иштирокида “Халқаро ҳуқуқ”, “Инсон ҳуқуқлари”, “Конституциявий ҳуқуқ” дарсликлари (ҳаммуаллифликда) тайёрлаган. У 20 дан ортиқ ўқув ва ўқув-услубий қўлланма ва 150 дан ортиқ илмий мақолалар муаллифидир. Унинг  мақолалари Испания, Франция, Германия, Россия, Корея, Қозоғистон, Польша, Япониянинг турли илмий  нашрларида чоп этилган. </p>\n" +
                "<p>Шунингдек, Муҳаммаджонов О.З. Ўзбекистон Республикаси Олий Мажлиси Қонунчилик палатаси эксперти сифатида амалдаги қонунчиликни такомиллаштиришда ўзининг муносиб ҳиссасини қўшиб келмоқда</p>\n" +
                "              <p>    Муҳаммаджонов О.З. 1993-1995 йилларда ТДЮИ, 2008-2010 йилларда ал-Фаробий номидаги Қозоқ Миллий университети қошидаги  фан доктори илмий даражасини олиш учун диссертациялар ҳимоя қилиш бўйича Ихтисослашган кенгашлар илмий котиби, аъзоси (Кенгаш раислари Ўзбекистон ФА муҳбир аъзоси А.А.Аъзамхўжаев, ЎзФАнинг академиги Ш.З.Уразаев, Қозоғистон Миллий академиясининг академиги С.С.Сартаев) бўлиб фаолият юргизган. 2012-2013 йилларда Тошкент давлат юридик институти қошидаги Д.016.15.03 фан доктори илмий даражасини олиш бўйича Ихтисослашган кенгаш раиси бўлган. 2017 йилда Тошкент давлат шарқшунослик институти қошидаги DSc.28.12.2017.5.21.02 рақамли Илмий Кенгашининг аъзоси бўлган. Унинг раҳбарлигида 2 та докторлик, 4 фан номзоди тайёрланган. Шулардан иккитаси Қозоғистон университетларининг илмий тадқиқотчилари ҳисобланади.</p>\n" +
                "<p>     2016-2020  йилларида Республика маънавият  ва маърифат Маркази томонидан мамлакатимизнинг ижтимоий-сиёсий саналари, воқеалари  муносабати  ташкил қилинган ва ўтказилган қатор ҳуқуқий, маънавий-маърифий тадбирларда, хусусан, Ўзбекистоннинг турли вилоятлари (Самарқанд, Бухоро, Навоий, Сурхондарё, Хоразм, Наманган,) ва Тошкент шаҳри туманларидаги ташкилот, муассасаларида ташкил қилинган тадбирларда фаол иштирок этган.</p>\n"+
                "<p>       Муҳаммаджонов О.З. 2013 йилда Алишер Навоий номидаги Ўзбекистон Миллий кутубхонаси томонидан ўтказилган танловда “Энг фаол китобхон”номинацияси ғолиби бўлган.  2018 йилда мамлакатимизда маънавий-маърифий ишлар самарадорлигини янги босқичига кўтариш, халқимизнинг мафкуравий иммунитетини мустаҳкамлаш мақсадида олиб борилган тарғибот ишларидаги намунали фаоллиги учун Республика маънавият ва маърифат маркази томонидан “Йилнинг энг фаол маънавият тарғиботчиси” сифатида тақдирланган. 2019 йилда  “Халқ сўзи” газетасининг “Энг яхши мақола” учун эълон қилган танловида I ўринни эгаллаган. 2021 йилда Ўзбекистон Республикаси Олий суди томонидан Ўзбекистон Журналистлари ижодий уюшмаси билан ҳамкорликда ташкил этилган “Адолат – қонун устуворлигида” танловида “Энг фаол илмий ходим” номинациясида I ўринни эгаллаган.</p>\n"+
                "<p>         О.З.Мухаммаджанов аҳолининг ҳуқуқий саводхонлиги ва ҳуқуқий маданиятини ошириш ва қонунийликни мустаҳкамлашга йўналтирилган ҳамда 2017-2021 йилларда Ўзбекистон Республикасини ривожлантиришнинг бешта устувор йўналиши бўйича Ҳаракатлар стратегиясига асосан амалга оширилаётган кенг қамровли ислоҳотларнинг мазмун моҳиятини республикамизнинг турли даврий нашрлардаги сўнгги 10 йил давомида 200 га яқин мақолалари чоп этилган.</p>\n"+
                "<p>       2012-2013 йилларда “Тошкент давлат юридик институти Ахборотномаси” журналининг бош муҳаррири, “Инсон ва қонун” газетаси, “Фуқаролик жамияти”, “Huquqshunos. Юрист” ҳуқуқий журналларининг таҳрир ҳайъати аъзоси бўлган.    Ҳозирги кунда QS рейтингида 321-ўринни эгаллаган Варшава университетининг “Studia politologiczne” илмий журнали, жаҳон олий ўқув юртларининг QS рейтингида 481-ўринни эгаллаган Абай номидаги Қозоғистон университетининг «Казахский национальный педагогический университет имени Абая ВЕСТНИК. Серия «Юриспруденция» журналининг  таҳрир ҳайъати аъзоси.  </p>\n"+
                "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">" +               
                "              <div style=\"text-align: justify;\">\n" +            
                "                <p>Мухаммаджанов Омонулла Зокирович родился в 1962 году в городе Ташкенте. Образование - высшее. В 1984 году окончил Ташкентский государственный университет по специальности «Правоведение». С 1985 по 1989 годы учился в очной аспирантуре Московского государственного университета.</p>\n" +
                "                <p>Научно-педагогической деятельностью занимается с 1989 года. 1989-1991 гг. - преподаватель кафедры государственного строительства Ташкентского государственного университета, 1991-1994 гг. - старший преподаватель, доцент кафедры конституционного права Ташкентского государственного юридического института, 1994-2001 гг. - заведующий кафедрой международного и сравнительного правоведения ТГЮИ, 2007-2011 гг. - заведующий кафедрой международного и сравнительного правоведения ТГЮИ, 2011-2012 гг. - проректор по духовно-просветительской работе ТГЮИ, заведующий кафедрой Академии государственного управления при Президенте Республика Узбекистан, 2012-2013 - ректор ТГЮУ, с 2019 года профессор кафедры «Международное право и права человека» ТГЮУ.</p>\n" +
                "                <p>Мухаммаджонов О.З. Опубликовал около 150 научных и учебных, методических работ, в том числе 5 монографий (3 в соавторстве), 9 брошюр, 5 учебников (2 в соавторстве), в том числе при его участии (в соавторстве) изданы учебники «Международное право», «Права человека», Конституционное право. Он является автором более 20 учебных пособий и более 150 научных статей. Его статьи опубликованы в различных научных журналах Испании, Франции, Германии, России, Кореи, Казахстана, Польши, Японии.</p>\n" +
                "                <p> Мухаммаджонов О.З. в 1993-1995 гг. работал ученым секретарем, членом Специализированного совета по защите диссертаций на соискание ученой степени доктора наук в Казахском национальном университете им. Аль-Фароби. В 2012-2013 годах был председателем Специализированного совета по соисканию ученой степени доктора наук Д.016.15.03 при Ташкентском государственном юридическом институте.</p>\n" +
                "                <p>В 2017 году был членом Ученого совета DSc.28.12.2017.5.21.02 при Ташкентском государственном институте востоковедения. Под его руководством подготовлено 2 доктора и 4 кандидата наук. Двое из них - исследователи из казахстанских вузов.Также Мухаммаджонов О.З. Как эксперт Законодательной палаты Олий Мажлиса Республики Узбекистан вносит достойный вклад в совершенствование действующего законодательства.</p>\n" +
                "                <p>В 2016-2020 годах принимал активное участие в мероприятиях, организованных Республиканским центром духовности и просвещения, и провел ряд юридических, духовно-просветительских мероприятий в связи с общественно-политическими датами и событиями страны, в частности, различных регионах Узбекистана (Самарканд, Бухара, Навои, Сурхандарья, Хорезм, Наманган), организациях и учреждениях Ташкента.</p>\n" +
                "                <p>Мухаммаджонов О.З. в 2013 году стал победителем конкурса «Самый активный читатель», проводимого Национальной библиотекой Узбекистана имени Алишера Навои. В 2018 году объявлен Республиканским центром духовности и просвещения «Самым активным пропагандистом года» за образцовую деятельность в пропагандистской работе по поднятию эффективности духовно-просветительской работы в нашей стране на новый уровень, укреплению идеологической неприкосновенности нашего народа.  В 2019 году занял первое место в конкурсе «Лучшая статья», опубликованная в газете «Народное слово». В 2021 году занял первое место в номинации «Самый активный исследователь» в конкурсе «Правосудие - верховенство закона», организованном Верховным судом Республики Узбекистан совместно с Творческим союзом журналистов Узбекистана.</p>\n" +
                "                <p>О.З. Мухаммаджанов опубликовал около 200 статей в различных периодических изданиях республики за последние 10 лет о содержании комплексных реформ, направленных на повышение правовой грамотности и правовой культуры населения и укрепление законности и осуществляемых в соответствии со Стратегией действий по пяти приоритетным направлениям развития Узбекистана на 2017-2021 годы.</p>\n" +
                "                <p>В 2012-2013 годах был главным редактором журнала «Вестник Ташкентского государственного юридического института», газет «Человек и закон», «Гражданское общество», «Юрист». Был членом редколлегии юридического журнала «Юрист». В настоящее время он является членом редколлегии научного журнала «Studia politologiczne» Варшавского университета, занимающий 321 место в рейтинге QS, Вестника Казахского национального педагогического университета им.Абая. Серия «Юриспруденция», занимающий 481 место в рейтинге QS.</p>\n" +
                "              </div>\n" +               
                "            </div>",
            en: "<div class=\"details\">\n" +                         
                "              <div style=\"text-align: justify;\">\n" +
                "                <p>Muhammadjanov Omonulla Zokirovich was born in 1962 in Tashkent. He graduated from Tashkent State University in 1984 with a degree in law. From 1985 to 1989 he studied full-time postgraduate studies at Moscow University.</p>\n" +              
                "                <p>He has been engaged in scientific and pedagogical activities since 1989. 1989-1991 - Lecturer at the Department of State Building, Tashkent State University, 1991-1994 - Senior Lecturer, Associate Professor, Department of Constitutional Law, Tashkent State Law Institute, 1994-2001 - Head of the Department of International and Comparative Law, Tashkent State University, 2007 -2011 - Head of the Department of International and Comparative Law, Tashkent State University, 2011-2012 - Vice-Rector for Spiritual and Educational Affairs, Tashkent State University, Head of the Academy of Public Administration under the President of the Republic of Uzbekistan, 2012-2013 - Rector of Tashkent State University. Professor of Law and Human Rights.</p>\n" +              
                "                <p>Muhammadjanov O.Z. published about 150 scientific and educational, educational and methodical works, including 5 monographs (3 co-authored), 9 pamphlets, 5 textbooks (2 co-authored), in particular, with his participation 'International Law' , 'Human Rights', 'Constitutional Law' textbooks (co-authored). He is the author of more than 20 teaching and learning manuals and more than 150 scientific articles. His articles have been published in various scientific journals in Spain, France, Germany, Russia, Korea, Kazakhstan, Poland, Japan.</p>\n" +              
                "                <p>Muhammadjonov O.Z. worked as a scientific secretary, member of the Specialized Council for the defense of dissertations for the degree of Doctor of Science at the Kazakh National University named after al-Farobi (2008-2010). In 2012-2013 he was the chairman of the Specialized Council for obtaining the degree of Doctor of Science (D.016.15.03) under the Tashkent State Law Institute. In 2017 he was a member of the Scientific Council DSc.28.12.2017.5.21.02 under the Tashkent State Institute of Oriental Studies. Under his leadership, 2 doctors and 4 candidates of sciences were trained. Two of them are researchers from Kazakh universities.</p>\n" +              
                "                <p>Also, Muhammadjonov O.Z. as an expert of the Legislative Chamber of the Oliy Majlis of the Republic of Uzbekistan makes a worthy contribution to the improvement of existing legislation</p>\n" +              
                "                <p>In 2016-2020, the Republican Education Center organized and held a number of legal and educational events in connection with the socio-political dates and events of the country, in particular, various regions of Uzbekistan (Samarkand, Bukhara, Navoi, Surkhandarya, Khorezm, Namangan) and he took an active participation in the events organized in Tashkent.</p>\n" +              
                "                <p>In 2013, Muhammadjonov O.Z. won the nomination The most active reader in the competition held by the National Library of Uzbekistan named after Alisher Navoi. In 2018, he was awarded by the Republican Center for Education as 'The most active of the year' for exemplary activity in propaganda work to raise the effectiveness of spiritual and educational work in our country to a new level, strengthening the ideology of the people. In 2019, he won in the competition for the 'Best Article' published by the newspaper 'People's Word'. In 2021, he won the first place in the nomination 'The most active researcher' in the competition 'Justice - the rule of law', organized by the Supreme Court of the Republic of Uzbekistan in cooperation with the Union of Journalists of Uzbekistan.</p>\n" +              
                "                <p>Muhammadjanov O.Z. has published about 200 articles in various periodicals of the Republic over the past 10 years on the content of comprehensive reforms aimed at increasing legal literacy and legal culture of the population and strengthening the rule of law and implemented in accordance with the Action Strategy for the five priority areas of development of the Republic of Uzbekistan in 2017-2021.</p>\n" +              
                "                <p>In 2012-2013 he was the editor-in-chief of the journal 'Bulletin of the Tashkent State Law Institute', the newspaper 'People and Law', 'Civil Society', 'Lawyer'. He was a member of the editorial board of the legal journal 'Lawyer'. Currently, the scientific journal 'Studia politologiczne' of the University of Warsaw, which is ranked 321st in the QS ranking, He is a member of the editorial board of the series 'Jurisprudence' in Kazakh National Pedagogical University named after Abaya.</p>\n" +              

                "              </div>\n" +                       
                "            </div>"
        }
    },

    {
        id: 13,
        img: "assets/img/speakers/13.jpg",
        name: {
            uz: "Юлдашева Говхержан",
            ru: "Юлдашева Говхержан",
            en: "Yuldasheva govxerjan"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <p>2020 йил 17 августдан:</p>" +               
                "              <div style=\"text-align: justify;\">\n" +
                "                <p><b>Тошкент давлат юридик университетининг “Халқаро ҳуқуқ ва инсон ҳуқуқлари” кафедраси профессори</b></p>\n" +
                "<p><b>Туғилган йили:</b> 27.09.1958</p>\n" +
                "<p><b>Туғилган жойи:</b> Туркманистон Республикаси Кўҳна-Урганч шаҳри</p>\n" +
                "<p><b>Миллати:</b> ўзбек</p>\n" +
                "<p><b>Партиявийлиги: </b> партиясиз</p>\n" +
                "<h2>МЕҲНАТ ФАОЛИЯТИ</h2>\n" +
                "<p>1977-1982 йй.	-	Қозон давлат университети талабаси</p>\n" +
                "<p>1982-1987 йй. 	-	Нукус давлат университети “Ҳуқуқшунослик” кафедраси ўқитувчиси </p>\n" +
                "<p>1987-1993 йй. 	-	Нукус давлат университети “Социология” кафедраси ўқитувчиси</p>\n" +
                "<p>1993-1995 йй. 	-	Қорақалпоқ давлат университети “Социология ва маданиятшунослик” кафедраси ўқитувчиси</p>\n" +
                "<p>1995-2000 йй. 	-	Қорақалпоқ давлат университети “Ҳуқуқшунослик” кафедраси асистенти, катта ўқитувчиси</p>\n" +
                "<p>2000-2002 йй. 	-	Қорақалпоқ давлат университети Давлат ҳуқуқи ва бошқаруви кафедраси катта ўқитувчиси, доценти</p>\n" +
                "<p>2002-2002 йй. 	-	Қорақалпоқ давлат университети Фуқаролик ва хўжалик ҳуқуқи кафедраси мудири</p>\n" +
                "<p>2002-2013 йй.	-	Тошкент давлат юридик институти Халқаро ва қиёсий ҳуқуқ кафедраси катта ўқитувчиси, вазифасини бажарувчиси, доценти, кафедра мудири вазифасини бажарувчиси, кафедраси мудири</p>\n" +
                "<p>2013-2014 йй. 	-	Тошкент давлат юридик университети Халқаро оммавий ҳуқуқ кафедраси доценти</p>\n" +
                "<p>2014-2017 йй.	-	Тошкент давлат юридик университети Ҳуқуқий тадқиқотлар маркази раҳбари</p>\n" +
                "<p>2017-2018 йй.	-	Тошкент давлат юридик университети Халқаро оммавий ҳуқуқ кафедраси профессори</p>\n" +
                "<p>2018-2020 йй.	-	Жаҳон иқтисодиёти ва дипломатия университети ЮНЕСКОнинг Халқаро ҳуқуқ ва инсон ҳуқуқлари кафедраси профессори</p>\n" +
                "<p>2020й-х.в..	-	Тошкент давлат юридик университети Халқаро ҳуқуқ ва инсон ҳуқуқлари кафедраси профессори</p>\n" +


              "              </div>\n" +
                "\n" +
                "            </div>",
            ru:  "<div class=\"details\">\n" +
            "         <p>с 17 августа 2020 года:</p>" +               
            "              <div style=\"text-align: justify;\">\n" +
            "                <p><b>профессор кафедры «Международное право и прав человека» Ташкентского государственного юридического университета </b></p>\n" +
            "<p><b>Дата рождения:</b> 27.09.1958</p>\n" +
            "<p><b>Место рождения:</b>Республика Туркменистан,город Кухна-Ургенч </p>\n" +
            "<p><b>Национальность:</b>узбечка</p>\n" +
            "<p><b>Партийность</b> беспартийная</p>\n" +
            "<h2>ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ</h2>\n" +
            "<p>1982-1987 гг. - преподаватель кафедры «Юриспруденция» Нукусского Государственного университета</p>\n" +
            "<p> 1987-1993 гг. - преподаватель кафедры «Социология» Нукусского Государственного университета</p>\n" +
            "<p>1993-1995 гг. - преподаватель кафедры «Социология и культуроведение» Каракалпакского государственного университета</p>\n" +
            "<p>1995-1996 гг. - ассистент кафедры «Юриспруденция» Каракалпакского государственного университета</p>\n" +
            "<p>1996-2000 гг. - старший преподаватель кафедры «Юриспруденция» Каракалпакского государственного университета </p>\n" +
            "<p>2000-2002 гг. - старший преподаватель кафедры «Государственное право и управление» Каракалпакского государственного университета</p>\n" +
            "<p>2002-2002 гг. - доцент кафедры «Государственное право и управление» Каракалпакского государственного университета</p>\n" +
            "<p>2002-2002 гг. - заведующая кафедрой «Гражданское и хозяйственное право» Каракалпакского государственного университета </p>\n" +
            "<p>2002-2005 гг. - старший преподаватель кафедры «Международное и сравнительное право» Ташкентского государственного юридического института</p>\n" +
            "<p>2005-2007 гг. - исполняющая обязанности доцента кафедры «Международное и сравнительное право» Ташкентского государственного юридического института </p>\n" +
            "<p>2007 -2011гг. - доцент кафедры «Международное и сравнительное право» Ташкентского государственного юридического института </p>\n" +
            "<p>2011 -2012гг. - исполняющая обязанности заведующей кафедрой «Международное и сравнительное право» Ташкентского государственного юридического института </p>\n" +
            "<p>2012-2013 гг. - заведующая кафедрой «Международное и сравнительное право» Ташкентского государственного юридического </p>\n" +
            "<p>2013-2014 гг. - доцент кафедры «Международное публичное право» Ташкентского государственного юридического университета</p>\n" +
            "<p>2014-2017гг.     - руководитель «Центр правовых исследований» Ташкентского государственного юридического университета</p>\n" +
            "<p>2017г.-2020гг. –профессор кафедры ЮНЕСКО «Международное право и права человека» Университета мировой          экономики и дипломатии </p>\n" +
            "<p>2020г.-по н.в. - профессор кафедры «Международное право и права человека» Ташкентского государственного юридического университета</p>\n" +

          "              </div>\n" +
            "\n" +
            "            </div>",
            en:  "<div class=\"details\">\n" +
            "         <p>From 2020 :</p>" +               
            "              <div style=\"text-align: justify;\">\n" +
            "                <p><b>Professor of the Department of International Law and Human Rights, Tashkent State University of Law</b></p>\n" +
            "<p><b>Born </b> 27.09.1958</p>\n" +
            "<p><b>Place of birth:</b>Republic of Turkmenistan Old-Urgench city</p>\n" +
            "<p><b>Nationality:</b> ўзбек</p>\n" +
            "<p><b>The party of secular levels: </b> N/A</p>\n" +
            "<h2>WORK EXPERIENCE</h2>\n" +
            "<p>1977-1982.	-	Student of Kazan State University</p>\n" +
            "<p>1982-1987.	-	Lecturer at the Department of Law, Nukus State University</p>\n" +            
            "<p>1987-1993.	-	Lecturer at the Department of Sociology, Nukus State University</p>\n" +            
            "<p>1993-1995.	-	Lecturer at the Department of Sociology and Cultural Studies, Karakalpak State University</p>\n" +            
            "<p>1995-2000.	-	Assistant, Senior Lecturer, Department of Law, Karakalpak State University</p>\n" +            
            "<p>2000-2002.	-	Senior Lecturer, Associate Professor, Department of State Law and Management, Karakalpak State University</p>\n" +            
            "<p>2002-2002.	-	Head of the Department of Civil and Economic Law, Karakalpak State University</p>\n" +            
            "<p>2002-2013.	-	Senior Lecturer, Acting Associate Professor, Acting Head of the Department of International and Comparative Law, Tashkent State Law Institute, Head of the Department</p>\n" +            
            "<p>2013-2014.	-	Tashkent State University of Law, Associate Professor of International Public Law</p>\n" +            
            "<p>2014-2017.	-	Head of the Center for Legal Research, Tashkent State University of Law</p>\n" +            
            "<p>2017-2018.	-	Professor of the Department of International Public Law, Tashkent State University of Law</p>\n" +            
            "<p>2018 -2020 .	-	University of World Economy and Diplomacy, UNESCO Professor of the Department of International Law and Human Rights</p>\n" +            
            "<p>2020 - present.	-	Professor of the Department of International Law and Human Rights, Tashkent State University of Law</p>\n" +                             

          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 14,
        img: "assets/img/speakers/14.jpg",
        name: {
            uz: "Axmedshayeva Mavlyuda ",
            ru: "Ахмедшаева Мавлюда ",
            en: "Akhmedshaeva Mavluda"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <p><b>Davlat va huquq nazariyasi kafedrasi </b></p>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
                "<p>Umumiy staji: 44 yil</p>\n" +   
                "<p>Kasbiy staji: 23 yil </p>\n" +            
                "<p>Lavozimi: Professor</p>\n" +            
                "<p>Ilmiy unvoni: Professor</p>\n" +            
                "<p>Ilmiy darajasi: Yuridik fanlar doktori.</p>\n" +            
                "<p>Ilmiy faoliyat yo`nalishi: 12.00.01 – Davlat va huquq nazariyasi va tarixi; Huquqiy ta’limotlar tarixi</p>\n" +            
                "<p>Davlat va huquq nazariyasi bo‘yicha mutaxassis.</p>\n" +            
                "<p>1951-yil 15-fevralda Toshkent viloyatida tug‘ilgan. </p>\n" +            
                "<p>1976-yili Toshkent davlat universitetining yuridik fakultetining kunduzgi bo‘limini tugatgan. </p>\n" +            
                "<p>1976-1997-yillarda O‘zbekiston Respublikasi Fanlar akademiyasining I.Mo‘minov nomidagi Falsafa va huquq institutida ilmiy xodim bo‘lib ishlagan.</p>\n" +  
                "<p>1997-yili 12.00.02. – Davlat huquqi va  boshqaruvi; ma'muriy huquq; moliya huquqi ixtisosligi bo‘yicha yuridik fanlar nomzodi ilmiy darajasi berilgan.(O‘zbekiston Respublikasi Prezidenti huzuridagi Davlat va jamiyat qurilishi Akademiyasi, mavzu: — “Organizatsionno-pravovыe voprosы gosudarstvennogo upravleniya v sfere kulturы”)</p>\n" +            
                "<p>2011-yili 12.00.01 – Davlat va huquq nazariyasi va tarixi; huquqiy ta'limotlar ixtisosligi yuridik fanlari doktori ilmiy darajasi berilgan.(Toshkent davlat yuridik instituti, mavzu: — “Davlat hokimiyati tizimida ijro hokimiyati”)</p>\n" +            
                "<p>2011-2013-yillarda TDYuI huzuridagi dissertatsiyalar himoyasi bo‘yicha Ilmiy Kengash a'zosi.</p>\n" +            
                "<p>2017-2019-yillarda O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi OAK qoshidagi Ekspertlar Kengashi a'zosi.</p>\n" +            
                "<p>2020-yil yanvaridan TDYuU huzuridagi ilmiy darajalar beruvchi Dsc.07/30.12.2019.yu.22.02 raqamli ilmiy kengash a'zosi va ushbu Kengash huzuridagi Ilmiy seminar raisi.</p>\n" +            
                "<p>2014-yildan TDYU da chop etilgan Yuridik fanlar axborotnomasi / Вестник юридических наук / Review of law sciences» va «O` z b e k i s t o n q o n u n c h i l i g i t a h l i l i ♦ U z b e k  l a w  r e v ie w ♦ О б з о р з а к о н о д а т е л ь с т в а Уз б е к и с т а н а» jurnali hamda “Huquqiy tadqiqotlar” electron ilmiy jurnali tahrir hay’ati a’zosi.  </p>\n" +                       

              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <p><b>Кафедра теории государства и права</b></p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Общий стаж: 44 года</p>\n" +  
            "<p>Профессиональный стаж: 23 года</p>\n" +   
            "<p>Должность: профессор</p>\n" +   
            "<p>Ученое звание: профессор.</p>\n" +   
            "<p>Ученая степень: доктор наук. Доктор юридических наук, профессор.</p>\n" +   
            "<p>Направление научной деятельности: 12.00.01 – Теория и история государства и права; история правовых учений</p>\n" +   
            "<p>Специалист в области теории государства и права Родилась 15 февраля 1951 года в Ташкентской области.</p>\n" +   
            "<p>В 1976 году окончила дневное отделение юридического факультета Ташкентского государственного университета.</p>\n" +   
            "<p>С 1976 по 1997 год работала  научным сотрудником Института философии и права имени И. Муминова Академии наук Республики Узбекистан.</p>\n" +   
            "<p>В 1997 году присвоена научная степень  кандидата юридических наук  по специальности 12.00.02 - Государственное право и управление; административное право; финансовое право (Академия государственного и общественнного строительства при Президенте Республики Узбекистан, тема диссертации: - «Организационно-правовые вопросы государственного управления в сфере культуры»)</p>\n" +   
            "<p>В 2011 году присвоена научная степень  доктора  юридических наук  по специальности 12.00.01 – Теория и история государства и права; история правовых учений (Ташкентский государственный юридический институт, тема: - «Исполнительная власть в системе государственной власти»)</p>\n" +   
            "<p>С 2011 по 2013 год  являлась членом Ученого совета по защите диссертаций при Ташкентском государственном  юридическом университете.</p>\n" + 
            "<p>В 2017-2019 годах являлась членом Экспертного совета  ВАК при Кабинете Министров Республики Узбекистан.</p>\n" +   
            "<p>С января 2020 года она является членом Ученого совета Dsc.07 / 30.12.2019.yu.22.02, по присуждению  ученых степеней  при ТГЮУ,  также председателем Научного семинара при этом Совете.Член редколлегии   журнала «Юридик фанлар ахборотномаси / Вестник юридических наук / Review of law sciences», «Ўз б е к и с т о н  к о н у н ч и л и г и   т а х л и л и ♦ U z b e k  l a w  r e v ie w ♦ О б з о р з а к о н о д а т е л ь с т в а Уз б е к и с т а н а», также, электронного научного журнала «Правовые исследования.</p>\n" +              

           
          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <p><b>Department of Theory of State and Law</b></p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Total experience: 44 years</p>\n" +  
            "<p>Professional experience: 23 years</p>\n" +  
            "<p>Position: professor</p>\n" +  
            "<p>Academic title: professor.</p>\n" +  
            "<p>Academic degree: Doctor of Science. Doctor of Law, Professor.</p>\n" +  
            "<p>Direction of scientific activity: 12.00.01 – Theory and history of State and law; history of legal doctrines</p>\n" +  
            "<p>Specialist in the field of theory of state and law Was born on February 15, 1951 in the Tashkent region.</p>\n" +  
            "<p>In 1976 she graduated from the full-time department of the law faculty of Tashkent State University.</p>\n" +  
            "<p>From 1976 to 1997 she worked as a researcher at the Institute of Philosophy and Law named after I. Muminov of the Academy of Sciences of the Republic of Uzbekistan.</p>\n" +  
            "<p>In 1997 she was awarded the scientific degree of candidate of legal sciences in the specialty 12.00.02 - State law and management; administrative law; financial law (Academy of State and Public Construction under the President of the Republic of Uzbekistan, dissertation topic: - 'Organizational and legal issues of public administration in the field of culture')</p>\n" +  
            "<p>In 2011 she was awarded the scientific degree of Doctor of Law in the specialty 12.00.01 - Theory and history of state and law; history of legal doctrines (Tashkent State Law Institute, topic: - 'Executive power in the system of state power')</p>\n" +  
            "<p>From 2011 to 2013 she was a member of the Academic Council for the defense of dissertations at the Tashkent State University of Law.</p>\n" +  
            "<p>In 2017-2019, she was a member of the Expert Council of the Higher Attestation Commission under the Cabinet of Ministers of the Republic of Uzbekistan.</p>\n" +  
            "<p>Since January 2020, she is a member of the Academic Council Dsc.07 / 30.12.2019.yu.22.02, for the award of academic degrees at TSUL, also the chairman of the Scientific Seminar at this Council.</p>\n" +  
            "<p>Member of the editorial board of the journal 'Yuridik fanlar akhborotnomasi / Bulletin of legal sciences / Review of law sciences'Uzbeklawrev ie w ♦ About an overview of the uzbekistan's sup port ', as well as the electronic scientific journal' Legal Research.</p>\n" +            
          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },
    

    {
        id: 15,
        img: "assets/img/speakers/15.jpg",
        name: {
            uz: "Махмудов Алишер",
            ru: "Махмудов Алишер",
            en: "Makhmudov Alisher"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
            "<p>2019 йил 23 сентябрдан</p>\n" +
                "         <p><b>Ўзбекистон Республикаси Бош прокуратураси қонунийлик ва ҳуқуқ-тартиботни таъминлаш муаммоларини таҳлил қилиш бошқармаси бошлиғи</b></p>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
                "<p>Туғилган йили: 03.07.1984</p>\n" +  
                "<p>Туғилган жойи: Бухоро вилояти, Бухоро шаҳри</p>\n" +   
                "<p>Маълумоти бўйича мутахассислиги	юриспруденция, давлат бошқаруви</p>\n" +   
                "<p>Илмий даражаси: Юридик фанлар бўйича фалсафа доктори (PhD) </p>\n" +   
                "<p>Даражали унвони: адлия катта маслаҳатчиси 29.08.2020 й.</p>\n" +   
                "<h2>МЕҲНАТ  ФАОЛИЯТИ:</h2>\n" +   
                "<p>2002-2006 йй.	-	Тошкент давлат юридик институти талабаси</p>\n" +   
                "<p>2007-2010 йй.	-	Ўзбекистон Республикаси Олий Мажлиси Сенати девони Умумий бўлимининг стенографист-котиби</p>\n" +   
                "<p>2010-2013 йй.	-	Ўзбекистон Республикаси Олий Мажлиси Сенати раҳбарияти ҳузуридаги котибият референти</p>\n" +   
                "<p>2013-2015 йй.	-	Ўзбекистон Республикаси Президенти ҳузуридаги Давлат бошқаруви академияси тингловчиси</p>\n" +   
                "<p>2015-2017 йй.	-	Ўзбекистон Республикаси Олий Мажлиси Сенати девони юридик бўлими катта референти, бўлим мудирининг ўринбосари</p>\n" +   
                "<p>2017-2018 йй.	-	Ўзбекистон Республикаси Олий Мажлиси Сенати девони Ахборот-таҳлил бўлими мудири</p>\n" +   
                "<p>2018-2018 йй.	-	Ўзбекистон Республикаси Олий Мажлиси Сенати девони раҳбари ўринбосари – Ахборот-таҳлил бўлими мудири</p>\n" +   
                "<p>2018-2019 йй.	-	Ўзбекистон Республикаси Бош прокуратураси қонунийлик ва ҳуқуқ-тартиботни таъминлаш муаммоларини таҳлил қилиш бошқармаси катта прокурори, бошлиқ ўринбосари</p>\n" + 
                "<p>2019 й. - ҳ.қ.	-	Ўзбекистон Республикаси Бош прокуратураси қонунийлик ва ҳуқуқ-тартиботни таъминлаш муаммоларини таҳлил қилиш бошқармаси бошлиғи</p>\n" +                 
               
              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "<p>С 23 сентября 2019 г.</p>\n" +
            "         <p><b>Начальник Управления анализа проблем правоохранительной деятельности Генеральной прокуратуры Республики Узбекистан </b></p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
          "<p>Год рождения: 03.07.1984</p>\n" +
          "<p>Место рождения: Бухарская область, Г. Бухара</p>\n" +
          "<p>Ученая степень: Доктор философских наук (PhD) в области права</p>\n" +
          "<h2>ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ:</h2>\n" +
          "<p>2002-2006 гг.	-	Студент Ташкентского государственного юридического института</p>\n" +
          "<p>2007-2010 гг.	-	Стенографист-секретарь Генерального Управления Сената Олий Мажлиса Республики Узбекистан</p>\n" +
          "<p>2010-2013 гг.	-	Референт Секретариата при Сенате Олий Мажлиса Республики Узбекистан</p>\n" +
          "<p>2013-2015 гг.	-	Студент Академии государственного управления при Президенте Республики Узбекистан</p>\n" +
          "<p>2015-2017 гг.	-	Старший помощник юридического отдела Сената Олий Мажлиса Республики Узбекистан, заместитель заведующего отделом</p>\n" +
          "<p>2017-2018 гг.	-	Заведующий информационно-аналитическим отделом Сената Олий Мажлиса Республики Узбекистан </p>\n" +
          "<p>2018-2018 гг.	-	Заместитель руководителя Аппарата Сената Олий Мажлиса Республики Узбекистан - начальник информационно-аналитического управления</p>\n" +
          "<p>2018-2019 гг.	-	Старший прокурор, заместитель начальника Управления по анализу проблем законности и правоприменения Генеральной прокуратуры Республики Узбекистан</p>\n" +
          "<p>2019 й. – с.д	-	Начальник управления анализа проблем правоохранительной деятельности Генеральной прокуратуры Республики Узбекистан</p>\n" +


           
          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "<p>From September 23, 2019</p>\n" +
            "         <p><b>Head of the Office for Analysis of Legality and Law Enforcement Issues of the General Prosecutors Office of the Republic of Uzbekistan</b></p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Year of birth: 03.07.1984</p>\n" +  
            "<p>Place of birth: Bukhara region, Bukhara city</p>\n" +  
            "<p>Specialty in education: jurisprudence, public administration</p>\n" +  
            "<p>Academic degree: Doctor of Philosophy (PhD) in Law </p>\n" +  
            "<h2>Work experience</h2>\n" +  
            "<p>2002-2006 yy.	-	Student of Tashkent State Law Institute            </p>\n" +  
            "<p>2007-2010 yy.	-	Stenographer-Secretary of the General Department of the Senate of the Oliy Majlis of the Republic of Uzbekistan            </p>\n" +  
            "<p>2010-2013 yy.	-	Assistant of the Secretariat under the leadership of the Senate of the Oliy Majlis of the Republic of Uzbekistan</p>\n" +  
            "<p>2015-2017 yy.	-	Senior Assistant of the Legal Department of the Senate of the Oliy Majlis of the Republic of Uzbekistan, Deputy Head of the Department            </p>\n" +  
            "<p>2017-2018 yy.	-	Head of the Information and Analysis Department of the Senate of the Oliy Majlis of the Republic of Uzbekistan</p>\n" +  
            "<p>2018-2018 yy.	-	Deputy Head of the Office of the Senate of the Oliy Majlis of the Republic of Uzbekistan - Head of the Information and Analysis Department            </p>\n" +  
            "<p>2018-2019 yy.	-	Senior Prosecutor, Deputy Chief of the Office for Analysis of Legality and Law Enforcement Problems of the Prosecutor General's Office of the Republic of Uzbekistan            </p>\n" +  
            "<p>2019 y. - present	-	Head of the Office for Analysis of Law Enforcement Problems of the Prosecutor General's Office of the Republic of Uzbekistan</p>\n" +  

           "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 16,
        img: "assets/img/speakers/16.jpg",
        name: {
            uz: "Мусаев Бекзод",
            ru: "Мусаев Бекзод Турсунбоевич",
            en: "Musaev Bekzod Tursunboevich"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <p><b>Конституциявий ҳуқуқ кафедраси мудири, юридик фанлари бўйича фалсафа доктори (PhD), доцент</b></p>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
       "<p><b>Илмий қизиқишлари соҳаси:</b>Конституциявий ҳуқуқ, Халқаро хусусий ҳуқуқ</p>\n"+
       "<p>2018-2020-йилларда Илмий даражалар берувчи Илмий кенгаш котиби</p>\n"+
       "<p>2020 йил январдан Ўзбекистон Республикаси Конституциявий судининг Илмий-маслаҳат кенгаши аъзоси.</p>\n"+
       "<p>Илмий фаолиятнинг йўналишлари ва ютуқлари: 100 дан ортиқ ўқув ва илмий ишлар муаллифи, улар қаторида 4 та монография, 105 та мақола, 6 та дарслик (ҳаммуаллифликда), 5 та рисола шулар жумласидан.</p>\n"+
       "<p><b>Мурожаат учун: </b>e-mail: bek.yurist@gmail.com</p>\n"+
       "<p></p>\n"+

              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <p><b>Заведующий кафедрой конституционного права, доктор философских наук (PhD), доцент</b></p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Сфера научных интересов: конституционное право, международное частное право</p>\n" +  
            "<p>2018- 2020 гг Секретарь Ученого совета, присуждающего ученые степени</p>\n" +  
            "<p>С января 2020 года Член Научно-консультативного совета Конституционного суда Республики Узбекистан </p>\n" +  
            "<p>Направления и достижения научной деятельности: автор более 100 учебных и научных работ, в том числе 4 монографий, 105 статей, 6 учебников (в соавторстве), 5 брошюр.</p>\n" +  
            "<p><b>Контакты: </b>e-mail: bek.yurist@gmail.com</p>\n" +            

           
          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <p><b>Head of the Department of Constitutional Law, PhD in Law, Associate Professor</b></p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Field of research interests: Constitutional law, private international law.</p>\n" +  
            "<p>Secretary of the Academic Council 2018-2020.</p>\n" +  
            "<p>Member of the Scientific Advisory Board of the Constitutional Court of the Republic of Uzbekistan since January 2020.</p>\n" +  
            "<p>Directions and achievements of scientific activity: author of more than 100 educational and scientific works, including 4 monographs, 105 articles, 6 textbooks (in co-authorship), 5 pamphlets.</p>\n" +  
            "<p><b>e-mail address: </b>bek.yurist@gmail.com</p>\n" +  
            "<p></p>\n" + 
            "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 17,
        img: "assets/img/speakers/17.jpg",
        name: {
            uz: "Сафаров Джахонгир",
            ru: "Сафаров Джахонгир",
            en: "Safarov Djaxongir"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <p><b>Иш жойи ва лавозими: </b>Вазирлар Маҳкамаси Юридик таъминлаш бошқармаси бўлим мудири</p>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
       "<p><b>Асосий илмий ютуқлари:</b>  юридик фанлар доктори (2018), доцент (2014). 10 дан ортиқ дарслик, монография ва ўқув қўлланмалар муаллифи (ҳаммуаллифи). Жами 100 дан зиёд, шу жумладан, хорижий давлатларда 20 дан ортиқ  илмий мақолалари чоп этилган. </p>\n"+ 
       "<p>Ўзбекистон Республикасида юридик фанларни ривожлантириш бўйича мувофиқлаштирувчи кенгаш, Инновацион ривожланиш вазирлиги ҳузуридаги Ҳуқуқ йўналиши бўйича илмий-техник кенгаш, Қонунчилик муаммолари ва парламент тадқиқотлари институтининг Илмий-эксперт кенгаши, Тошкент давлат юридик университети ҳузуридаги илмий кенгаш  аъзоси. </p>\n"+ 
       "<p>Тадқиқот мавзуси: “Экологик қонунчиликни тизимлаштириш ва кодификациялаш масалалари” (2011), “Экологик қонунчилик тизими ва уни кодификациялаш истиқболлари” (2018). </p>\n"+ 
       "<p>Экология ҳуқуқи, экологик сиёсат, экологик қонунчилик, қонунчилик,  норма ижодкорлиги, ҳуқуқий сиёсат каби йўналишларда илмий изланишлар олиб боради. </p>\n"+ 

     

              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <p><b>Место работы и занимаемая должность: </b>начальник Управления правового обеспечения Кабинета Министров.</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Основные научные достижения: доктор юридических наук (2018 г.), доцент (2014 г.). Автор (соавтор) более 10 учебников, монографий и учебников. Всего более 100, в том числе в зарубежных странах</p>\n" +  
            "<p>Опубликовал более 20 научных статей.</p>\n" +  
            "<p>Он является членом Координационного совета по развитию юридических наук в Республике Узбекистан, Научно-технического совета по праву при Министерстве инновационного развития, Научно-экспертного совета Института проблем законодательства и парламентских исследований, Академического Совет при Ташкентском государственном юридическом университете.</p>\n" +  
            "<p>Тема исследования: «Проблемы систематизации и кодификации экологического законодательства» (2011 г.), «Система экологического законодательства и перспективы его кодификации» (2018 г.).</p>\n" +  
            "<p>Проводит исследования в таких областях, как экологическое право, экологическая политика, экологическое законодательство, законодательство, нормотворчество, правовая политика.</p>\n" +                 
           
          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <p><b>Place of work and position: </b>Head of the Legal Support Department of the Cabinet of Ministers</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
   "<p><b>Main scientific achievements: </b> Doctor of Law (2018), Associate Professor (2014).</p>\n"+ 
   "<p>Author (co-author) of more than 10 textbooks, monographs and textbooks. In total, more than 100, including in foreign countries</p>\n"+ 
   "<p>He has published more than 20 scientific articles.</p>\n"+ 
   "<p>He is a member of the Coordinating Council for the Development of Legal Sciences in the Republic of Uzbekistan, the Scientific and Technical Council for Law under the Ministry of Innovation Development, the Scientific Expert Council of the Institute of Legislative Problems and Parliamentary Research, the Academic Council at Tashkent State University of Law.</p>\n"+ 
   "<p><b>Research topic: </b>'Issues of systematization and codification of environmental legislation' (2011), 'System of environmental legislation and prospects for its codification' (2018).</p>\n"+ 
   "<p>Conducts research in areas such as environmental law, environmental policy, environmental legislation, legislation, rule-making, legal policy.</p>\n"+ 

          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 18,
        img: "assets/img/speakers/18.jpg",
        name: {
            uz: "АЛИБАЕВА ГУЛЬНАР",
            ru: "АЛИБАЕВА ГУЛЬНАР",
            en: "ALIBAYEVA GULNAR"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <h2><b>Ta’lim</h2>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
       "<p>1980-1982 yillar - Taldiko'rg'on yuridik kolleji, mutaxassislik: - Yurist 1982-1986 yillar - Sverdlovsk yuridik instituti, mutaxassislik: - Yurist 1995-1998 yillar - Al-Farobiy nomidagi Qozog'iston milliy universiteti aspiranti</p>" +
       "<h2>Ilmiy daraja, ilmiy unvon</h2>\n" +
       "<p>Yuridik fanlari doktori, professor - 'Qozog'iston Respublikasi ijroiya hokimiyati organlarining huquqiy maqomini oshirishning nazariy muammolari' mavzusidagi dissertatsiya, mutaxassislik: 12.00.02 - Yurisprudensiya</p>\n"+
       "<h2>Ish tajribasi</h2>\n"+
       "<p>1986-1988 yillar - qo'rg'oshin-kislotali akkumulyatorlar zavodining yuristi (Taldiko'rg'on)</p>\n"+
       "<p>1988-1995 yillar - Taldiko'rg'on yuridik kolleji o'qituvchisi</p>\n"+
       "<p>1995-1998 yillar - Al-Forobiy nomidagi KazDU., D.A.Kunaev nomidagi universitet</p>\n"+
       "<p>1995-yildan hozirgi kungacha – D.A.Kunaev nomidagi Evrosiyo yuridik akademiyasi</p>\n"+
       "<p>1995 - 1998 yillar - Al-Forobiy nomidagi KazDU katta o'qituvchisi, davlat va huquqiy fanlar kafedrasi mudiri o'rinbosari; yuridik fakultet dissertatsiyalar kengashining texnik kotibi</p>\n"+
       "<p>1998 - 2005 yillar - Universitet dekani, konstitutsiyaviy va xalqaro huquq kafedrasi dotsenti</p>\n"+
       "<p>2002 - 2011 yillar - Konstitutsiyaviy va xalqaro huquq kafedrasi dotsenti, Dissertatsiya kengashining ilmiy kotibi</p>\n"+
       "<p>2011 - 2015 yillar - ilmiy ishlar va xalqaro aloqalar bo'yicha prorektor, konstitutsiyaviy va xalqaro huquq kafedrasi professori, Qirg'iziston Respublikasi hukumati huzuridagi Qirg'iziston davlat yuridik akademiyasi dissertatsiya kengashi a'zosi. Qozog'iston Respublikasi Ta'lim va fan vazirligi Ta'lim va fan qo'mitasi Ekspert kengashi raisi o'rinbosari</p>\n"+
       "<p>2011-yildan hozirgi kungacha – D.A.Kunaev nomidagi Evrosiyo yuridik akademiyasi Ilmiy ishlar va xalqaro aloqalar bo'yicha prorektor, konstitutsiyaviy va xalqaro huquq kafedrasi professori, Evroosiyo yuridik akademiyasining 'Vestnik', 'Qozog'iston xalqaro huquq jurnali' jurnallari bosh muharriri D.A. Qunaev.</p>\n"+
       "<p></p>\n"+     
              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <h2><b>Образование</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
           "<p>1980-1982 гг. Талдыкорганский юридический техникум, спец. – Юрист</p>\n"+
           "<p>1982-1986 гг. Свердловский юридический институт, спец. – Юрист</p>\n"+
           "<p>1995-1998 гг. Аспирантура  в Казахском Национальном университете им. аль-Фараби</p>\n"+
           "<h2>Ученая степень, уче-ное звание</h2>\n"+
           "<p>Доктор юридических наук,  профессор - диссертация  на тему: «Теорети-ческие проблемы совершенствования правового статуса органов испол-нительной власти Республики Казахстан», спец. 12.00.02 – Юриспруден-ция</p>\n"+
           "<h2>Опыт работы </h2>\n"+
           "<p>1986-1988 гг – юрист  Завода свинцовых аккумуляторов (г. Талдыкорган)  </p>\n"+
           "<p>1988-1995 гг – преподаватель Талдыкорганского юридического техникума</p>\n"+
           "<p>1995-1998 гг -  КазНУ им. аль-Фараби, Университет им. Д.А. Кунаева</p>\n"+
           "<p>1995 г. - по настоящее время – Евразийская юридическая академия им. Д.А. Кунаева:</p>\n"+
           "<p>1995 – 1998 гг - Старший преподаватель заместитель заведующего кафедрой государственно-правовых дисциплин; технический секретарь диссертационного совета  юридического факультета КазНу им. аль-Фараби</p>\n"+
           "<p>1998 - 2005 гг.- Декан Университета, доцент кафедры конституционного и международного права</p>\n"+
           "<p>2002 – 2011гг.- Доцент кафедры конституционного и международного права, ученый секретарь диссертационного совета</p>\n"+
           "<p>2011 – 2015 гг. -  Проректор по научно-исследовательской работе и международным связам, профессор кафедры Конституционного и международного права, член Диссертационного совета   Кыргызской государственной юридической академии при Правительстве Республики Кыргызстан. Заместитель председателя экспертного совета комитета в сфере образования и науки МОН РК </p>\n"+
           "<p>2011 г.  -  по настоящее время - проректор по научно-исследовательской работе и международным связам, профессор кафедры Конституционного и международного права, главный редактор журналов «Вестник», «Казахстанский журнал международного права» Евразийской юридической академии Д.А. Кунаева.</p>\n"+
   



          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <h2><b>Education</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
  "<p>1980-1982 - Taldykorgan law college, speciality - Lawyer</p>\n"+
  "<p>1982-1986 - Sverdlovsk Law Institute, speciality - Lawyer</p>\n"+
  "<p>1995-1998 - Postgraduate studies at the Kazakh National University named after al-Farabi</p>\n"+
  "<h2>Academic degree, title</h2>\n"+
  "<p>Doctor of Law, Professor - dissertation on the topic: 'Theoretical problems of improving the legal status of the executive authorities of the Republic of Ka-zakhstan', speciality 12.00.02 - Jurisprudence</p>\n"+
  "<h2>Work experience</h2>\n"+
  "<p>1986-1988 - Lawyer at the Lead-Acid Batteries Plant (Taldykorgan)</p>\n"+
  "<p>1988-1995 - Lecturer at Taldykorgan Law College</p>\n"+
  "<p>1995-1998 - KazNU named after I. al-Farabi, University. YES. Kunaeva</p>\n"+
  "<p>1995 - present - Eurasian Law Academy named after YES. Kunaeva:</p>\n"+
  "<p>1995 - 1998 - Senior Lecturer, Deputy Head of the Department of State and Legal Disciplines; technical secretary of the dissertation council of the law faculty of KazNu named after al-Farabi</p>\n"+
  "<p>1998 - 2005 - Dean of the University, Associate Professor of the Department of Constitutional and International Law</p>\n"+
  "<p>2002 - 2011 - Associate Professor of the Department of Constitutional and International Law, Scientific Secretary of the Dissertation Council</p>\n"+
  "<p>2011 - 2015 - Vice-rector for research and international relations, professor of the Department of Constitutional and International Law, member of the Dissertation Council of the Kyrgyz State Law Academy under the Government of the Republic of Kyrgyzstan. Deputy Chairman of the Expert Council of the Committee in Education and Science of the Ministry of Education and Science of the Republic of Kazakhstan</p>\n"+
  "<p>2011 - present - Vice-Rector for Research and International Relations, Professor of the Department of Constitutional and International Law, editor-in-chief of the magazines 'Vestnik', 'Kazakhstan Journal of International Law' of the Eurasian Law Academy D.A. Kunaev.</p>\n"+



          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 19,
        img: "assets/img/speakers/19.jpg",
        name: {
            uz: "АНДРEЙ ДАҲДАЛ",
            ru: "ЭНДРЮ ДАХДАЛ",
            en: "ANDREW DAHDAL"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <h2>АКАДEМИК ЮТУҚЛАРИ</h2>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
      "<p>PhD (Фалсафа доктори) (2013), Жанубий Уэлс университети(UNSW). Сидней, Австралия. (2014 UNSW PhD Мукаммаллик мукофоти)</p>\n" +
      "<p>Ҳуқуқ амалиёти битирувчиси дипломи, (2009) юридик коллеж, Сент- Леонардс, Сидней, Австралия.</p>\n" +
      "<p>Тижорат бакалаври (иқтисод) / ҳуқуқ бакалаври  битирувчиси (2004), Маккуайр университети, Сидней, Австралия.</p>\n" +
      "<h2>ЛАВОЗИМЛАР</h2>\n" +
      "<p>2021 йил – ҳ.в.  – Тижорат йўналишида доцент, Ҳуқуқ мактаби, Қатар университети, Қатар</p>\n" +
      "<p>2015 - 2021 – доцент, Қатар университети, ҳуқуқ  мактаби, Қатар университети, Қатар.</p>\n" +
      "<p>2018 йил (январ - апрел) – доцент ёрдамчи, Индиана университети Пенсилвания штати (АҚШ) ва Женин Aраб  Америка университети (Фаластин)  </p>\n" +
      "<p>2016 - 2018  –  ёрдамчи профессор, Падуа университети, Италия.</p>\n" +
      "<p>2010-2015 Маккуайер университети, бизнес ва иқтисодиёт факультети, бизнес ҳуқуқи ўқитувчи, Австралия.</p>\n" +
      "<p>2005 - 2010 –  доцент, ҳуқуқ кафедраси, Маккуайер университети, Австралия</p>\n" +
      "<h2>ТАДҚИҚОТ ГРАНТЛАРИ</h2>\n" +
      "<p>2019 QNRF –  “Fin tech and Reg tech” Қатарда ХХI аср мустаҳкам, инклюзив ва рақобатбардош ҳуқуқий ва меъёрий - базани яратиш( 579,000 АҚШ доллари)</p>\n" +
      "<p>2016 йил –  (QUINTERNAL) 'Қатардаги молиявий ҳолатни  тартибга солиш таҳлили”: 2005 йилдан ҳозирги кунгача'. (18 000 АҚШ доллари)</p>\n" +
     


              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <h2><b>АКАДЕМИЧЕСКИЕ ПОЛНОМОЧИЯ</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>Доктор философии (2013 г.), Университет Нового Южного Уэльса (UNSW), Сидней, Австралия. (Премия UNSW PhD Excellence Award 2014)</p>\n" +
            "<p>Диплом об окончании юридической практики (2009 г.), юридический колледж, Сент-Леонардс, Сидней, Австралия.</p>\n" +
            "<p>Бакалавр коммерции (экономика) / бакалавр права (с отличием) (2004 год), Университет Маккуори, Сидней, Австралия.</p>\n" +
            "<h2>ПОЗИЦИИ</h2>\n" +
            "<p>2021 - настоящее время Доцент, юридический колледж, Катарский университет, Катар</p>\n" +
            "<p>2015–2021 годы Доцент коммерческого права, Юридический колледж Катарского университета, Катар.</p>\n" +
            "<p>2018 (январь - апрель) Адъюнкт-профессор, Пенсильванский университет Индианы (США) и Арабско-американский университет Дженина (Палестина)</p>\n" +
            "<p>2016 - 2018 (лето) Приглашенный адъюнкт-профессор Падуанского университета, Италия.</p>\n" +
            "<p>2010–2015 годы Преподаватель делового права, факультет бизнеса и экономики, Университет Маккуори, Австралия.</p>\n" +
            "<p>2005 - 2010 младший преподаватель, юридический факультет, университет Маккуори, Австралия</p>\n" +
            "<h2>ИССЛЕДОВАТЕЛЬСКИЕ ГРАНТЫ</h2>\n" +
            "<p>2019 QNRF «FinTech and RegTech: создание устойчивой, инклюзивной и конкурентоспособной нормативно-правовой базы для финансирования 21 века в Катаре» (579 000 долларов США)</p>\n" +
            "<p>2016 (QU INTERNAL) «Обзор финансового регулирования в Катаре: с 2005 г. по настоящее время». (18 000 долларов США)</p>\n" +          

          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <h2><b>ACADEMIC CREDENTIALS </p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>PhD (2013), University of New South Wales (UNSW), Sydney, Australia. (2014 UNSW PhD Excellence Award)</p>\n" +
            "<p>Graduate Diploma of Legal Practice, (2009) College of Law, St Leonards, Sydney, Australia.</p>\n" +
            "<p>Bachelor Commerce (Economics) / Bachelor of Law (Hons) (2004), Macquarie University, Sydney, Australia.</p>\n" +
            "<h2>POSITIONS</h2>\n" +
            "<p>2021 – Present                        Associate Professor, College of Law, Qatar University, Qatar</p>\n" +
            "<p>2015 – 2021 	Assistant Professor of Commercial Law, College of Law, Qatar University, Qatar.</p>\n" +
            "<p>2018 (January – April)	Adjunct Assistant Professor, Indiana University of Pennsylvania (US) and Arab American University of Jenin (Palestine)  </p>\n" +
            "<p>2016  - 2018  (Summer) 	Visiting Adjunct Professor, University of Padua, Italy. </p>\n" +
            "<p>2010 – 2015 	Lecturer in Business Law, Faculty of Business and Economics, Macquarie University, Australia.</p>\n" +
            "<p>2005 – 2010 	Associate Lecturer, Division of Law, Macquarie University, Australia</p>\n" +
            "<p>Research Grants</p>\n" +
            "<p>2019 QNRF 	‘FinTech and RegTech: Building a resilient, inclusive and competitive legal and regulatory framework for 21st century finance in Qatar’ ($USD 579,000) </p>\n" +
            "<p>2016 (QU Internal)	‘A Review of Financial Regulations in Qatar: 2005-Present’. ($US 18 000) </p>\n" +           

          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 20,
        img: "assets/img/speakers/20.jpg",
        name: {
            uz: "Fujio Kavashima",
            ru: "Профессор Фудзио",
            en: "Fujio Kavashima"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <h2><b>Ta’lim</h2>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
       "<p>1990 y. Tokio universiteti (LL.B.)</p>\n"+     
       "<p>1990 y. Tokio universiteti ilmiy xodimi</p>\n"+     
       "<p>1996 y. Kanazava universiteti dotsenti</p>\n"+     
       "<p>2005 y. Nagoya universiteti dotsenti</p>\n"+     
       "<p>2011 y. Nagoya universiteti professori</p>\n"+     
       "<p>2015 y. Kobe universiteti professori</p>\n"+     
       "<h2>Ilmiy yoʼnalishi</h2>\n"+     
       "<p>Xalqaro iqtisodiyot huquqi, Osiyo davlatlarida raqobat huquqi</p>\n"+     
       "<p><b>Website</b></p>\n"+     
       "<p>Rasmiy: </p>\n"+  
       "<p>http://www.law.kobe-u.ac.jp/graduate/faculty/professor/kawashima.html </p>\n"+     
       "<p>Shaxsiy:</p>\n"+     
       "<p>https://fujiokawashima.wordpress.com/ </p>\n"+   
       "<p>U 1990-yillardan buyon Jahon Savdo Tashkilotida (JST) nizolarni xal etish, Xitoyning JSTga kirishi bilan bog`liq huquqiy islohotlar hamda Osiyo davlatlarida raqobat huquqining rivojlanishi kabi ilmiy mavzularda o`z faoliyatini olib bormoqda. Yillar davomida u JST faoliyati va raqobat huquqiga qiziqqan talabalarga ingliz tilida ilmiy rahbarlik vazifasini bajarib kelmoqda. U hozirda JST moot ustaxonasini (WTO Moot Workshop) yuritib kelmoqda.</p>\n"+     

              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <h2><b>Образование</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>1990 г. Токийский университет (бакалавр права)</p>\n"+     
            "<p>1990 г. Исследователь Токийского университета</p>\n"+     
            "<p>1996 г. Доцент Канадзавского университета</p>\n"+     
            "<p>2005 г. Доцент Нагойского университета</p>\n"+     
            "<p>2011 г. Профессор Нагойского университета</p>\n"+     
            "<p>2015 г. Профессора Университета Кобе</p>\n"+     
            "<h2>Научное направление</h2>\n"+     
            "<p>Международное экономическое право, конкурентное право в странах Азии</p>\n"+     
            "<p><b>Веб-сайт</b></p>\n"+     
            "<p>Официальный: http://www.law.kobe-u.ac.jp/graduate/faculty/professor/kawashima.html </p>\n"+     
            "<p>Личный: https://fujiokawashima.wordpress.com/ </p>\n"+     
            "<p>Он работает во Всемирной торговой организации (ВТО) с 1990-х годов над научными вопросами, такими как разрешение споров, правовые реформы, связанные с вступлением Китая в ВТО, и развитие законодательства о конкуренции в азиатских странах. На протяжении многих лет он работала научным руководителем по английскому языку для студентов, интересующихся деятельностью ВТО и законодательством о конкуренции. В настоящее время он ведет учебный семинар ВТО.</p>\n"+     
          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <h2><b>Education</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>1990 University of Tokyo (LLB)</p>\n"+     
            "<p>1990 Researcher at the University of Tokyo</p>\n"+     
            "<p>1996 Associate Professor at Kanazawa University</p>\n"+     
            "<p>2005 Associate Professor, Nagoya University</p>\n"+     
            "<p>2011 Professor, Nagoya University</p>\n"+  
            "<p>2015 Professors at Kobe University</p>\n"+    
            "<h2>Scientific direction</h2>\n"+    
            "<p>International economic law, competition law in Asia</p>\n"+    
            "<p><b>Web site</b></p>\n"+    
            "<p>Official: http://www.law.kobe-u.ac.jp/graduate/faculty/professor/kawashima.html</p>\n"+  
            "<p><b>Private:</b></p>\n"+    
            "<p></p>\n"+    
            "<p></p>\n"+    




          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },

    {
        id: 21,
        img: "assets/img/speakers/21.jpg",
        name: {
            uz: "Fujio Kavashima",
            ru: "Профессор Фудзио",
            en: "Fujio Kavashima"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
                "         <h2><b>Ta’lim</h2>" +               
                "              <div style=\"text-align: justify;\">\n" +                            
       "<p>1990 y. Tokio universiteti (LL.B.)</p>\n"+     
       "<p>1990 y. Tokio universiteti ilmiy xodimi</p>\n"+     
       "<p>1996 y. Kanazava universiteti dotsenti</p>\n"+     
       "<p>2005 y. Nagoya universiteti dotsenti</p>\n"+     
       "<p>2011 y. Nagoya universiteti professori</p>\n"+     
       "<p>2015 y. Kobe universiteti professori</p>\n"+     
       "<h2>Ilmiy yoʼnalishi</h2>\n"+     
       "<p>Xalqaro iqtisodiyot huquqi, Osiyo davlatlarida raqobat huquqi</p>\n"+     
       "<p><b>Website</b></p>\n"+     
       "<p>Rasmiy: </p>\n"+  
       "<p>http://www.law.kobe-u.ac.jp/graduate/faculty/professor/kawashima.html </p>\n"+     
       "<p>Shaxsiy:</p>\n"+     
       "<p>https://fujiokawashima.wordpress.com/ </p>\n"+   
       "<p>U 1990-yillardan buyon Jahon Savdo Tashkilotida (JST) nizolarni xal etish, Xitoyning JSTga kirishi bilan bog`liq huquqiy islohotlar hamda Osiyo davlatlarida raqobat huquqining rivojlanishi kabi ilmiy mavzularda o`z faoliyatini olib bormoqda. Yillar davomida u JST faoliyati va raqobat huquqiga qiziqqan talabalarga ingliz tilida ilmiy rahbarlik vazifasini bajarib kelmoqda. U hozirda JST moot ustaxonasini (WTO Moot Workshop) yuritib kelmoqda.</p>\n"+     

              "              </div>\n" +
                "\n" +
                "            </div>",
            ru: "<div class=\"details\">\n" +
            "         <h2><b>Образование</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p>1990 г. Токийский университет (бакалавр права)</p>\n"+     
            "<p>1990 г. Исследователь Токийского университета</p>\n"+     
            "<p>1996 г. Доцент Канадзавского университета</p>\n"+     
            "<p>2005 г. Доцент Нагойского университета</p>\n"+     
            "<p>2011 г. Профессор Нагойского университета</p>\n"+     
            "<p>2015 г. Профессора Университета Кобе</p>\n"+     
            "<h2>Научное направление</h2>\n"+     
            "<p>Международное экономическое право, конкурентное право в странах Азии</p>\n"+     
            "<p><b>Веб-сайт</b></p>\n"+     
            "<p>Официальный: http://www.law.kobe-u.ac.jp/graduate/faculty/professor/kawashima.html </p>\n"+     
            "<p>Личный: https://fujiokawashima.wordpress.com/ </p>\n"+     
            "<p>Он работает во Всемирной торговой организации (ВТО) с 1990-х годов над научными вопросами, такими как разрешение споров, правовые реформы, связанные с вступлением Китая в ВТО, и развитие законодательства о конкуренции в азиатских странах. На протяжении многих лет он работала научным руководителем по английскому языку для студентов, интересующихся деятельностью ВТО и законодательством о конкуренции. В настоящее время он ведет учебный семинар ВТО.</p>\n"+     
          "              </div>\n" +
            "\n" +
            "            </div>",
            en: "<div class=\"details\">\n" +
            "         <h2><b>Education</p>" +               
            "              <div style=\"text-align: justify;\">\n" +                            
            "<p></p>\n"+     
            "<p></p>\n"+     
            "<p></p>\n"+     
            "<p></p>\n"+     
            "<p></p>\n"+    


          "              </div>\n" +
            "\n" +
            "            </div>"
        }
    },
];


function speakerList(lang) {
    data.map((item) => {
        console.log(item.degree[lang])
        $("#listSpeaker").append("<div class=\"col-12 col-md-4 col-lg-3 col-xl-3\">\n" +
            "            <div class=\"speaker\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n" +
            "              <img src=\"" + item.img + "\" alt=\"Speaker 1\" class=\"img-fluid\">\n" +
            "              <div class=\"details\">\n" +
            "                <h3><a onclick=\"setId(this.id)\" id=\"" + item.id + "\" href=\"speaker-details.html\">" + item.name[lang] + "</a></h3>\n" +
            "                <p>" + item.degree[lang] + "</p>\n" +
            "              \n" +
            "              </div>\n" +
            "            </div>\n" +
            "          </div>")
    })

}

function oneSpeaker(id, lang) {
    data.map((item) => {
        if (item.id === parseInt(id)) {
            $("#name").text(item.name[lang]);
            $("#speakerImg").attr("src", item.img);
            $("#content").html(item.detail[lang]);

        }
    })

}
