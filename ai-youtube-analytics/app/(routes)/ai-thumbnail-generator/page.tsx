import { ArrowUp, ImagePlus } from 'lucide-react'
import React from 'react'

function AiThumbnailGenerator() {
    return (
        <div>
            <div className='px-10 md:px-20 lg:px-40'>
                <div className='flex  items-center justify-center mt-20 flex-col gap-2'>
                    <h2 className='font-bold text-3xl'>
                        AI Thumbnail Generator
                    </h2>
                    <p className='text-gray-400 text-center '>Turn any video into a click magnet with thumbnails that grab attention and drive views, Our AI YouTube thumbnail maker creates professional designs instantly -
                        no design skills needed.</p>
                </div>
                <div className='flex gap-5 items-center p-3 border rounded-xl mt-10 bg-secondary'>
                    <textarea placeholder='Enter your youtube viedo titel or description' className='w-full outline-0 bg-transparent' />
<div className='p-3 bg-gradient-to-t from-red-500 to-orange-500 rounded-full'>
    <ArrowUp />
</div>
                </div>
                <div className='mt-3'>
                    <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center'>
                        <ImagePlus />
                        <h2>Referance Image</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiThumbnailGenerator
