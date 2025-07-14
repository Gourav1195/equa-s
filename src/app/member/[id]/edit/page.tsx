// app/members/[id]/edit/page.tsx
'use client';
import { useParams } from 'next/navigation';
import MemberForm from '@/app/components/MemberForm';

export default function EditMemberPage() {
  const { id } = useParams();
  return <MemberForm id={id as string} />;
}
