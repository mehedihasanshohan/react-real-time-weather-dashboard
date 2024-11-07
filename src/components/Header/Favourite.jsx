/* eslint-disable react/prop-types */

const Favourite = ({handleShowModal}) => {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
					<img src="/assets/heart.svg" alt="" />
					<button onClick={()=> handleShowModal()}>
            <span>Favourite Locations</span>
          </button>
				</div>
    </>
  )
}

export default Favourite