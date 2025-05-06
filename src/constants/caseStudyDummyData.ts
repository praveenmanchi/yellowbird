import benzbanner from '../assets/dataimages/benz.png';
import paysafe from '../assets/dataimages/Paysafe.png';
import nobroker from '../assets/dataimages/NoBroker.png';
import cisco from '../assets/dataimages/Cisco.png';
import cluster from '../assets/dataimages/Instrument Cluster.png';
import abb from '../assets/dataimages/Abc Re-Designing.png';
import lms from '../assets/dataimages/Learning management system.png';
import flight from '../assets/dataimages/Inflight Entertainment System.png';
import MRO from '../assets/dataimages/MRO.png'
import ATC from '../assets/dataimages/ATC.png'
import abb1 from '../assets/caseStudyImages/abb/banner.png'

export const caseStudyCardDataDummy = [
  {
    All: {
      caseStudyLg: [
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'AMG Driving academy',
          description:
            'AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.',
          position: 'Assignment',
          client: 'Benz',
          tools: ['figma', 'Miro',],
          imgSrc: benzbanner,
          pathName: 'bestornothing',
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'NoBroker Heuristic Evaluation',
          description:
            'Create a seamless and user-friendly a new user experience to occupy a new flat, house or any property and also a brokerage-free proptech company that provides all sorts of real estate services under marketplace, which includes buying, renting, packers & movers, and home services',
          position: 'Assignment',
          client: 'NDA',
          tools: ['figma', 'Miro',],
          imgSrc: nobroker,
          pathName: 'nobroker',
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Paysafe',
          description:
            'Create a seamless and user-friendly payment process for both web and mobile applications, enabling users to pay their utility bills efficiently and securely.',
          position: 'Assignment',
          client: 'Payu',
          tools: ['figma', 'Miro',],
          imgSrc: paysafe,
          pathName: 'paysafe',
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Asset Integrity and Performance Management',
          description:
            'ABC Limited provides industrial analytics tools for monitoring asset health and performance. To serve industrial professionals by improving usability, visual hierarchy, and data accessibility.',
          position: 'Project Work',
          client: 'NDA',
          expertise: 'UI Design',
          tools: ['figma', 'Miro', 'excel', 'Perplexity',], // ✅ FIXED
          imgSrc: abb1,
          pathName: 'abb',
          lock: true,
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Air Traffic Control (ATC) Management',
          description:
            'Managing modern airspace is a complex and high-stakes task, demanding real-time decisions, constant vigilance, and seamless coordination. This AI-powered application is designed to assist Air Traffic Control (ATC) personnel by integrating cutting-edge artificial intelligence to enhance safety, reduce workload, and optimize operations across airports.',
          position: 'Project Work',
          client: 'NDA',
          tools: ['Miro', 'xd',],
          imgSrc: ATC,

          pathName: 'aiatc',
          lock: true,
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Cisco foods - Food Delivery Website for the senior citizens',
          description:
            'A thoughtfully designed food delivery website tailored to the unique needs and preferences of senior citizens in India. With accessibility at the forefront, the proposed solution aims to create an inclusive and seamless online experience for this often overlooked demographic.',
          position: 'Assignment',
          client: 'Cisco',
          tools: ['Miro', 'xd', 'sketch', ],
          imgSrc: cisco,

          pathName: 'ciscofoods',
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Aviation MRO Software',
          description:
            'Aviation MRO (Maintenance, Repair, and Overhaul) software is a specialized digital solution designed to manage and optimize the various processes involved in maintaining aircraft. It provides a suite of tools for planning, scheduling, executing maintenance tasks, managing inventory, and ensuring regulatory compliance.',
          position: 'Project Work',
          client: 'NDA',
          tools: ['xd' , 'Miro' , 'excel',],
          imgSrc: MRO,
          pathName: 'Aviation',
          lock: true,
        },
      ],
      caseStudySm: [
        {
          insight: false,
          title: 'Instrument Cluster',
          description:
            'A UI for car instrument cluster houses the various displays and indicators that enable a driver to operate the vehicle. Among these are several gauges often a speedometer, odometer, tachometer, oil pressure gauge, fuel gauge, etc. as well as various indicators for system malfunctions and warnings.',
          position: 'UI Designer',
          client: 'TATA ELxsi',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: cluster,

          pathName: 'instrumentcluster',
        },
        {
          insight: false,
          title: 'Inflight Entertainment System',
          description:
            'In-flight entertainment (IFE) systems are designed to enrich the passenger experience and streamline the onboard experience.  Display a map of the plane position and direction, Audio entertainment Includes music, news, information, and  personal televisions (PTVs) and  Games. In flight magazines Provide details about the airline fleet, as well as articles about destinations, travel, and tourism information.',
          position: 'Assignment',
          client: 'NDA',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: flight,

          pathName: 'infoentertainment',
        },
        
      ],
      caseStudyXs: [
        {
          insight: false,
          title: 'Abc Re-Designing',
          description:
            'ABC Limited has a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.',
          position: 'Assignment',
          client: 'ABC',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: abb,

          pathName: 'abc',
        },
        {
          insight: false,
          title: 'Learning management system',
          description:
            'Created UI for learning management system is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, materials or learning and development programs. The learning management system concept emerged directly from e-Learning.',
          position: 'Lead',
          client: 'Mue-zero',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: lms,

          pathName: 'lms',
        },
      ],
    },
  },
  {
    'Web App': {
      caseStudyLg: [
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'NoBroker Heuristic Evaluation',
          description:
            'Create a seamless and user-friendly a new user experience to occupy a new flat, house or any property and also a brokerage-free proptech company that provides all sorts of real estate services under marketplace, which includes buying, renting, packers & movers, and home services',
          position: 'Assignment',
          client: 'NDA',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: nobroker,

          pathName: 'nobroker',
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Paysafe',
          description:
            'Create a seamless and user-friendly payment process for both web and mobile applications, enabling users to pay their utility bills efficiently and securely.',
          position: 'Assignment',
          client: 'Payu',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: paysafe,

          pathName: 'paysafe',
        },
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'Cisco foods - Food Delivery Website for the senior citizens',
          description:
            'A thoughtfully designed food delivery website tailored to the unique needs and preferences of senior citizens in India. With accessibility at the forefront, the proposed solution aims to create an inclusive and seamless online experience for this often overlooked demographic.',
          position: 'Assignment',
          client: 'Cisco',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: cisco,

          pathName: 'ciscofoods',
        },
      ],
    },
  },
  {
    'Mobile App': {
      caseStudyLg: [
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'AMG Driving academy',
          description:
            'AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.',
          position: 'Assignment',
          client: 'Benz',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: benzbanner,

          pathName: 'bestornothing',
        },
      ],
    },
  },
  {
    'HMI Design': {
      caseStudySm: [
        {
          insight: false,
          title: 'Instrument Cluster',
          description:
            'A UI for car instrument cluster houses the various displays and indicators that enable a driver to operate the vehicle. Among these are several gauges often a speedometer, odometer, tachometer, oil pressure gauge, fuel gauge, etc. as well as various indicators for system malfunctions and warnings.',
          position: 'UI Designer',
          client: 'TATA ELxsi',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: cluster,

          pathName: 'instrumentcluster',
        },
        {
          insight: false,
          title: 'Abc Re-Designing',
          description:
            'ABC Limited has a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.',
          position: 'Assignment',
          client: 'ABC',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: abb,

          pathName: 'abc',
        },
      ],
    },
  },
  {
    'Design System': {
      caseStudySm: [],
    },
  },
  {
    'Heuristic Evaluation': {
      caseStudyLg: [
        {
          insight: false,
          insight1: false,
          insight1Desc: false,
          insight2: false,
          insight2Desc: false,
          title: 'NoBroker Heuristic Evaluation',
          description:
            'Create a seamless and user-friendly a new user experience to occupy a new flat, house or any property and also a brokerage-free proptech company that provides all sorts of real estate services under marketplace, which includes buying, renting, packers & movers, and home services',
          position: 'Assignment',
          client: 'NDA',
          tools: ['figma', 'miro', 'excel'],
          imgSrc: nobroker,
          pathName: 'nobroker',
        },
      ],
    },
  },
  {
    'Usability Testing': {
      caseStudyLg: [],
    },
  },
];
