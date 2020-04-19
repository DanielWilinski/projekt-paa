router.post('/updateStatus', async (ctx, next) => {
const { id, status } = ctx.request.body
await store.updateTaskStatus(id, status)
ctx.status = 200
})
