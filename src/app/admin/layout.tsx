import Link from 'next/link';
import { signOut } from '../../../auth';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <h1>this is layout</h1>

      {/* sidebar */}
      <aside>
        im side bar
        <nav>
          <ul>
            <li>
              <Link href="/admin">Home/dashboard</Link>
            </li>
            <li>
              <Link href="/admin/posts">Posts</Link>
            </li>
            <li>
              <Link href="/admin/categories">Categories</Link>
            </li>
            <li>
              <Link href="/admin/featured">Featured</Link>
            </li>
          </ul>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/login' });
            }}
          >
            <button type="submit">Log out</button>
          </form>
        </nav>
      </aside>
      {children}
    </main>
  );
}
