'use client';
import { TextField, Button, MenuItem, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

type GenderType = 'MALE' | 'FEMALE' | 'OTHER';

interface Member {
  id?: string;
  name: string;
  username?: string;
  password?: string;
  email?: string;
  phoneNo?: string;
  gender?: GenderType;
  balance?: number;
  memberNo?: number;
}

export default function MemberForm({ id }: { id?: string }) {
  const [formData, setFormData] = useState<Member>({
    name: '',
    username: '',
    password: '',
    email: '',
    phoneNo: '',
    gender: 'MALE',
    balance: 0,
    memberNo: undefined,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // Edit mode: fetch data
      setLoading(true);
      fetch(`/api/members/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'balance' || name === 'memberNo' ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    const method = id ? 'PUT' : 'POST';
    const url = id ? `/api/members/${id}` : '/api/members';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (!res.ok) {
      alert('Error: ' + result.error);
    } else {
      alert(id ? 'Member updated' : 'Member created');
    }
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 500, margin: 'auto', mt: 4 }}>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
      <TextField label="Username" name="username" value={formData.username || ''} onChange={handleChange} />
      <TextField label="Password" name="password" value={formData.password || ''} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email || ''} onChange={handleChange} />
      <TextField label="Phone No" name="phoneNo" value={formData.phoneNo || ''} onChange={handleChange} />
      <TextField
        label="Gender"
        name="gender"
        value={formData.gender || 'MALE'}
        onChange={handleChange}
        select
      >
        {['MALE', 'FEMALE', 'OTHER'].map((g) => (
          <MenuItem key={g} value={g}>
            {g}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Balance"
        name="balance"
        type="number"
        value={formData.balance ?? ''}
        onChange={handleChange}
      />
      <TextField
        label="Member No"
        name="memberNo"
        type="number"
        value={formData.memberNo ?? ''}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit} disabled={loading}>
        {id ? 'Update' : 'Create'} Member
      </Button>
    </Stack>
  );
}
