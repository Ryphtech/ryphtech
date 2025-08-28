import { useEffect, useState } from 'react'
import AdminCrud from '../components/AdminCrud'
import AdminLogin from '../components/AdminLogin'
import supabase from '../utils/supabaseClient'

const pages = [
  { slug: 'team', title: 'Team', columns: [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'photo_url', label: 'Photo URL' },
    { key: 'linkedin_url', label: 'LinkedIn URL' },
  ] },
  { slug: 'services', title: 'Services', columns: [
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { key: 'icon', label: 'Icon' },
  ] },
  { slug: 'projects', title: 'Projects', columns: [
    { key: 'title', label: 'Title' },
    { key: 'summary', label: 'Summary' },
    { key: 'image_url', label: 'Image URL' },
    { key: 'project_url', label: 'Project URL' },
  ] },
  { slug: 'contact', title: 'Contact', columns: [
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'address', label: 'Address' },
  ] },
  { slug: 'about', title: 'About', columns: [
    { key: 'headline', label: 'Headline' },
    { key: 'content', label: 'Content' },
    { key: 'image_url', label: 'Image URL' },
  ] },
  { slug: 'blog', title: 'Blog', columns: [
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
    { key: 'author', label: 'Author' },
    { key: 'cover_url', label: 'Cover URL' },
  ] },
  { slug: 'testimonials', title: 'Testimonials', columns: [
    { key: 'author', label: 'Author' },
    { key: 'quote', label: 'Quote' },
    { key: 'company', label: 'Company' },
  ] },
]

export default function Admin() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s))
    return () => data.subscription.unsubscribe()
  }, [])

  if (loading) return <div className="p-6 text-sm text-gray-600">Loading...</div>
  if (!session) return <AdminLogin onSignedIn={() => setSession(true)} />

  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-xl font-semibold">Admin</h1>
        <button
          className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
          onClick={() => supabase.auth.signOut()}
        >
          Sign out
        </button>
      </div>
      {pages.map((p) => (
        <section key={p.slug} id={p.slug} className="border-b pb-10">
          <AdminCrud table={p.slug} columns={p.columns} title={`Manage ${p.title}`} />
        </section>
      ))}
    </div>
  )
}


