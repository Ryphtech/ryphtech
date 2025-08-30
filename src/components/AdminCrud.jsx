import { useEffect, useMemo, useState } from 'react'
import { listRows, createRow, updateRow, deleteRow } from '../utils/crudService'

export default function AdminCrud({ table, columns, idColumn = 'id', title }) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const emptyForm = useMemo(() => Object.fromEntries(columns.map((c) => [c.key, ''])), [columns])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  async function refresh() {
    setLoading(true)
    setError('')
    try {
      const data = await listRows(table)
      setRows(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table])

  function onChange(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      if (editingId) {
        await updateRow(table, editingId, form, idColumn)
      } else {
        await createRow(table, form)
      }
      setForm(emptyForm)
      setEditingId(null)
      await refresh()
    } catch (e) {
      setError(e.message)
    }
  }

  async function onDelete(id) {
    if (!confirm('Delete this item?')) return
    try {
      await deleteRow(table, id, idColumn)
      await refresh()
    } catch (e) {
      setError(e.message)
    }
  }

  function startEdit(row) {
    setEditingId(row[idColumn])
    const next = {}
    columns.forEach((c) => {
      next[c.key] = row[c.key] ?? ''
    })
    setForm(next)
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
              <h1 className="mb-6 text-2xl font-semibold font-poppins">{title || `Manage ${table}`}</h1>

      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-50 p-3 text-red-700">{error}</div>
      )}

      <form onSubmit={onSubmit} className="mb-8 grid gap-4 rounded border p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {columns.map((col) => (
            <label key={col.key} className="text-sm">
              <span className="mb-1 block font-medium">{col.label}</span>
              <input
                className="w-full rounded border p-2"
                type="text"
                value={form[col.key] ?? ''}
                onChange={(e) => onChange(col.key, e.target.value)}
                placeholder={col.placeholder || col.label}
              />
            </label>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            disabled={loading}
          >
            {editingId ? 'Update' : 'Create'}
          </button>
          {editingId && (
            <button
              type="button"
              className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
              onClick={() => {
                setEditingId(null)
                setForm(emptyForm)
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              {columns.map((c) => (
                <th key={c.key} className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  {c.label}
                </th>
              ))}
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((row) => (
              <tr key={row[idColumn]}>
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-2 text-sm">
                    {String(row[c.key] ?? '')}
                  </td>
                ))}
                <td className="px-4 py-2 text-sm">
                  <div className="flex gap-2">
                    <button
                      className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                      onClick={() => startEdit(row)}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                      onClick={() => onDelete(row[idColumn])}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loading && <div className="mt-4 text-sm text-gray-600">Loading...</div>}
    </div>
  )
}



