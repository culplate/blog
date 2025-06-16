import { PostForm } from '@/components/PostForm/PostForm';

export default async function AdminPage() {
  return (
    <div className="max-w-sm mx-auto mt-24">
      <h1>ADMIN MAIN PAGE DASHBOARD</h1>
      <PostForm />
    </div>
  );
}
