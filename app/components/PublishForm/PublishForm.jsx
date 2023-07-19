import { Form } from '@remix-run/react'
import { Link } from 'react-router-dom'
import { IconClose } from '../Icons'
import TextField from '../TextField/TextField'
import TextArea from '../TextArea/TextArea'
import SelectFile from '../SelectFile/SelectFile'
import { useState } from 'react'
import Button from '../Button/Button'
import ButtonLink from '../ButtonLink/ButtonLink'

/* eslint-disable react/prop-types */
export default function PublishForm({ userName }) {
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

  const removeImage = () => {
    setSrcImage(null)
  }

  return (
    // @TODO actualizar colores de acuerdo a una paleta de colores establecida
    <section className="bg-pw-white max-md:rounded-none rounded-t-lg w-full border border-pw-gray">
      <div className="bg-pw-green rounded-t-lg max-md:rounded-t-none flex justify-center items-center max-md:text-center">
        <h1 className="text-lg p-2 text-white font-bold top-0 w-full">
          {userName || 'Bienvenido'}, publica tu nueva comida sana
        </h1>
        <Link to="/" className='max-md:hidden'>
          <IconClose />
        </Link>
      </div>

      <Form
        data-testid="form"
        method="POST"
        action="/publish"
        className="p-4"
        data-cy="publish-form"
        encType="multipart/form-data">
        <div className="grid gap-4 grid-cols-7 max-md:block">
          <TextField
            // @TODO buscar de que manera mas organizada podemos usar clsN y clsNInput
            autoFocus
            required
            clsN="col-span-5"
            name="title"
            clsNInput="border-pw-gray mt-1 text-base outline-1 outline-pw-green"
            type="text"
            label="Titulo de la publicación: "
            data-cy="title-publish"
            data-testid="title-publish"
          />

          <TextField
            // @TODO buscar de que manera mas organizada podemos usar clsN y clsNInput
            required
            clsN="col-span-2"
            name="price"
            clsNInput="border-pw-gray mt-1 text-base outline-1 outline-pw-green"
            type="number"
            label="Precio:"
            min="0"
            data-cy="price-publish"
            data-testid="price-publish"
          />
        </div>

        <SelectFile
          accept=".jpg, .png"
          onChange={onFileChange}
          title="Seleccionar un archivo:"
          placeholder="Selecciona tu imagen..."
          clsNInput="border-pw-gray rounded-lg hover:border-pw-green"
          name="image"
          data-cy="image-publish"
          data-testid="image-publish"
        />

        {srcImage && (
          <div className="relative">
            <img
              data-testid="image-preview"
              src={srcImage}
              alt={srcImage}
              className="min-w-full border-2 p-1 border-pw-green max-h-[300px] max-md:h-[200px] object-cover mb-4"
            />
            <button
              onClick={removeImage}
              className="absolute bg-red-500 rounded-sm top-2.5 right-2.5">
              <IconClose />
            </button>
          </div>
        )}

        <TextArea
          name="description"
          required
          label="Descripción del producto:"
          clsNInput="border-pw-gray text-base mt-1 outline-1 outline-pw-green"
          rows={8}
          maxLength={250}
          data-cy="description-publish"
          data-testid="description-publish"
        />

        <div className="flex justify-between gap-5 mt-4">
          <ButtonLink
            content="Cancelar"
            className="w-full border-red-700 text-red-700"
            to="/"
          />

          <Button
            type="submit"
            text="Publicar"
            data-cy="btn-publish"
            className="w-full"
            color="green"
          />
        </div>
      </Form>
    </section>
  )
}
