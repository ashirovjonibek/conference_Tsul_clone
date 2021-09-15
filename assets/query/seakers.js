let data=[
    {
        id:1,
        img:"assets/img/speakers/1.jpg",
        name:{
            uz:"Q-Man Ban",
            ru:"Q-Man Ban",
            en:"Q-Man Ban"
        },
        degree:{
            uz:"Speaker",
            ru:"Speaker",
            en:"Speaker"
        },
        detail:{
            uz:"<div class=\"details\">\n" +
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
            ru:"<div class=\"details\">\n" +
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
            en:"<div class=\"details\">\n" +
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
        id:2,
        img:"assets/img/speakers/2.jpg",
        name:{
            uz:"DR. Gerd Droesse",
            ru:"DR. Gerd Droesse",
            en:"DR. Gerd Droesse"
        },
        degree:{
            uz:"Speaker",
            ru:"Speaker",
            en:"Speaker"
        },
        detail:{
            uz:"<div class=\"details\">\n" +
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
                "            </div>",
            ru:"<div class=\"details\">\n" +
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
                "            </div>",
            en:"<div class=\"details\">\n" +
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
        id:3,
        img:"assets/img/speakers/1.jpg",
        name:{
            uz:"Q-Man Ban",
            ru:"Q-Man Ban",
            en:"Q-Man Ban"
        },
        degree:{
            uz:"Speaker",
            ru:"Speaker",
            en:"Speaker"
        },
        detail:{
            uz:"<div class=\"details\">\n" +
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
                "            </div>",
            ru:"<div class=\"details\">\n" +
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
                "            </div>",
            en:"<div class=\"details\">\n" +
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
    }
];

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

function speakerList(lang) {
    dataStatic.map((item)=>{
        $("#"+item.id).text(item[lang])
    });
    data.map((item)=>{
        $("#listSpeaker").append("<div class=\"col-12 col-md-4 col-lg-3 col-xl-3\">\n" +
            "            <div class=\"speaker\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n" +
            "              <img src=\""+item.img+"\" alt=\"Speaker 1\" class=\"img-fluid\">\n" +
            "              <div class=\"details\">\n" +
            "                <h3><a onclick=\"setId(this.id)\" id=\""+item.id+"\" href=\"speaker-details.html\">"+item.name[lang]+"</a></h3>\n" +
            "                <p>"+item.degree[lang]+"</p>\n" +
            "              \n" +
            "              </div>\n" +
            "            </div>\n" +
            "          </div>")
    })

}

function oneSpeaker(id,lang) {
    console.log("id====",id);
    data.map((item)=>{
        if (item.id===parseInt(id)){
            $("#name").text(item.name[lang]);
            $("#speakerImg").attr("src",item.img);
            $("#content").html(item.detail[lang]);

        }
    })

}
