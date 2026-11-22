/*
 * Leafspire programme content.
 * Read by js/programme-page.js and displayed through programme.html?id=<slug>.
 * Object key order is the programme order (01 to 06).
 * Tone values: deep | mid | main | water.
 * "related" lists the slugs of other programmes shown under "Other programmes".
 * "visual" is left out on purpose until suitable existing photographs are confirmed.
 * The five campaigns are separate from the core programmes and are not listed here.
 */
window.LEAFSPIRE_PROGRAMMES = {

    "green-schooled": {
        title: "Green Schooled",
        category: "Environmental education",
        intro: "Environmental learning that moves beyond the classroom, with learners growing trees, leading clubs and caring for the places where they study.",
        tone: "main",
        description: "Green Schooled is Leafspire's programme for environmental education and practical action in schools, colleges and universities.",
        overview: {
            heading: "Overview",
            paragraphs: [
                "Many learners hear about climate change and biodiversity loss in lessons but rarely get the chance to act on what they have learned. Green Schooled aims to close that gap by making environmental learning practical and part of everyday life in learning institutions.",
                "The programme seeks to help learners understand the environmental challenges around them and take part in activities that make their school or campus greener. That means learning the science, and also planting, caring for and looking after the spaces they use every day.",
                "Green Schooled works in two settings, Eco-Schools and Eco-Campus. Both belong to this programme and share one idea: learners are more likely to take responsibility for their surroundings when they are trusted to lead."
            ]
        },
        objectives: {
            heading: "What we aim to do",
            intro: "Green Schooled is designed to:",
            items: [
                "Help learners understand climate change, biodiversity and environmental responsibility in ways that connect to their own surroundings.",
                "Support tree growing and care within school and campus grounds.",
                "Encourage student-led environmental clubs, teams and initiatives.",
                "Introduce practical sustainability habits into daily life at learning institutions.",
                "Make sure girls and boys both have a real say in environmental leadership roles."
            ]
        },
        activities: {
            heading: "How it works",
            intro: "We intend to work with school and campus leaders, teachers and lecturers to agree activities that suit each institution. The programme is organised around two settings.",
            items: [
                {
                    title: "Eco-Schools",
                    text: "Environmental learning for primary and secondary school learners, linked to practical work in the school compound, such as growing and caring for trees and running environmental clubs."
                },
                {
                    title: "Eco-Campus",
                    text: "A similar approach for colleges and universities, where students can form environmental teams and take on sustainability activities on campus."
                },
                {
                    title: "Learning by doing",
                    text: "Lessons on climate change and biodiversity are paired with a practical task, so that learners can see how an idea applies to the place where they study."
                },
                {
                    title: "Learner-led initiatives",
                    text: "Clubs and teams give learners ownership of environmental projects, from planning the work to looking after it afterwards."
                }
            ]
        },
        audience: {
            heading: "Who the programme is for",
            items: [
                "Learners in primary and secondary schools.",
                "Students in colleges and universities.",
                "Teachers, lecturers and institution leaders who want to support environmental learning.",
                "Student leaders interested in starting or strengthening an environmental club or team."
            ]
        },
        outcomes: {
            heading: "Expected outcomes",
            intro: "Over time, Green Schooled aims to contribute to:",
            items: [
                "Learners who understand local environmental challenges and feel able to act on them.",
                "Greener school and campus grounds, with trees that continue to be cared for.",
                "Student groups that carry environmental work forward on their own initiative.",
                "Environmental responsibility becoming an ordinary part of life in learning institutions."
            ]
        },
        related: ["suscomm", "the-next-meta"]
    },

    "the-next-meta": {
        title: "The Next Meta",
        category: "Youth innovation and enterprise",
        intro: "A space for young people to test ideas, build practical skills and look at where a changing economy might lead.",
        tone: "deep",
        description: "The Next Meta supports young people to explore ideas, build skills and identify green livelihood and enterprise opportunities.",
        overview: {
            heading: "Overview",
            paragraphs: [
                "Young people are often told to be enterprising or to find a career, with little guidance on how to start. The Next Meta aims to give them room to explore ideas, build practical skills and see what opportunities exist, particularly where they connect to sustainable development.",
                "The programme links youth innovation to a changing economy. That includes circular economy thinking, where waste is treated as a resource, and green livelihoods, meaning work and small enterprises that benefit both people and the environment.",
                "It is not designed as a conventional business accelerator. The focus is on helping young people see possibilities, develop their ideas and take practical first steps that matter to them and to their communities."
            ]
        },
        objectives: {
            heading: "What we aim to do",
            intro: "The Next Meta seeks to:",
            items: [
                "Encourage creative problem-solving around challenges young people see in their own communities.",
                "Introduce entrepreneurship and enterprise development as one possible path among others.",
                "Open up conversations about circular economy ideas and green livelihoods.",
                "Support career exploration and the development of practical skills.",
                "Help young people turn an idea into a small, practical initiative."
            ]
        },
        activities: {
            heading: "Activities and approach",
            intro: "Activities may include:",
            items: [
                {
                    title: "Ideas and problem-solving sessions",
                    text: "Open sessions where young people identify a local problem and work through possible responses together."
                },
                {
                    title: "Skills development",
                    text: "Practical sessions on skills that help ideas move forward, such as planning, communication and working in a team."
                },
                {
                    title: "Career and livelihood exploration",
                    text: "Conversations about emerging green opportunities, including how waste, resources and local needs can shape new work."
                },
                {
                    title: "Mentorship and exposure",
                    text: "We intend to connect young people with mentors and practitioners, and to create learning opportunities beyond the classroom."
                },
                {
                    title: "From idea to action",
                    text: "Support for young people who want to test an idea on a small scale and learn from the result."
                }
            ]
        },
        audience: {
            heading: "Who the programme is for",
            intro: "The Next Meta is open to young people who are curious about ideas, enterprise or their next step, including:",
            items: [
                "Students and recent graduates exploring what to do next.",
                "Young people with an idea they would like to develop.",
                "Young people looking at livelihood options in their communities.",
                "Young women and young men alike. The programme will pay attention to the different barriers each group can face in reaching training, networks and finance."
            ]
        },
        outcomes: {
            heading: "Expected outcomes",
            intro: "The Next Meta aims to contribute to:",
            items: [
                "Young people with greater confidence in developing and explaining their ideas.",
                "Better awareness of green and circular economy opportunities.",
                "Practical skills that support work, enterprise or further learning.",
                "Ideas that move from conversation into small initiatives that serve communities."
            ]
        },
        related: ["green-schooled", "youth-4-youth"]
    },

    "suscomm": {
        title: "SusComm",
        category: "Community sustainability",
        intro: "Practical environmental action led by communities: restoring land, growing indigenous trees, managing waste and strengthening local food systems.",
        tone: "mid",
        description: "SusComm supports community-level environmental action, including greening, indigenous trees, waste, food security and climate resilience.",
        overview: {
            heading: "Overview",
            paragraphs: [
                "Environmental problems affect more than the environment. Degraded land, poor waste management, unreliable food supplies and the loss of trees and wildlife shape how people earn a living, where they gather and how well they cope when conditions change.",
                "SusComm works at community level. It seeks to bring residents, young people and local practitioners together around the environment they share, so that restoration and conservation become part of ordinary community life.",
                "Where Green Schooled works through learning institutions, SusComm focuses on neighbourhoods, public spaces, natural environments and local livelihoods."
            ]
        },
        objectives: {
            heading: "What we aim to do",
            intro: "SusComm is designed to:",
            items: [
                "Support greening and restoration of shared community spaces.",
                "Promote the growing of indigenous trees and the protection of local biodiversity.",
                "Encourage better waste management, recycling and responsible use of resources.",
                "Build community awareness of climate change and ways of coping with its effects.",
                "Strengthen food security through sustainable agricultural practices.",
                "Make sure women, men and young people all have a voice in how their community manages its environment."
            ]
        },
        activities: {
            heading: "Activities and approach",
            intro: "We intend to work with agricultural professionals and other relevant practitioners where specialist knowledge is needed. Activities may include:",
            items: [
                {
                    title: "Community greening",
                    text: "Planting and caring for trees and plants in public and shared spaces, with local residents involved from the start."
                },
                {
                    title: "Indigenous trees and biodiversity",
                    text: "Growing native tree species and learning about the plants and wildlife that depend on them."
                },
                {
                    title: "Waste and resource use",
                    text: "Community conversations and practical activities on sorting, reusing and recycling waste."
                },
                {
                    title: "Food security and sustainable agriculture",
                    text: "Sharing farming and food growing knowledge that works for local conditions, with input from agricultural practitioners."
                },
                {
                    title: "Climate awareness",
                    text: "Helping communities understand local climate risks and discuss practical ways to prepare for them."
                }
            ]
        },
        audience: {
            heading: "Who the programme is for",
            items: [
                "Residents and community groups who want to improve their local environment.",
                "Young people looking for practical ways to take part in environmental action.",
                "Small-scale farmers and food growers.",
                "Practitioners and organisations working on agriculture, conservation or waste."
            ]
        },
        outcomes: {
            heading: "Expected outcomes",
            intro: "SusComm aims to contribute to:",
            items: [
                "Greener and better cared-for shared spaces.",
                "Greater community knowledge of indigenous trees and local biodiversity.",
                "More responsible waste and resource habits in neighbourhoods.",
                "Communities better prepared for the effects of a changing climate.",
                "Wider participation in environmental decisions at community level."
            ]
        },
        related: ["green-schooled", "afya-mtaani"]
    },

    "youth-4-youth": {
        title: "Youth 4 Youth",
        category: "Youth wellbeing",
        intro: "A peer-led space for young people to connect, talk openly about how they are doing and support one another.",
        tone: "water",
        description: "Youth 4 Youth creates youth-led spaces for mental wellbeing conversations, peer connection and supportive relationships.",
        overview: {
            heading: "Overview",
            paragraphs: [
                "How a young person feels is shaped by the people around them, the places they spend time in and whether they can get support when they need it. Pressure at school, uncertainty about the future, loneliness and stigma can all make it harder to speak up.",
                "Youth 4 Youth seeks to create opportunities for young people to meet, talk about wellbeing and look out for each other. It is youth-led and community-based, and it starts from the fact that a peer is often the first person someone turns to.",
                "Youth 4 Youth is not a clinical or counselling service and does not replace professional care. Where professional support is appropriate, we intend to work with qualified mental health and psychosocial support professionals and to help young people understand where support can be found."
            ]
        },
        objectives: {
            heading: "What we aim to do",
            intro: "The programme seeks to:",
            items: [
                "Encourage open, respectful conversations about mental wellbeing.",
                "Build supportive relationships and a sense of belonging among young people.",
                "Reduce stigma around mental health and asking for help.",
                "Support youth-led wellbeing activities.",
                "Create safe and inclusive spaces where young people feel able to take part."
            ]
        },
        activities: {
            heading: "Activities and approach",
            intro: "Activities may include:",
            items: [
                "Peer conversations and discussion groups led by young people.",
                "Awareness sessions that explain mental wellbeing in everyday language.",
                "Youth-led social and creative activities that bring people together.",
                "Sessions with mental health and psychosocial support professionals where appropriate.",
                "Community activities that connect young people to the places and people around them."
            ]
        },
        audience: {
            heading: "Who the programme is for",
            intro: "Youth 4 Youth is meant for young people in different circumstances, including those in:",
            items: [
                "Schools and colleges.",
                "Universities.",
                "Neighbourhoods and community settings.",
                "Street-connected situations."
            ]
        },
        outcomes: {
            heading: "Expected outcomes",
            intro: "Youth 4 Youth aims to contribute to:",
            items: [
                "Young people who feel more connected and less alone.",
                "More comfortable conversations about mental wellbeing.",
                "Less stigma around seeking help.",
                "Safer and more supportive social environments for young people."
            ]
        },
        related: ["the-next-meta", "afya-mtaani"]
    },

    "afya-mtaani": {
        title: "Afya Mtaani with Leafspire",
        category: "Community health",
        intro: "Clear, practical health information shared at community level, so that people can prevent illness and make informed decisions.",
        tone: "water",
        description: "Afya Mtaani with Leafspire shares preventive health education and health awareness at community level.",
        overview: {
            heading: "Overview",
            paragraphs: [
                "Good health decisions depend on good information, received early. Knowing when a child is due for immunisation, what healthy living involves or when to seek care can make a real difference, yet this information does not always reach people in a form they can use.",
                "Afya Mtaani with Leafspire aims to make preventive health education more accessible and relevant in communities. The name means health in the neighbourhood, and the programme treats health as part of community development, not something separate from it.",
                "The programme is about information, awareness and prevention. Leafspire does not run a clinic or provide medical services. We intend to work with appropriately qualified health professionals and community health practitioners, and to point people towards existing health services."
            ]
        },
        objectives: {
            heading: "What we aim to do",
            intro: "Afya Mtaani is designed to:",
            items: [
                "Share clear preventive health information in language communities understand.",
                "Promote healthy living and early awareness of health concerns.",
                "Raise awareness of maternal and child health and of immunisation.",
                "Encourage community conversations about local health priorities.",
                "Bring women, men and young people into health discussions, since family health is a shared responsibility."
            ]
        },
        activities: {
            heading: "Activities and approach",
            intro: "Activities may include:",
            items: [
                {
                    title: "Community health talks",
                    text: "Open sessions on preventive health topics, led together with qualified health professionals or community health practitioners."
                },
                {
                    title: "Maternal and child health awareness",
                    text: "Information for families on caring for mothers and children, including why immunisation matters."
                },
                {
                    title: "Healthy living information",
                    text: "Practical guidance on everyday habits that support health, shared in accessible formats."
                },
                {
                    title: "Community dialogue",
                    text: "Conversations that let residents raise the health questions and priorities that matter most where they live."
                }
            ]
        },
        audience: {
            heading: "Who the programme is for",
            items: [
                "Families, parents and caregivers.",
                "Expectant and new mothers.",
                "Young people and other community members who want reliable health information.",
                "Health professionals and community health practitioners interested in working together on education."
            ]
        },
        outcomes: {
            heading: "Expected outcomes",
            intro: "Afya Mtaani aims to contribute to:",
            items: [
                "Communities that are better informed about prevention and early care.",
                "Greater awareness of immunisation and of maternal and child health.",
                "People who feel more confident making health decisions for themselves and their families.",
                "Stronger links between communities and the health professionals who serve them."
            ]
        },
        related: ["youth-4-youth", "suscomm"]
    },

    "civic-lore": {
        title: "Civic-lore",
        category: "Civic education",
        intro: "Helping people understand how public institutions work, what their rights and responsibilities are and how to take part in decisions that affect their communities.",
        tone: "deep",
        description: "Civic-lore is Leafspire's non-partisan civic education programme on governance, public participation and accountability.",
        overview: {
            heading: "Overview",
            paragraphs: [
                "Decisions about roads, water, schools, markets and public budgets shape daily life, yet many people, young people especially, are unsure how those decisions are made or how to take part in them.",
                "Civic-lore aims to encourage informed and active citizenship. It explains governance and public institutions in plain language, supports open conversation about local development and encourages constructive engagement with the people and offices responsible.",
                "The programme is educational, inclusive and non-partisan. It does not campaign for any party, candidate or political position, and it is not an electoral mobilisation programme."
            ]
        },
        objectives: {
            heading: "What we aim to do",
            intro: "Civic-lore seeks to:",
            items: [
                "Build public understanding of governance and how public institutions work.",
                "Help people understand their rights, responsibilities and civic duties.",
                "Encourage participation in local development decisions.",
                "Support young people to get involved in civic processes.",
                "Promote accountability and transparency through informed, respectful dialogue.",
                "Make sure women and young people are not left out of civic spaces."
            ]
        },
        activities: {
            heading: "Activities and approach",
            intro: "Activities may include:",
            items: [
                {
                    title: "Civic education sessions",
                    text: "Plain-language sessions on how public institutions work and how ordinary people can engage with them."
                },
                {
                    title: "Community dialogue",
                    text: "Facilitated conversations where residents discuss local development priorities and how decisions are made."
                },
                {
                    title: "Youth civic involvement",
                    text: "Opportunities for young people to learn about civic processes and take part in them."
                },
                {
                    title: "Accountability and transparency",
                    text: "Helping people learn how to find public information and raise questions constructively."
                }
            ]
        },
        audience: {
            heading: "Who the programme is for",
            items: [
                "Young people who want to understand how decisions affecting them are made.",
                "Community members and groups interested in local development.",
                "Women, men and people from different backgrounds who want a stronger voice in public life.",
                "Institutions and practitioners who support civic education."
            ]
        },
        outcomes: {
            heading: "Expected outcomes",
            intro: "Civic-lore aims to contribute to:",
            items: [
                "People who better understand public institutions and their own rights and responsibilities.",
                "More informed participation in local decisions.",
                "Respectful community dialogue on development and accountability.",
                "Young people who feel more able to take part in civic life."
            ]
        },
        related: ["the-next-meta", "suscomm"]
    }

};