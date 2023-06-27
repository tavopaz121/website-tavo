import { Form } from '@remix-run/react'
import { Link } from 'react-router-dom'
import { IconClose } from '../Icons'
import TextField from '../TextField/TextField'
import TextArea from '../TextArea/TextArea'
import SelectFile from '../SelectFile/SelectFile'
import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function PwPublishForm({ userName }) {
  const [srcImage, setSrcImage] = useState('')

  const onFileChange = (evt) => {
    const file = evt.target.files[0]

    const reader = new FileReader()
    reader.onload = handleReaderLoad
    reader.readAsDataURL(file)
  }

  const handleReaderLoad = (evt) => {
    const imageUrl = evt.target.result

    setSrcImage(imageUrl)
  }

  return (
    <section className="bg-[#ebecee]  rounded-t-lg w-full border border-gray-200 shadow-xl">
      <div className="bg-[#ecb30e] rounded-t-lg flex justify-center items-center">
        <h1 className="text-lg p-2 text-white font-bold top-0 w-full">
          {userName}, publica tu nueva comida sana
        </h1>
        <Link to="/">
          <IconClose />
        </Link>
      </div>

      <Form method="POST" action="/publish" className="p-4">
        <div className="grid gap-4 grid-cols-2">
          <TextField
            autoFocus
            required
            name="title"
            clsNInput="border-none mt-1 text-base outline-1 outline-yellow-400"
            type="text"
            label="Titulo de la publicación: "
          />
          <TextField
            required
            name="price"
            clsNInput="border-none mt-1 text-base outline-1 outline-yellow-400"
            type="number"
            label="Precio:"
            min="0"
          />
        </div>

        <SelectFile
          onChange={onFileChange}
          label="Seleccionar un archivo:"
          placeholder="Selecciona tu imagen..."
          clsNInput="border-2 border-transparent rounded-lg hover:border-2 hover:border-solid hover:border-yellow-400"
        />

        {srcImage && (
          <div className="relative">
            <img
              src={srcImage}
              alt={srcImage}
              className="min-w-full border-2 p-1 border-yellow-400 max-h-[300px] object-cover mb-4"
            />
            <button
              onClick={() => setSrcImage('')}
              className="absolute bg-red-500 rounded-sm top-2.5 right-2.5">
              <IconClose />
            </button>
          </div>
        )}

        <TextArea
          required
          label="Descripción del producto:"
          clsNInput="border-none text-base mt-1 outline-1 outline-yellow-400"
          rows={10}
          maxLength={250}
        />

        <div className="flex justify-between gap-5 mt-4">
          <Link
            to="/"
            className="text-red-700 w-full hover:text-white border border-red-700 hover:bg-red-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Cancelar
          </Link>

          <button className="text-white w-full text-center bg-[#FF9119] hover:bg-[#FF9119]/80 font-bold rounded-lg text-sm px-5 py-2.5 items-center mr-2 mb-2">
            Publicar
          </button>
        </div>
      </Form>
    </section>
  )
}
