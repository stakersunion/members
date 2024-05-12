'use client'

import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Title } from '@/components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useUser, useUpdateUser } from '@/utils/query/user'
import { Loader2 } from 'lucide-react'

const Profile = () => {
  const { data: user, isLoading, isError } = useUser()
  const { mutate: updateUser, isPending } = useUpdateUser()

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email().optional().or(z.literal('')),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
    values: user,
  })

  const onSubmit = (values) => {
    updateUser(values)
  }

  return (
    <div className={'container'}>
      <Title>Profile</Title>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={'space-y-8'}
        >
          <FormField
            control={form.control}
            name={'name'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder={'John Smith'}
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder={'test@example.com'}
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your preferred contact email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            type={'submit'}
          >
            {isPending && <Loader2 className={'mr-2 h-4 w-4 animate-spin'} />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Profile
