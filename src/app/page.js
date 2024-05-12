'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useSplitsMetadata, useSplitsBalance } from '@/utils/query/splits'

const Home = () => {
  const { data: metadata, isLoading: loadingMetadata } = useSplitsMetadata()
  const { data: balance, isLoading: loadingBalance } = useSplitsBalance()

  return (
    <div className={'container my-16 grid grid-cols-1 md:grid-cols-3 gap-4'}>
      <Card>
        <CardHeader>
          <CardTitle>Members</CardTitle>
          <CardDescription>Number of active Stakers Union Members</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingMetadata ? (
            <Skeleton className={'h-20'} />
          ) : (
            <p className={'text-6xl font-bold'}>{metadata.recipients.length}</p>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Distributed</CardTitle>
          <CardDescription>Funds Distributed to Stakers Union Members</CardDescription>
        </CardHeader>
        <CardContent>
          <p className={'text-6xl font-bold'}>0Ξ</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Funds</CardTitle>
          <CardDescription>Current Funds Pending Distribution</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingBalance ? (
            <Skeleton className={'h-20'} />
          ) : (
            <p className={'text-6xl font-bold'}>
              {
                balance?.activeBalances?.['0x0000000000000000000000000000000000000000']
                  ?.formattedAmount
              }
              Ξ
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Home
