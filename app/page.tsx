export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-6 text-4xl font-bold">
          ☕ Kyua Order Analyzer
        </h1>

        <textarea
          className="h-80 w-full rounded-xl border bg-white p-4"
          placeholder="Dán đơn hàng ShopeeFood hoặc Grab vào đây..."
        />

        <button className="mt-4 rounded-xl bg-black px-6 py-3 text-white">
          Phân tích
        </button>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">
            Kết quả
          </h2>

          <p className="mt-4 text-gray-500">
            Chưa có dữ liệu.
          </p>
        </div>

      </div>
    </main>
  );
}