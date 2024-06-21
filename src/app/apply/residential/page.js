'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleInfo } from '@awesome.me/kit-ebf6e3e7b8/icons/sharp/solid'
import { PhotoForm } from '@/components/apply'
import { useVerification, useUpdateVerification } from '@/utils/query/user/verification'

const ApplyResidential = () => {
  const { data: verification, isLoading } = useVerification()

  if (isLoading) {
    return <Skeleton className={'h-[400px]'} />
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
                <li>The hardware should be clearly visible.</li>
                <li>
                  An international newspaper front page or a printout of a news website must be
                  included, with the text "Stakers Union" visibly written on it.
                </li>
              </ol>
            </AlertDescription>
          </div>
          <Button className={'mt-2 sm:mt-0 sm:w-auto w-full'}>Detailed Instructions</Button>
        </div>
      </Alert>
      <PhotoForm />
    </div>
  )
}

export default ApplyResidential