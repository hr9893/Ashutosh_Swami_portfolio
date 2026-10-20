export function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ashutosh Swami. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
