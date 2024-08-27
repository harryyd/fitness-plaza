import React from 'react'
import Card from './Card'

const Program = () => {
    const data = [
        {
            name: "corporate membership",
            description: "At Fitness Plaza, we understand that a sedentary lifestyle and elevated stress levels are common among corporate executives. Insufficient physical activity can lead to a decline in energy, stamina, and overall health, negatively impacting productivity and performance. Regular exercise is essential not only for reducing the risk of heart disease, high blood pressure, high cholesterol, stroke, type 2 diabetes, and certain types of cancer, but also for keeping you energized and enabling you to perform daily activities more efficiently.Why Corporate Wellness ProgramsCorporate wellness programs are designed to improve not just output but also employee loyalty. These programs help strengthen team spirit, boost confidence, and enhance workforce morale. At Fitness Plaza, we recognize the toll that a corporate lifestyle can take on health and the benefits of establishing a personal fitness regime. Our goal is to promote fitness through well-rounded organizations by offering a range of solutions and services tailored to meet the fitness requirements of corporate employees.",
            amount: 5000,
            images: ["", "", ""],
            bannerImage: "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/10/compress-g2.jpg?w=408&ssl=1",
            quantity : 1 ,
            id : 4
        }, {
            name: "Personal Traning ",
            description: "At Fitness Plaza, we are proud to offer the Personal Training Program through our renowned Fitness Institute, India's first international fitness management institute. Our program provides comprehensive fitness training, including certificate courses in Fitness Management, Personal Training, and Spinning Instructing. Covering a wide range of subjects, our curriculum ensures the best international brand practices in India. The three-month courses are supervised by qualified professionals and feature guest lectures from leading international fitness trainers. Additionally, we guarantee internships, providing firsthand experience in fitness training with industry leaders. Our institute offers the most up-to-date education pathway for achieving industry-leading qualifications and ongoing training in all aspects of the fitness industry.Becoming a personal trainer through Fitness Plaza's program opens doors to a rewarding career. Trainers can earn between Rs. 8,000 and Rs. 50,000, depending on their expertise and services offered. The job offers flexibility, allowing trainers to work within a gym or freelance by providing personal training at clients' homes. Working in a gym offers immediate access to potential clients, top-of-the-line equipment, and promotional support. Freelancing provides the convenience of training clients in their own homes and the freedom to set your own hours. Above all, the job satisfaction of being a personal trainer is immense, as you have the opportunity to positively impact people's lives by helping them increase strength, improve appearance, and become healthier individuals",
            amount: 3500,
            images: ["", "", ""],
            bannerImage: "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Funct-01883_final.jpg?fit=1125%2C750&ssl=1",
            quantity : 1,
            id : 5
        }, {
            name: "Group Program",
            description: "At Fitness Plaza, we are proud to commemorate 50 years of unparalleled success and continuous growth. The India chapter of our esteemed organization began in 2002 with the opening of our first branch in Mumbai. Today, we boast over 701 facilities across 30 countries, including 102 gyms in India, with an additional five under construction and set to open this year.Our commitment to excellence has earned us numerous prestigious awards. We have been recognized twice by the Lions Club as the \"Best Fitness Chain,\" received the \"Most Admired Fitness Chain of the Year\" award from Images Beauty & Wellness, and garnered accolades from Franchise India. Additionally, we have received eight awards from Gold’s Gym International.",
            amount: 10000,
            images: ["", "", ""],
            bannerImage: "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moments-Team-Training.jpg?fit=1125%2C750&ssl=1",
            members: 5,
            quantity : 1,
            id : 6

        }
    ]
    return (
        <div>
            {/* <p> program </p> */}
            <h2 class="text-4xl font-extrabold dark:text-black text-center mb-[50px] pt-[50px]">Offered Programs</h2>
            <div className='flex justify-around'>
            {
                data.map((item, index) => {
                    return (
                        <div >
                            <Card data={item} key={index} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Program
