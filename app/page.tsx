export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-5xl font-bold">
          ☕ Kyua Handbook
        </h1>

        <input
          type="text"
          placeholder="🔍 Tìm công thức..."
          className="mb-8 w-full rounded-xl border bg-white p-4 text-lg shadow"
        />

        <div className="grid gap-6">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-3 text-2xl font-bold">
              🍵 Drinks
            </h2>

            <ul className="space-y-2">
              <li>Banana Caramel Matcha</li>
              <li>CB Salted Matcha</li>
              <li>Jasmine Matcha</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-3 text-2xl font-bold">
              🥛 Ingredients
            </h2>

            <ul className="space-y-2">
              <li>Vanilla Cream</li>
              <li>Salted Cream</li>
              <li>Caramel Sauce</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-3 text-2xl font-bold">
              📋 SOP
            </h2>

            <ul className="space-y-2">
              <li>Mở quán</li>
              <li>Đóng quán</li>
              <li>Kiểm kê cuối ngày</li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}