const Conversation = ({conversation, lastIdx}) => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic}  alt="user avatar"/>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{Conversation.fullName}</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Conversation



//Stater Code
// const Conversation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//             <div className="w-12 rounded-full">
//                 <img src="https://randomuser.me/api/portraits"  alt="user avatar"/>
//             </div>
//         </div>
//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200">Quan Nguyen</p>
//             </div>
//         </div>
//     </div>
//     <div className="divider my-0 py-0 h-1"></div>
//     </>
//   )
// }

// export default Conversation
