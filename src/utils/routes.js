import { faPage, faGauge, faUser } from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'

const routes = {
  home: {
    path: 'https://stakersunion.com',
    title: 'Stakers Union',
    target: '_blank',
    hidden: true,
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
