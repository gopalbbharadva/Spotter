import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "gopal",
    lastname: "bharadva",
    email: "gopal123@gmail.com",
    username: "go_pal",
    password: "gopal@123",
    website: "https://google.com/",
    bio: "neogcamp student",
    profileImg:
      "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [
      {
        _id: uuid(),
        firstname: "Mahesh",
        lastname: "Deshmukh",
        email: "maheshdeshmukh@gmail.com",
        username: "M_D_123",
        password: "Mahesh@123",
        website: "https://maheshdeshmukh.netlify.app/",
        bio: "true lier",
        profileImg:
          "https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    firstname: "Mahesh",
    lastname: "Deshmukh",
    email: "maheshdeshmukh@gmail.com",
    username: "M_D_123",
    password: "Mahesh@123",
    website: "https://maheshdeshmukh.netlify.app/",
    bio: "true lier",
    profileImg:
      "https://i.pinimg.com/550x/4d/72/97/4d7297dad94265c0acbc3b677d418935.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      {
        _id: uuid(),
        firstname: "Adarsh",
        lastname: "Balika",
        email: "adarshbalika@gmail.com",
        username: "adarshbalika",
        password: "adarshBalika123",
        website: "https://google.com/",
        bio: "neogcamp student",
        profileImg:
          "https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        followers: [],
        following: [],
      },
    ],
  },
  {
    _id: uuid(),
    firstname: "Himadri",
    lastname: "Shah",
    email: "himadrishah@gmail.com",
    username: "Himadri_892",
    password: "Himadri@123",
    website: "https://www.himadrishah.tech/",
    bio: "React developer",
    profileImg:
      "https://st2.depositphotos.com/2703645/11099/v/950/depositphotos_110991592-stock-illustration-female-cartoon-avatar-icon.jpg",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Nikhil",
    lastname: "Belide",
    email: "nikhilbelide@gmail.com",
    username: "Nikhil_23_nb",
    password: "Nikhil@456",
    website: "https://www.nikhil-belide.netlify.app/",
    bio: "mera adhar meri pehchan",
    profileImg:
      "https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
