import React from 'react'

const Banner = () => {
  return (
    <div className='banner' style={{ backgroundImage: "url('./big-banner.jpg')" }}>
      <div className="banner-content">
        <h1>American Horror Story</h1>
        <span>
          An anthology of stories consisting of a house with a deadly secret, a
          demented asylum, <br></br>a witch coven, an unusual show, a hotel,
          <br></br>a haunted farmhouse, a cult and an apocalypse.
        </span>
      </div>
    </div>
  )
}

export default Banner
