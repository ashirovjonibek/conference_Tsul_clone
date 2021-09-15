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
            uz: "Prof. Dr. Marc Bungenberg, LL.M",
            ru: "Prof. Dr. Marc Bungenberg, LL.M",
            en: "Prof. Dr. Marc Bungenberg, LL.M"
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
            ru: "Damian Cyman",
            en: "Damian Cyman"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
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
                "            </div>",
            ru: "<div class=\"details\">\n" +
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
            ru: "Thomas Cheng",
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
                "            </div>",
            ru: "<div class=\"details\">\n" +
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
            uz: "Edward Juchniewicz (Edvardas Juchnevicius)",
            ru: "Edward Juchniewicz (Edvardas Juchnevicius)",
            en: "Edward Juchniewicz (Edvardas Juchnevicius)"
        },
        degree: {
            uz: "Nutq so'zlovchi",
            ru: "Оратор",
            en: "Speaker"
        },
        detail: {
            uz: "<div class=\"details\">\n" +
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
                "            </div>",
            ru: "<div class=\"details\">\n" +
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
        id: 3,
        img: "assets/img/speakers/3.jpg",
        name: {
            uz: "Prof. Dr. Marc Bungenberg, LL.M",
            ru: "Prof. Dr. Marc Bungenberg, LL.M",
            en: "Prof. Dr. Marc Bungenberg, LL.M"
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
        id: 3,
        img: "assets/img/speakers/3.jpg",
        name: {
            uz: "Prof. Dr. Marc Bungenberg, LL.M",
            ru: "Prof. Dr. Marc Bungenberg, LL.M",
            en: "Prof. Dr. Marc Bungenberg, LL.M"
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
        id: 3,
        img: "assets/img/speakers/3.jpg",
        name: {
            uz: "Prof. Dr. Marc Bungenberg, LL.M",
            ru: "Prof. Dr. Marc Bungenberg, LL.M",
            en: "Prof. Dr. Marc Bungenberg, LL.M"
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
        id: 3,
        img: "assets/img/speakers/3.jpg",
        name: {
            uz: "Prof. Dr. Marc Bungenberg, LL.M",
            ru: "Prof. Dr. Marc Bungenberg, LL.M",
            en: "Prof. Dr. Marc Bungenberg, LL.M"
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
];

// let dataStatic = [
//     {
//         "id": "homeNav",
//         "uz": "Bosh sahifa",
//         "ru": "Дом",
//         "en": "Home"
//     },
//     {
//         "id": "aboutNav",
//         "uz": "Haqida",
//         "ru": "O нас",
//         "en": "About"
//     },
//     {
//         "id": "speakerNav",
//         "uz": "Spekerlar",
//         "ru": "Оратор",
//         "en": "Speakers"
//     },
//     {
//         "id": "scheduleNav",
//         "uz": "Jadval",
//         "ru": "Расписание",
//         "en": "Schedule"
//     },
//     {
//         "id": "venueNav",
//         "uz": "Joylar",
//         "ru": "Место проведения",
//         "en": "Venue"
//     },
//     {
//         "id": "galleryNav",
//         "uz": "Galereya",
//         "ru": "Галерея",
//         "en": "Gallery"
//     },
//     {
//         "id": "homeText",
//         "uz": "Bosh sahifa",
//         "ru": "Дом",
//         "en": "Home"
//     }
// ];

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
