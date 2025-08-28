import { useState } from 'react'
import { Edit, Trash2, Plus, X, Save } from 'lucide-react'
import { createRow, updateRow, deleteRow } from '../utils/crudService'

export default function AdminOverlay({ 
  table, 
  item, 
  fields, 
  onUpdate, 
  onDelete, 
  onAdd,
  className = "relative group",
  children
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(item || {})
  const [loading, setLoading] = useState(false)

  // If no item is provided, this is an "Add" operation
  const isAddOperation = !item

  const handleEdit = () => {
    setFormData(item || {})
    setIsEditing(true)
  }

  const handleAdd = () => {
    setFormData({})
    setIsEditing(true)
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      if (item?.id) {
        await updateRow(table, item.id, formData)
        onUpdate?.()
      } else {
        await createRow(table, formData)
        onAdd?.()
      }
      setIsEditing(false)
    } catch (error) {
      console.error('Error saving:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this item?')) return
    setLoading(true)
    try {
      await deleteRow(table, item.id)
      onDelete?.()
    } catch (error) {
      console.error('Error deleting:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFormData(item || {})
  }

  if (isEditing) {
    return (
      <div className={`${className} border-2 border-blue-500 rounded-lg p-4 bg-white`}>
        <div className="grid gap-3">
          {fields.map((field) => (
            <label key={field.key} className="text-sm">
              <span className="block font-medium mb-1">{field.label}</span>
              {field.key === 'description' ? (
                <textarea
                  className="w-full rounded border p-2"
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                  placeholder={field.placeholder || field.label}
                  rows={3}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  className="w-full rounded border p-2"
                  value={formData[field.key] || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                  placeholder={field.placeholder || field.label}
                />
              )}
            </label>
          ))}
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-1 rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
            >
              <Save size={16} />
              {isAddOperation ? 'Add' : 'Save'}
            </button>
            <button
              onClick={handleCancel}
              disabled={loading}
              className="flex items-center gap-1 rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Admin controls overlay */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-lg border p-1 flex gap-1">
        {isAddOperation ? (
          <button
            onClick={handleAdd}
            className="p-1 rounded hover:bg-gray-100"
            title="Add"
          >
            <Plus size={16} className="text-green-600" />
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="p-1 rounded hover:bg-gray-100"
              title="Edit"
            >
              <Edit size={16} className="text-blue-600" />
            </button>
            {item?.id && (
              <button
                onClick={handleDelete}
                disabled={loading}
                className="p-1 rounded hover:bg-gray-100"
                title="Delete"
              >
                <Trash2 size={16} className="text-red-600" />
              </button>
            )}
          </>
        )}
      </div>
      
      {/* Content goes here - will be passed as children */}
      {children}
    </div>
  )
}


