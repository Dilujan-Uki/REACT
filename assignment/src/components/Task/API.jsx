import { useState, useEffect } from "react";
export default function API() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) return <p>Loading data...</p>;

    if (error) return <p className="text-red-700">Error: {error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Fetched Data</h2>

            <div className="grid gap-6">
                {data.slice(0, 10).map((item) => (
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6"  key={item.id} >                   
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}