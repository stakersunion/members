'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinus,
  faHourglassHalf,
  faCheck,
  faX,
} from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'
import { Button } from '@/components/ui/button'
import { useVerification, useVerificationStatus } from '@/utils/query/user/verification'
import { useAppeal } from '@/utils/query/user/appeal'
import { routes } from '@/utils/routes'

const Status = () => {
  const { data: verification, isLoading: loadingVerification } = useVerification()
  const { data: status, isLoading: loadingStatus } = useVerificationStatus()
  const { data: appeal, isLoading: loadingAppeal } = useAppeal()

  if (loadingVerification || loadingStatus || loadingAppeal) {
    return <Skeleton className={'h-[400px]'} />
  }

  const icon = {
    incomplete: faMinus,
    pending: faHourglassHalf,
    approved: faCheck,
    rejected: faX,
    ineligible: faCheck,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verification Status</CardTitle>
        <CardDescription>
          A summary of your progress with the Stakers Union verification process
        </CardDescription>
      </CardHeader>
      <CardContent className={'flex gap-3 flex-wrap md:flex-nowrap'}>
        <Alert>
          <AlertTitle>Proof of Eligibility</AlertTitle>
          <AlertDescription className={'text-muted-foreground'}>
            <FontAwesomeIcon
              icon={icon[verification.eligibility.status || 'incomplete']}
              className={'mr-2'}
            />
            {verification.eligibility.status || 'incomplete'}
            {appeal && appeal.status === 'pending' && ' - under appeal'}
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTitle>Proof of Independent Operation</AlertTitle>
          <AlertDescription className={'text-muted-foreground'}>
            <FontAwesomeIcon
              icon={icon[verification.independent.status || 'incomplete']}
              className={'mr-2'}
            />
            {verification.independent.status || 'incomplete'}
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTitle>Proof of Residential Operation</AlertTitle>
          <AlertDescription className={'text-muted-foreground'}>
            <FontAwesomeIcon
              icon={icon[verification.residential.status || 'incomplete']}
              className={'mr-2'}
            />
            {verification.residential.status || 'incomplete'}
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter>
        {(status.current !== 'residential' ||
          (status.status !== 'approved' && status.status !== 'ineligible')) && (
          <Link href={routes.apply.children[status.current].path}>
            <Button>Continue Application</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

export default Status
