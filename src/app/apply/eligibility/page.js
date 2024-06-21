'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { SignatureForm } from '@/components/apply'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleInfo } from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'
import { routes } from '@/utils/routes'
import { useVerification } from '@/utils/query/user/verification'

const ApplyEligibility = () => {
  const { data: verification, isLoading } = useVerification()
  const router = useRouter()

  if (isLoading) {
    return <Skeleton className={'h-[400px]'} />
  }

  if (verification.eligibility.signature && verification.eligibility.status === 'pending') {
    return (
      <Alert>
        <FontAwesomeIcon icon={faFileCircleInfo} />
        <AlertTitle>Address Pending</AlertTitle>
        <AlertDescription>
          You have submitted an address that is pending approval. You will be notified by email when
          your address has been approved and you can proceed to the verification step.
        </AlertDescription>
      </Alert>
    )
  }

  if (verification.eligibility.status === 'approved') {
    return (
      <Alert>
        <FontAwesomeIcon icon={faFileCircleInfo} />
        <div className={'flex flex-wrap items-center'}>
          <div className={'ml-1 mt-1 mr-2 flex-1'}>
            <AlertTitle>Signature Approved</AlertTitle>
            <AlertDescription>
              Your signature has been approved, proceed to the next step for Proof of Independent
              Operation.
            </AlertDescription>
          </div>
          <Link href={routes.apply.children.independent.path}>
            <Button className={'mt-2 sm:mt-0 sm:w-auto w-full'}>Next</Button>
          </Link>
        </div>
      </Alert>
    )
  }

  return (
    <div>
      <Alert>
        <FontAwesomeIcon icon={faFileCircleInfo} />
        <div className={'flex flex-wrap items-center'}>
          <div className={'ml-1 mt-1 mr-2 flex-1'}>
            <AlertTitle>Instructions</AlertTitle>
            <AlertDescription>
              <ol className={'mt-2 ml-4 list-decimal'}>
                <li>Ensure that your address is on StakeCat List A</li>
                <li>Sign a message containing the Stakers Union Oath</li>
                <li>Submit a link to an Etherscan verified signature</li>
              </ol>
            </AlertDescription>
          </div>
          <Button className={'mt-2 sm:mt-0 sm:w-auto w-full'}>Detailed Instructions</Button>
        </div>
      </Alert>
      <div className={'my-6'}>
        <SignatureForm submitText={'Save and Continue'} />
      </div>
    </div>
  )
}

export default ApplyEligibility