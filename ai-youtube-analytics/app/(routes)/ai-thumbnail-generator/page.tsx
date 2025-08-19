"use client"
import { ArrowUp, ImagePlus, User, X } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

function AiThumbnailGenerator() {

    const [userInput, setUserInput] = useState<string>();
    const [referenceImage, setReferenceImage] = useState<any>();
    const [faceImage, setFaceImage] = useState<any>();
    const [referenceImagePreview, setReferenceImagePreview] = useState<any>();
    const [faceImagePreview, setFaceImagePreview] = useState<any>();

    // console.log("input",userInput)
    const OnCrossClick =()=>{
            setReferenceImagePreview(null)
    }

    const onHandleFileChange = (field: string, e: any) => {
        const selectedFile = e.target.files[0];
        if (field == 'referenceImage') {
            setReferenceImage(selectedFile)
            setReferenceImagePreview(URL.createObjectURL(selectedFile))
            console.log('url', URL.createObjectURL(selectedFile))
        } else {
            setFaceImage(selectedFile)
            setFaceImagePreview(URL.createObjectURL(selectedFile))
        }
    }


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
                    <textarea placeholder='Enter your youtube video titel or description' className='w-full outline-0 bg-transparent'
                        onChange={(e) => setUserInput(e.target.value)} />
                    <div className='p-3 bg-gradient-to-t from-red-500 to-orange-500 rounded-full'>
                        <ArrowUp />
                    </div>
                </div>
                <div className='mt-3 flex gap-5'>
                    <label htmlFor="refernanceImageUplaod" className='w-full'>
                        {!referenceImagePreview ?
                            <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all cursor-pointer'>
                                <ImagePlus />
                                <h2>Referance Image</h2>
                            </div> :
                            <div className="relative inline-block">
                                {/* Close Icon */}
                                <button
                                    onClick={OnCrossClick}
                                    className="absolute -top-2 -right-2 bg-white rounded-full shadow p-1 hover:bg-gray-100 transition"
                                >
                                    <X className='w-4 h-4' />
                                </button>

                                {/* Image */}
                                <Image
                                    src={referenceImagePreview}
                                    alt="Reference Image"
                                    width={100}
                                    height={100}
                                    className="w-[70px] h-[70px] object-cover rounded-sm"
                                />
                            </div>


                        }
                    </label>
                    <input type='file' id='refernanceImageUplaod' className='hidden'
                        onChange={(e) => onHandleFileChange('referenceImage', e)} />
                    <label htmlFor="includeFace" className='w-full'>
                        {!faceImagePreview ? <div className='p-4 w-full border rounded-xl bg-secondary flex gap-2 items-center justify-center hover:scale-105 transition-all cursor-pointer'>
                            <User />
                            <h2>Include Face</h2>
                        </div> : <div className="relative inline-block">
                            <button
                                onClick={() => console.log("Remove image")}
                                className="absolute -top-2 -right-2 bg-white rounded-full shadow p-1 hover:bg-gray-100 transition"
                            >
                                <X className='w-4 h-4' />
                            </button>
                            <Image src={faceImagePreview} alt='Referance Image' width={100} height={100} className='w-[70px] h-[70px] object-cover rounded-sm' />
                        </div>

                        }
                    </label>
                    <input type="file" id='includeFace' className='hidden'
                        onChange={(e) => onHandleFileChange('faceImage', e)} />



                </div>
            </div>
        </div>
    )
}

export default AiThumbnailGenerator
