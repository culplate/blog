interface PostsLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function PostsLayout({ children, modal }: PostsLayoutProps) {
  return (
    <>
      {modal}
      <main className="max-w-sm mx-auto mt-24">
        <h1>Posts Layout</h1>
        <p>This is the posts layout content.</p>
        {children}
      </main>
    </>
  );
}
