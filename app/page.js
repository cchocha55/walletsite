export default function Page() {
  const transactions = [
    { id: 1, name: "Send Money", amount: "- $120", status: "Completed" },
    { id: 2, name: "Cash In", amount: "+ $300", status: "Completed" },
    { id: 3, name: "Recharge", amount: "- $20", status: "Pending" }
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>My Wallet</h1>

      <h2>Balance: $5,420</h2>

      <h3>Transactions</h3>

      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.name} — {t.amount} ({t.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
