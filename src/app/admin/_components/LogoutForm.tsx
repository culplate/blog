import { logout } from '@/lib/auth/logout';

export function LogoutForm() {
  return (
    <form
      action={async () => {
        await logout();
      }}
    >
      <button type="submit">Log out</button>
    </form>
  );
}
