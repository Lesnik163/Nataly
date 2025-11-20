import { getServerSession } from 'next-auth';
import { authOptions } from '@/features/api/auth/authConfig';
import { redirect } from 'next/navigation';

const Profile = async () => {
  // Проверяем авторизацию на сервере
  const session = await getServerSession(authOptions);

  // Если пользователь не авторизован - редиректим на главную
  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <h1>Профиль</h1>
      <p>Email: {session.user?.email}</p>
      <p>Имя: {session.user?.name}</p>
      <p>Роль: {session.user?.role}</p>
    </div>
  );
};

export default Profile;
