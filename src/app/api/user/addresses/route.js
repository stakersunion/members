import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import connect from '@/utils/mongoose'
import User from '@/models/user'

export async function PUT(req) {
  const { id } = await currentUser()
  const body = await req.json()

  if (!id) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  } else {
    await connect()
    const user = await User.findOne({ id })
    const addressExists = user.addresses.some((address) => address.address === body.address)
    if (addressExists) {
      return NextResponse.json({ error: 'Address already exists' }, { status: 409 })
    } else {
      user.addresses.push({
        address: body.address,
        type: body.type,
        signature: body.signature,
      })
      await user.save()
    }
    return NextResponse.json(user, { status: 200 })
  }
}
