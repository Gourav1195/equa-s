import { cookies } from 'next/headers'

export const getToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return token || null;
}

export const getAuthHeader = async () => {
  const token = await getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}
