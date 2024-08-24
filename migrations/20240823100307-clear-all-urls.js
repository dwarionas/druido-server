export async function up(db) {
  await db.collection('users').updateMany(
      {},
      { $set: { urls: [] } }
  );

  await db.collection('urls').deleteMany({})
}