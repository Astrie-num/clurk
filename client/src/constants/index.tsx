import {
  ChatOutlined,
  MailOutlineOutlined,
  Inventory2Outlined,
  DescriptionOutlined,
  GroupsOutlined,
  HelpOutlineOutlined,
  AlternateEmailOutlined,
  PersonOutlineOutlined,
  PieChartOutlineOutlined,
} from "@mui/icons-material";

interface ConstantProps {
  sidebar: {
    id: string;
    title: string;
    icon: any;
  }[];

  navbar: {
    id: string
    title: string
    navigation: string
  }[]
}

export const navigations: ConstantProps['navbar'] = [
  {
    id: "chats",
    title: "Chats",
    navigation: "/chats/:userId"
  },
  {
    id: "aboutUs",
    title: "About us",
    navigation: "/about-us"
  },
  {
    id: "contact",
    title: "Contact",
    navigation: "/contact"
  },
  {
    id: "findFriends",
    title: "Find friends",
    navigation: "/find-friends"
  }
] 

export const navigations2: string[] = ["Login", "Register"];

export const sidBarProps: ConstantProps["sidebar"] = [
  {
    id: "allChats",
    title: "All chats",
    icon: <ChatOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "messages",
    title: "Messages",
    icon: <MailOutlineOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "drafts",
    title: "Drafts",
    icon: <DescriptionOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "mentions",
    title: "Mentions",
    icon: <AlternateEmailOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "contacts",
    title: "Contacts",
    icon: <PersonOutlineOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "groups",
    title: "Groups",
    icon: <GroupsOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "archives",
    title: "Archives",
    icon: <Inventory2Outlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "blacklist",
    title: "Blacklist",
    icon: <PersonOutlineOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "statistics",
    title: "Statistics",
    icon: <PieChartOutlineOutlined sx={{ fontSize: "150%" }} />,
  },
  {
    id: "help",
    title: "Help",
    icon: <HelpOutlineOutlined sx={{ fontSize: "150%" }} />,
  },
];
