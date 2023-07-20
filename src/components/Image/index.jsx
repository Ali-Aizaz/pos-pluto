import Image from 'next/image'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

const ImageInput = ({ title }) => {
  const [image, setImage] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.size <= 10 * 1024 * 1024) {
      setImage(URL.createObjectURL(file))
    } else {
      toast.error('Please select an image that is less than 10MB in size.')
    }
  }

  return image ? (
    <div className="w-[110px] border border-black/10 rounded-2xl">
      <Image
        src={image}
        alt="Selected"
        width={110}
        height={110}
        className="rounded-2xl"
      />
    </div>
  ) : (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="image-input"
      />
      <label htmlFor="image-input" className="cursor-pointer">
        <div className="bg-grayLight border-light-gray flex w-[110px] flex-col items-center space-y-3 rounded-2xl border border-dashed p-2 text-center">
          <div className="w-6">
            <Image
              src="/gallery-add.png"
              alt="add to gallery"
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-sm font-semibold text-light-gray">{title}</h1>
        </div>
      </label>
    </>
  )
}

export default ImageInput
