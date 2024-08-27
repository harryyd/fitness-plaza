import React from 'react'

const Modals = () => {
  return (
    <div>
      <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-black text-white">
	<h2 className="text-xl font-semibold leading-tight tracking-wide text-center">Login please </h2>
	<p className="flex-1 dark:text-gray-600 text-center">please login before submiting the form else it will not get submiting </p>
	<div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
		{/* <button className="px-6 py-2 rounded-sm">Cancel</button> */}
		<button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-600 text-black hover:bg-black hover:text-white ease-in duration-300">Login</button>
	</div>
</div>
    </div>
  )
}

export default Modals
