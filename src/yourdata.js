const data = {
        name: 'Subramanyam Korakuti.',
        headerTagline: [//Line 1 For Header
            'Hi 👋 You found me! I am Subramanyam Korakuti.',
            //Line 2 For Header
            'Web Designer/Developer ',
            //Line 3 For Header
            'from India'
        ],
        //Contact Email
        contactEmail: 'subramanyamkorakuti@gmail.com',
        // Add Your About Text Here
        abouttext: "Hi, I'm Subramanyam, a diligent and forward-thinking front-end developer with a growing proficiency in HTML, CSS, JavaScript, ReactJS, and modern AI-powered web design tools. My passion lies in transforming innovative ideas into functional and aesthetically pleasing digital experiences. I am committed to honing my technical skills and staying at the forefront of industry trends.With a keen eye for design, a strong problem- solving attitude, and an unwavering dedication to excellence, I’m prepared to tackle complex challenges and deliver solutions that exceed expectations.Together, let’s shape the future of the web with creativity and precision!",
aboutImage: '/images/about1.jpg',

    ShowAboutImage: true,//true or false (Change Here)

        projects: [
            {
                id: 1,
                title: 'WeatherApp', //Project Title - Add Your Project Title Here
                service: 'Html, Css, Javascript, WeatherApi', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc: "/images/weather image.png",
                //Project URL - Add Your Project Url Here
                url: 'https://subbuweather-app.netlify.app/'
            },
            {
                id: 2,
                title: 'Musical DrumKit',
                service: 'Html, Css, Javascript',
                imageSrc: "/images/drumkit.png",
                url: 'https://musicaldrumkit.netlify.app/'
            },
            {
                id: 3,
                title: 'Rotating Animation',
                service: 'Html ,Css',
                imageSrc: "/images/cola.png",
                url: 'https://rotatinganimation.netlify.app/'
            },
            {
                id: 4,
                title: 'E-Store',
                service: 'Html ,Css, Javascript ,Reactjs',
                imageSrc: "/images/estore.png",
                url: 'https://subbue-store.netlify.app/'
            }


        ],
            social: [

                {
                    name: 'Github',
                    url: 'https://github.com/Subramanyam-Korakuti'
                },
                {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/subramanyam-korakuti/'
                }

            ]
    };
export default data;