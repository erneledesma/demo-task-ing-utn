import { useState } from "react"



export const Formulario = () => {

    const [ tarea, setTarea ] = useState('')
    const [incidencia, setIncidencia] = useState('')
    const [estado, setEstado] = useState('')
    const [fecha, setFecha] = useState('')
    const [resumen, setResumen] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [prioridad, setPrioridad] = useState('')

    // const [error, setError] = useState(false)
    
    
    return (


    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <p className="font-black text-lg mt-5 text-center mb-10">Añade tareas y {''} <span className="text-indigo-600 font-bold">Administralas</span></p>

    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Proyecto</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="proyecto"
            placeholder="Nombre del proyecto"
            value={tarea}
            onChange={e => setTarea(e.target.value)}
            >
            </input>
        </div>

        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Tipo de incidencia</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="proyecto"
            placeholder="Nombre del proyecto"
            value={incidencia}
            onChange={e => setIncidencia(e.target.value)}
            >
            </input>
        </div>

        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Estado</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="Estado"
            placeholder="Estado de la incidencia"
            value={estado}
            onChange={e => setEstado(e.target.value)}
            >
            </input>
        </div>

        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Fecha</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="Fecha"
            placeholder="Fecha de la incidencia"
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            >
            </input>
        </div>

        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Resumen</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="resumen"
            placeholder="Resumen de la incidencia"
            value={resumen}
            onChange={e => setResumen(e.target.value)}
            >
            </input>
        </div>

        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Descripcion</label>
            <input 
           className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="descripcion"
            placeholder="Descripcion de la incidencia"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            >
            </input>
        </div>

        <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">Prioridad</label>
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow"
            id="priodidad"
            placeholder="Prioridad de la incidencia"
            value={prioridad}
            onChange={e => setPrioridad(e.target.value)}
            >
            </input>

            <button 
            className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
            type="submit"
            >
                Agragar tarea
            </button>
        </div>
    </form>
    </div>

  )
}
