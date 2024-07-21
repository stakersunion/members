import {
  faPage,
  faGauge,
  faUser,
  faHexagonImage,
  faHandFist,
  faHandshakeAngle,
  faCircleDollarToSlot,
} from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'
import { faDiscord, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const routes = {
  home: {
    path: '/',
    title: 'Stakers Union',
    target: '_blank',
    hidden: true,
  },
  get_involved: {
    apply: {
      title: 'Unite',
      description: 'Apply to join the Stakers Union today!',
      path: '/apply',
      icon: faHandFist,
    },
    proposal: {
      title: 'Proposal',
      description: 'Read the Stakers Union proposal.',
      path: 'https://docs.stakersunion.com',
      icon: faPage,
      target: '_blank',
    },
    discord: {
      title: 'Discord',
      description: 'Join the Discord to get help and chat with other members.',
      path: 'https://discord.com/invite/vAGDagR7JT',
      icon: faDiscord,
      target: '_blank',
    },
    poap: {
      title: 'POAP',
      description: 'Mint a POAP to express your support!',
      path: 'https://poap.website/probably-arrive-detail',
      icon: faHexagonImage,
      target: '_blank',
    },
  },
  contribute: {
    partnerships: {
      title: 'Partnerships',
      description: 'Learn more about our partners and how to become one.',
      path: '/#partnerships',
      icon: faHandshakeAngle,
    },
    donate: {
      title: 'Donate',
      description: 'Give back to solo-stakers through a donation.',
      path: 'https://app.ens.domains/stakersunion.eth',
      icon: faCircleDollarToSlot,
      target: '_blank',
    },
  },
  follow: {
    twitter: {
      title: 'Twitter',
      description: 'Follow us on X/Twitter for the latest updates.',
      path: 'https://x.com/stakersunion',
      icon: faXTwitter,
      target: '_blank',
    },
    github: {
      title: 'GitHub',
      description: 'Check out and contribute to our code on GitHub.',
      path: 'https://github.com/stakersunion/',
      icon: faGithub,
      target: '_blank',
    },
    discord: {
      title: 'Discord',
      description: 'Join the Discord to get help and chat with other members.',
      path: 'https://discord.gg/vAGDagR7JT',
      icon: faDiscord,
      target: '_blank',
    },
  },
  dashboard: { path: '/', title: 'Dashboard', icon: faGauge },
  account: {
    path: '/account',
    title: 'Account',
    icon: faUser,
    children: {
      profile: { path: '/account/profile', title: 'Profile' },
      status: { path: '/account/status', title: 'Status' },
      addresses: { path: '/account/addresses', title: 'Addresses' },
      validators: { path: '/account/validators', title: 'Validators' },
      appeal: { path: '/account/appeal', title: 'Appeal' },
    },
  },
  apply: {
    path: '/apply',
    title: 'Apply',
    hidden: true,
    children: {
      profile: {
        path: '/apply/profile',
        title: 'Profile',
        description: 'Set up account information',
      },
      eligibility: {
        path: '/apply/eligibility',
        title: 'Eligibility',
        description: 'Sign the Stakers Union oath',
      },
      independent: {
        path: '/apply/independent',
        title: 'Independent Operation',
        description: 'Schedule verification of node operation',
      },
      residential: {
        path: '/apply/residential',
        title: 'Residential Operation',
        description: 'Submit a photo of your home node',
      },
    },
  },
  proposal: {
    path: 'https://docs.stakersunion.com',
    title: 'Proposal',
    icon: faPage,
    target: '_blank',
  },
  admin: {
    path: '/admin/users',
    title: 'Admin',
    hidden: true,
    children: {
      users: { path: '/admin/users', title: 'Users' },
      user: { path: '/admin/users/[id]', title: 'User', hidden: true },
      address: { path: '/admin/users/[id]/address/[address]', title: 'Address', hidden: true },
    },
  },
}

const getRoute = ({ path, params }) => {
  let generatedPath = path
  for (const [key, value] of Object.entries(params)) {
    generatedPath = generatedPath.replace(`[${key}]`, value)
  }
  return generatedPath
}

export { routes, getRoute }
