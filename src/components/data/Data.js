//Sidebar imports
import { UilUser, UilHome, UilBill, UilFile,  UilSignout, UilDollarAlt, UilMoneyWithdrawal, UilClipboardAlt   } from '@iconscout/react-unicons';


// sidebarData
export const SidebarData = [
  {
    id: 1,
    icon: UilHome,
    heading: "Dashboard",
    path: '/'
  },
  {
    id: 2,
    icon: UilUser,
    heading: "Client",
    path: '/Clients'
  },
  {
    id: 3,
    icon: UilFile,
    heading: "Projects",
    path: '/Projects'
  }, 
  {
    id: 4,
    icon: UilBill,
    heading: "Facture",
    path: '/Facture'
  },  
  {
    icon: UilSignout,
    path: '/Login'
  },
];



// card Data
export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0 10px 20px 0 #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilDollarAlt,
    /*series: [{
      name: "Sales",
      data:  [31, 40, 28, 51, 42, 109,100],
    },
    ],*/
  },

  {
    title: "Revenue",
    color: {
      backGround: "Linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
      boxShadow: "0 10px 20px 0 #fdc0c7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal ,
    /*series: [{
      name: "Revenue",
      data:  [10, 100, 50, 70, 80, 30,40],
    },
    ],*/
  },

  {
    title: "Expenses",
    color: {
      backGround: "Linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
      boxShadow: "0 10px 20px 0 #f9d59b",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt ,
    /*series: [{
      name: "Expenses",
      data:  [10, 25, 15, 30, 12, 15,20],
    },
    ],*/
  }, 
];


// Clients data // Clients.js
export  const Clients_data = [
  { 
    id: 1, 
    firstName: 'hamid', 
    lastName: 'Jon', 
    email: 'firstname.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 44, 
    firstName: 'mohammed', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 60, 
    firstName: 'khalid', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 23, 
    firstName: 'nadir', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 20, 
    firstName: 'sanae', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 12, 
    firstName: 'hanae', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 51, 
    firstName: 'salima', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 33, 
    firstName: 'salim', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 12, 
    firstName: 'hanae', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 12, 
    firstName: 'jana', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },
  { 
    id: 12, 
    firstName: 'senna', 
    lastName: 'Jon', 
    email: 'lastName.secondname@domain.com', 
    phone: '06 45 35 71 12', 
    cin: 'S14564' 
  },

];


// Projects table data

export const Projects_data = [
  {
    idProj: 1,
    ProjectName: 'site e-commerce',
    Client: 'mohammed chahboun',
    Service: 'Developemnt Web',
    SDate: '27/09/2022'
  },
  {
    idProj: 2,
    ProjectName: 'Design',
    Client: 'mohammed chahboun',
    Service: 'Web Design',
    SDate: '27/09/2022'
  },
  {
    idProj: 3,
    ProjectName: 'SEO Ecommerce',
    Client: 'mohammed chahboun',
    Service: 'Search Engine Optimization',
    SDate: '27/09/2022'
  },
  {
    idProj: 4,
    ProjectName: 'site e-commerce',
    Client: 'mohammed chahboun',
    Service: 'Marketing Digital',
    SDate: '27/09/2022'
  },
  {
    idProj: 5,
    ProjectName: 'site e-commerce',
    Client: 'mohammed chahboun',
    Service: 'Design',
    SDate: '27/09/2022'
  },
  {
    idProj: 6,
    ProjectName: 'site e-commerce',
    Client: 'Ahmed chahboun',
    Service: 'Design',
    SDate: '27/09/2022'
  },
];


// Facture Table Data 

export const Factures_data = [
  {
    idFact: 1,
    idProj: 1,
    Client: 'Adil kadaoui',
    SDate: '22/08/2022',
    DDate: '22/09/2022',
  },
  {
    idFact: 1,
    idProj: 1,
    Client: 'Mohammed Kada',
    SDate: '22/08/2022',
    DDate: '22/09/2022',
  },
  {
    idFact: 1,
    idProj: 1,
    Client: 'Samir Hadri',
    SDate: '22/08/2022',
    DDate: '22/09/2022',
  },
  {
    idFact: 1,
    idProj: 1,
    Client: 'Karima Skelli',
    SDate: '22/08/2022',
    DDate: '22/09/2022',
  },
  {
    idFact: 1,
    idProj: 1,
    Client: 'Khadija Najoui',
    SDate: '22/08/2022',
    DDate: '22/09/2022',
  },
];