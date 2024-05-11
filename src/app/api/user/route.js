import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import connect from '@/utils/mongoose'
import User from '@/models/user'

export async function GET() {
  const { id } = await currentUser()

  if (!id) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  } else {
    await connect()
    const user = await User.findOne({ id })
    return NextResponse.json(user, { status: 200 })
  }
}

export async function PUT(req) {
  const { id } = await currentUser()
  const body = await req.json()

  if (!id) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  } else {
    await connect()
    const user = await User.findOneAndUpdate({ id }, body, { new: true })
    return NextResponse.json(user, { status: 200 })
  }
}
