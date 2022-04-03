import { User, Account, Image, UserAccountInfo, UserInfo } from '../../types'
import { compare, match } from './string'

interface ConvertOptions {
  accounts: Account[]
  images: Image[]
  users: User[]
}

const getUserAvatar = (userId: string, images: Image[]) => {
  const image = images.find(image => image.userID === userId)

  return image?.url ?? ''
}

const getUserAccountInfo = (
  userId: string,
  accounts: Account[]
): UserAccountInfo => {
  const account = accounts.find(account => account.userID === userId)

  return {
    lastPayments: account?.payments.length ?? 0,
    posts: account?.posts ?? 0,
  }
}

export const convert = (options: ConvertOptions) => {
  const { accounts, images, users } = options

  return users.map<UserInfo>(user => {
    return {
      avatar: getUserAvatar(user.userID, images),
      ...getUserAccountInfo(user.userID, accounts),
      ...user,
    }
  })
}

export const sort = (data: UserInfo[], sortBy: string) => {
  if (!sortBy) return data

  return data.sort((a, b) => {
    return sortBy === 'asc' ? compare(a.name, b.name) : compare(b.name, a.name)
  })
}

interface FilterOptions {
  filters: string[]
  searchTerm: string
  sortBy?: string
}

export const filter = (data: UserInfo[], options: FilterOptions) => {
  const { filters, searchTerm, sortBy } = options

  if (!filters && !searchTerm) {
    return sort(data, sortBy)
  }

  console.log('filters', filters)

  const filteredData = data.filter(user => {
    const applyFilters = filters.length
      ? filters.reduce<boolean>((result, filter) => {
          return (
            result ||
            (filter === 'Without posts' && user.posts === 0) ||
            (filter === 'More than 100 posts' && user.posts >= 100)
          )
        }, false)
      : false

    const applySearchTerm = searchTerm
      ? match(user.name, searchTerm) ||
        match(user.username, searchTerm) ||
        match(user.country, searchTerm)
      : true

    return applySearchTerm || applyFilters
  })

  return sort(filteredData, sortBy)
}
