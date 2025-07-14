// app/api/members/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const members = await prisma.member.findMany();
  return NextResponse.json(members);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const newMember = await prisma.member.create({
      data: {
        name: body.name,
        username: body.username,
        password: body.password,
        email: body.email,
        phoneNo: body.phoneNo,
        gender: body.gender,
        balance: body.balance,
        memberNo: body.memberNo,
      },
    });
    return NextResponse.json(newMember, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
