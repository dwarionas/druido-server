export async function up(db, client) {
  await db.collection('users').updateMany(
      {},
      { $set: { urls: [] } }
  );

  await db.collection('urls').deleteMany({})
}