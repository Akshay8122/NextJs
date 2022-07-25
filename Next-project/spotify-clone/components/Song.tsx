import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSpotify from '../hooks/useSpotify'
import { millisToMinutesAndseconds } from '../lib/time'

function Song({ order, track }: any) {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrenTrackId] = useRecoilState(currentTrackIdState)
  const [isPlaying, setPlaying] = useRecoilState(isPlayingState)
  // console.log(track.track.album.images[0].url)

  const playSong = () => {
    setCurrenTrackId(track.track.id)
    setPlaying(true)
    spotifyApi.play({
      uris: [track.track.uri],
    })
  }

  return (
    <div
      className="grid cursor-pointer grid-cols-2 rounded-lg py-4 px-5 text-gray-500 hover:bg-gray-900"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p className="w-36  truncate text-white lg:w-64">
            {track.track.name}
          </p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className=" hidden w-40 md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndseconds(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
