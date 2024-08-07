'use client'
import React, { useState } from 'react'

export default function UpvoteButton() {
  const [upvoteCount, setUpvoteCount] = useState<number>(0)
  return (
    <button
      onClick={() => {
        setUpvoteCount(upvoteCount + 1)
        console.log(upvoteCount)
      }}
      className="bg-blue-500 text-white p-2 mt-10"
    >
      Upvote
    </button>
  )
}
