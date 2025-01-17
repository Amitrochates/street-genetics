const AddressForm= ({details,setDetails}) => {
    return (
        <>
              {/* Address Form */}
              <h2 className="text-2xl font-bold mb-8">Contact Details</h2>
              <div className="space-y-4">
                <input value={details.contact} placeholder="Mobile Number" onChange={(e)=>{
                  setDetails({...details,contact: e.target.value})
                }} className="w-full bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg" />
                <input value={details.email} onChange={(e)=>{setDetails({...details,email: e.target.value})}} placeholder="Email ID" className="w-full bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg" />
                <h2 className="text-2xl font-bold mt-8 mb-4">Delivery Details</h2>
                <input value={details.name} onChange={(e)=>{setDetails({...details,name: e.target.value})}} placeholder="Name" className="w-full bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg" />
                <textarea value={details.address.location} onChange={(e)=>{setDetails({...details,address: {
                  ...details.address,
                  location: e.target.value
                }})}} placeholder="Address" className="w-full bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg"></textarea>
                <div className="grid grid-cols-2 gap-4">
                  <input value={details.address.city} onChange={(e)=>{setDetails({...details,address: {...details.address, city: e.target.value}})}}  placeholder="City" className="bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg" />
                  <input value={details.address.state} onChange={(e)=>{setDetails({...details,address: {...details.address, state: e.target.value}})}}  placeholder="State" className="bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg" />
                </div>
                <input value={details.address.pincode} onChange={(e)=>{setDetails({...details,address: {...details.address, state: e.target.value}})}} placeholder="Pincode" className="w-full bg-transparent border border-gray-700 rounded-lg p-4 focus:outline-none text-lg" />
              </div>
        </>
    )
}
export default AddressForm;