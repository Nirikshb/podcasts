import React from 'react'

const CreateAPodcastPage = () => {
  return (
    <div>
        <Header />
        <div className='input-wrapper'>
        <h1>Create A Podcast</h1>
        <CreateAPodcastForm/>
        </div>
    </div>
  )
}

export default CreateAPodcastPage;