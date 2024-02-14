const Dashboard = () => {
    return (
        <div className="bg-blue-400">
            <button
                className="bg-danger hover:bg-dark-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => console.log('Danger Button clicked')}
            >
                Danger
            </button>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => console.log('Primary Button clicked')}
            >
                Primary
            </button>
        </div>
    )
}

export default Dashboard