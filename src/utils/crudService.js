import supabase from './supabaseClient'

export async function listRows(table, { select = '*', orderBy = 'created_at', ascending = false } = {}) {
  let query = supabase.from(table).select(select)
  if (orderBy) query = query.order(orderBy, { ascending })
  const { data, error } = await query
  if (error) throw error
  return data || []
}

export async function createRow(table, values) {
  const { data, error } = await supabase.from(table).insert(values).select().single()
  if (error) throw error
  return data
}

export async function updateRow(table, id, values, idColumn = 'id') {
  const { data, error } = await supabase.from(table).update(values).eq(idColumn, id).select().single()
  if (error) throw error
  return data
}

export async function deleteRow(table, id, idColumn = 'id') {
  const { error } = await supabase.from(table).delete().eq(idColumn, id)
  if (error) throw error
}

export default {
  listRows,
  createRow,
  updateRow,
  deleteRow,
}



