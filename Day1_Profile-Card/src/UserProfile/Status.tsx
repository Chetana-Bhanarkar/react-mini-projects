type Availability = {
    status: boolean
}


const Status = ({ status }: Availability) => {
    return (
        <>
            <p> <span className="text-gray-600">Status : </span> {status ? 'Available' : 'Not-Available'}</p>
        </>
    )
};


export default Status;