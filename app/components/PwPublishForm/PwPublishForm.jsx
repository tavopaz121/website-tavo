import { Form } from '@remix-run/react'
import { Link } from 'react-router-dom'
import { IconClose } from '../Icons'
import TextField from '../TextField/TextField'
import TextArea from '../TextArea/TextArea'
import SelectFile from '../SelectFile/SelectFile'

/* eslint-disable react/prop-types */
export default function PwPublishForm({ userName }) {
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
            required
            name="title"
            clsNInput="border-none outline-none mt-1 text-base"
            type="text"
            label="Titulo de la publicación: "
          />
          <TextField
            required
            name="price"
            clsNInput="border-none outline-none mt-1 text-base"
            type="number"
            label="Precio:"
            min="0"
          />
        </div>

        <SelectFile
          label="Seleccionar un archivo:"
          placeholder="Selecciona tu imagen..."
          clsNInput="border-none rounded-lg"
        />

        <TextArea
          required
          label="Descripción del producto:"
          clsNInput="border-none outline-none text-base mt-1"
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
