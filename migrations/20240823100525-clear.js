export async function up(db) {
  await db.collection('users').updateMany(
      {},
      { $set: { urls: [], __v: 0 } }
  );

  await db.collection('urls').deleteMany({})
}