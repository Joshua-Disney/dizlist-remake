const dummyData = ['name1', 'nameTwo', 'otherName']

function DummyData() {
    return (
        <div>
            {dummyData.forEach(name => {
                return (<p>{name}</p>)
            })}
        </div>
    )
}

export default DummyData