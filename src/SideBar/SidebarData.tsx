import {
  Home as HomeIcon,
  Mail as MailIcon,
  Topic as CVIcon
} from '@mui/icons-material'

export interface SidebarItem {
  title: string,
  icon: React.ReactNode,
  link: string
  className: string
}

export const SidebarData :SidebarItem[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
    className:'row'
  },
  {
    title: 'Resumee',
    icon: <CVIcon />,
    link: 'resumee/',
    className:'row'
  },
  {
    title: 'Contact me',
    icon: <MailIcon />,
    link: '/contact-me',
    className:'row'
  }

]

