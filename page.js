export default function WalletWebsite() {
  const transactions = [
    { id: 1, name: 'Send Money', amount: '- $120', status: 'Completed' },
    { id: 2, name: 'Cash In', amount: '+ $300', status: 'Completed' },
    { id: 3, name: 'Mobile Recharge', amount: '- $20', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <h1 className="text-4xl font-bold mb-2">My Wallet</h1>
          <p className="text-gray-500">
            Transactional Banking Dashboard
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-blue-100 rounded-2xl p-6">
              <h2 className="text-lg font-semibold">Balance</h2>
              <p className="text-3xl font-bold mt-2">$5,420</p>
            </div>

            <div className="bg-green-100 rounded-2xl p-6">
              <h2 className="text-lg font-semibold">Income</h2>
              <p className="text-3xl font-bold mt-2">$2,100</p>
            </div>

            <div className="bg-red-100 rounded-2xl p-6">
              <h2 className="text-lg font-semibold">Expense</h2>
              <p className="text-3xl font-bold mt-2">$850</p>
            </div>

          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Recent Transactions
            </h2>

            <button className="bg-black text-white px-5 py-2 rounded-xl hover:opacity-90">
              New Transaction
            </button>
          </div>

          <div className="space-y-4">

            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between border rounded-2xl p-4 hover:shadow-md transition"
              >

                <div>
                  <h3 className="font-semibold text-lg">
                    {tx.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {tx.status}
                  </p>
                </div>

                <div
                  className={`font-bold text-lg ${
                    tx.amount.includes('-')
                      ? 'text-red-500'
                      : 'text-green-600'
                  }`}
                >
                  {tx.amount}
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
