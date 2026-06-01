export async function asyncPool(concurrency, items, fn) {
  let i = 0
  const results = []

  async function next() {
    const index = i++
    if (index >= items.length) return
    results[index] = await fn(items[index], index)
    await next()
  }

  const workers = Array(Math.min(concurrency, items.length))
    .fill()
    .map(() => next())

  await Promise.all(workers)
  return results
}
